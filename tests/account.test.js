require("dotenv").config();
const Lichess = require("..");

/* 
A lichess token is need for the majority of the tests.
Use a environment variable TOKEN
 */

const token = process.env.TOKEN || "";
const lichess = new Lichess(token);

// Helper function
function checkExpectedKeys(data, expectedKeys) {
  return expectedKeys.every((key) => data.hasOwnProperty(key));
}

test("Get my profile", async () => {
  let data = await lichess.account.account();
  let expectedKeys = [
    "id",
    "username",
    "perfs",
    "createdAt",
    "seenAt",
    "playTime",
    "url",
    "count",
    "followable",
    "following",
    "blocking",
    "followsYou",
  ];
  expect(checkExpectedKeys(data, expectedKeys)).toBeTruthy();
});

test("Get my email address", async () => {
  let data = await lichess.account.email();
  let expectedKeys = ["email"];
  expect(checkExpectedKeys(data, expectedKeys)).toBeTruthy();
});

test("Get my preferences", async () => {
  let data = await lichess.account.preferences();
  let expectedKeys = ["prefs", "language"];
  expect(checkExpectedKeys(data, expectedKeys)).toBeTruthy();
});

let kidStatus;

test("Get my kid mode status", async () => {
  let data = await lichess.account.kid();
  let expectedKeys = ["kid"];
  expect(checkExpectedKeys(data, expectedKeys)).toBeTruthy();

  kidStatus = data.kid;
});

test("Set my kid mode status ", async () => {
  expect(kidStatus).toBeDefined();
  expect(typeof kidStatus).toBe("boolean");

  if (kidStatus) {
    let data = await lichess.account.kidOn();
    expect(data.ok).toBe(true);
  } else {
    let data = await lichess.account.kidOff();
    expect(data.ok).toBe(true);
  }
});
