const { json } = require("body-parser");
const request = require("supertest");
const app = require("../../../app");

describe("Integration test: deleting a contact from the current list.", ()=>{
    let agent = request.agent(app);
    let token = null;
    beforeAll (()=>agent
    .post('/user/login')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .send({email_address: "testbot@gmail.com", password: "Test12345"})
    .then((res)=>{
        token = res     // we extract the token from the response. 
        .headers['set-cookie'][0]
        .split(',')
        .map(item => item.split(';')[0])
        .join(';').substring(8)     // 8 is the start index of our token.
    }));
    test("TC1: when the contact is in our database", async ()=>{
        const res = await agent.delete("/contact/deleteContact/616e9577f637d92a10b8af3d")
            .set('Authorization', `Bearer ` + token)
            .send();
        expect(res.statusCode).toBe(200);
        expect(res.type).toBe("application/json");
        expect(res.text).toContain("Contact Successfully Deleted :)");
    })
    
    test("TC2: when the contact id is invalid", async ()=>{
        const res = await agent.delete("/contact/deleteContact/12345")
            .set('Authorization', `Bearer ` + token)
            .send({name:"testcase"});
            expect(res.statusCode).toBe(400);
            expect(res.type).toBe("text/html");
            expect(res.text).toContain("Database Access Failure :(");
    })
});