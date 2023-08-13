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

test("Get my ongoing games", async () => {
  let data = await lichess.games.current();

  let expectedKeys = ["nowPlaying"];
  expect(checkExpectedKeys(data, expectedKeys)).toBeTruthy();

  expect(Array.isArray(data.nowPlaying)).toBe(true);
});

test("Export one game", async () => {
  let data = await lichess.games.get("ZE2OWgVQ");
  let expectedKeys = [
    "analysis",
    "clock",
    "clocks",
    "createdAt",
    "id",
    "lastMoveAt",
    "moves",
    "opening",
    "perf",
    "players",
    "rated",
    "speed",
    "status",
    "variant",
    "winner",
  ];
  expect(checkExpectedKeys(data, expectedKeys)).toBeTruthy();

  expect(data.createdAt).toBe(1691747307968);
});

test("Export games by IDs", async () => {
  let ids = ["ZE2OWgVQ", "eYaJ0fsB"];
  let data = await lichess.games.listByIds(ids);

  expect(Array.isArray(data)).toBe(true);

  expect(data[0].createdAt).toBe(1691747307968);
});

test("Export games of a user", async () => {
  let options = { max: 10 };
  let data = await lichess.games.listByUser("thibault", options);

  expect(Array.isArray(data)).toBe(true);

  expect(data.length).toBe(options.max);
});
