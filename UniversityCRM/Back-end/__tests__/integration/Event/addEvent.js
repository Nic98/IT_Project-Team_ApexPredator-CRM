const { json } = require("body-parser");
const request = require("supertest");
const app = require("../../../app");

describe("Integration test: adding a new event to the calendar.", ()=>{
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
        const res = await agent.post("/event/addEvent")
            .set('Authorization', `Bearer ` + token)
            .send({
                "type": "presentation2021",
                "priority": 1,
                "description": "p0",
                "user_id": "6142b098cab5e039344a0c6e",
                "date": {
                    "year": 2021,
                    "month": 7,
                    "day": 1
                }
            });
        expect(res.statusCode).toBe(200);
        expect(res.type).toBe("application/json");
    })
    test("TC2: when the user_id is not in our database", async ()=>{
        const res = await agent.post("/event/addEvent")
            .set('Authorization', `Bearer ` + token)
            .send({
                "type": "presentation2021",
                "priority": 1,
                "description": "p0",
                "user_id": "123test!!test",
                "date": {
                    "year": 2021,
                    "month": 7,
                    "day": 1
                }
            });
        expect(res.statusCode).toBe(400);
        expect(res.type).toBe("text/html");
    })
});