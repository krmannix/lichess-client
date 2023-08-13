require("dotenv").config();
const Client = require("../lib/client");

/* 
A lichess token is need for the majority of the tests.
Use a environment variable TOKEN
 */

const token = process.env.TOKEN || "";
const client = new Client(token);

test("Access Token is defined", () => {
  expect(token).toBeDefined();
});

test("Access Token is a string", () => {
  expect(typeof token).toBe("string");
});

test("Access Token is Authorized", async () => {
  const path = "api/account";
  const headers = {
    Accept: "application/json",
  };

  let res = await client.get(path, headers);
  let data = await JSON.parse(res);
  expect(data.hasOwnProperty("id")).toBe(true);
});
