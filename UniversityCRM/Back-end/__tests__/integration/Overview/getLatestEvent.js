const { json } = require("body-parser");
const request = require("supertest");
const app = require("../../../app");
describe("Integration test: getting details of an event in the calendar.", ()=>{
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
        const res = await agent.get("/overview/getLatestEvent")
            .set('Authorization', `Bearer ` + token)
            .send();
        expect(res.statusCode).toBe(200);
        expect(res.type).toBe("application/json");
    })
});