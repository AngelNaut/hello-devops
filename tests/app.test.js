const request = require("supertest");
const app = require("../src/index");

describe("GET /", () => {
  it("debe responder 200 y el mensaje Hola Mundo", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("message", "Hola Mundo DevOps!");
  });
});
