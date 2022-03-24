import server from "../../../src/server";
import request from "supertest";

// close the server after each test
afterEach((done) => {
  server.close();
  done();
});

describe("routes/index", () => {
  it("gets list of all items", async () => {
    const response = await request(server).get("/api/items");
    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
    expect(response.body.data).toEqual([2, 2]);
  });
});
