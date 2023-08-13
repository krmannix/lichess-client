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

test("Get users followed by the logged in user", async () => {
  let data = await lichess.relations.following();

  expect(Array.isArray(data)).toBe(true);
});

/* 
This does not verify the quality of the data received.

Whe more functions are available it is possible to do the following:

1. Get following
2. Follow some test player
3. Check new following and check data quality
4. UnFollow some test player
5. Following should be equal to start

*/
