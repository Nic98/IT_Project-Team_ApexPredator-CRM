const { json } = require("body-parser");
const request = require("supertest");
const app = require("../../../app");

describe("Integration test: adding a new contact to the current list.", ()=>{
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
    test("TC1: when the operation is valid", async ()=>{
        const res = await agent.post("/contact/addContact")
            .set('Authorization', `Bearer ` + token)
            .send({name:"testcase"});
        expect(res.statusCode).toBe(301);
        expect(res.type).toBe("text/plain");
    })
});