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

test("Get user activity", async () => {
  let data = await lichess.users.activityByUsername("api_dummy");

  expect(Array.isArray(data)).toBe(true);
  expect(data[0].hasOwnProperty("interval"));
});

test("Get user public data", async () => {
  let data = await lichess.users.get("api_dummy");

  expect(data.createdAt).toBe(1691682999520);
});

test("Get members of a team", async () => {
  let data = await lichess.users.listByTeamId("api_dummy_team");

  expect(Array.isArray(data)).toBe(true);
  expect(data[0].username).toBe("api_dummy");
});

test("Get users by ID", async () => {
  let usernames = ["api_dummy", "thibault"];
  let data = await lichess.users.listByUsernames(usernames);

  expect(Array.isArray(data)).toBe(true);
  expect(data[0].createdAt).toBe(1691682999520);
  expect(data[1].createdAt).toBe(1290415680000);
});

test("Get live streamers", async () => {
  let data = await lichess.users.liveStreams();

  expect(Array.isArray(data)).toBe(true);
  if (data.length > 0) {
    let expectedKeys = ["stream", "streamer"];
    expect(checkExpectedKeys(data[0], expectedKeys)).toBeTruthy();
  }
});

test("Get real-time users status", async () => {
  let usernames = ["thibault"];
  let data = await lichess.users.statusesByUsernames(usernames);

  expect(Array.isArray(data)).toBe(true);
  expect(data[0].patron).toBe(true);
});
