const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
    it("respond with This is the sample project to test CI/CD", (done) => {
    request(app).get("/").expect("This is the sample project to test CI/CD", done);
    })
});