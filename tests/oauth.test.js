require("dotenv").config();
const Client = require("../lib/client");

/* 
A lichess token is need for the majority of the tests.
Use a environment variable TOKEN
 */

const token = process.env.TOKEN || "";
const client = new Client(token);

// Helper function
function checkExpectedKeys(data, expectedKeys) {
  return expectedKeys.every((key) => data.hasOwnProperty(key));
}

describe("Access Token is an environment variable", () => {
  test("Access Token is defined", () => {
    expect(token).toBeDefined();
  });

  test("Access Token is a string", () => {
    expect(typeof token).toBe("string");
  });
});

describe("Test access token", () => {
  let data;
  beforeAll(async () => {
    const path = "api/token/test";
    const headers = {
      Accept: "application/json",
      "Content-Type": "text/plain",
    };
    const body = [token, "lip_badToken"].toString();

    let res = await client.post(path, headers, body);

    data = await JSON.parse(res);
    console.log(data);
  });

  test("Bad Token is null", async () => {
    expect(data["lip_badToken"]).toBe(null);
  });

  test("Access Token has expected keys", () => {
    let expectedKeys = ["userId", "scopes", "expires"];
    expect(checkExpectedKeys(data[token], expectedKeys)).toBeTruthy();
  });

  test("Access Token has not expired", () => {
    expect(data[token]["expires"]).toBeGreaterThan(Date.now());
  });
});
