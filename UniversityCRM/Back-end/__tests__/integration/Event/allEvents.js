const { json } = require("body-parser");
const request = require("supertest");
const app = require("../../../app");
describe("Integration test: displaying all events of the user.", ()=>{
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
        const res = await agent.get("/event/allEvent/6142ad9d648055740c9272e4")
            .set('Authorization', `Bearer ` + token)
            .send({});
        expect(res.statusCode).toBe(200);
        expect(res.type).toBe("application/json");
    })
    test("TC2: when the user id is invalid.", async ()=>{
        const res = await agent.get("/event/allEvent/test123test")
            .set('Authorization', `Bearer ` + token)
            .send({});
        expect(res.statusCode).toBe(400);
        expect(res.type).toBe("text/html");
    })
});