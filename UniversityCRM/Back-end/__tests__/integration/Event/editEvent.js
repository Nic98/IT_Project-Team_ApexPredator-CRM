const { json } = require("body-parser");
const request = require("supertest");
const app = require("../../../app");
describe("Integration test: editing an event in the calendar.", ()=>{
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
        const res = await agent.put("/event/editEvent/617122dabc6d2130ecb24d4b")
            .set('Authorization', `Bearer ` + token)
            .send({description: "editing test."});
        expect(res.statusCode).toBe(200);
        expect(res.type).toBe("application/json");
    })
    test("TC2: when the event is not found in database.", async ()=>{
        const res = await agent.put("/event/editEvent/test123test")
            .set('Authorization', `Bearer ` + token)
            .send({description: "should be invalid."});
        expect(res.statusCode).toBe(400);
        expect(res.type).toBe("text/html");
    })
});