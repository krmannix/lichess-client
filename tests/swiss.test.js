require("dotenv").config();
const Lichess = require("..");

/* 
A lichess token is need for the majority of the tests.
Use a environment variable TOKEN
 */

const token = process.env.TOKEN || "";
const lichess = new Lichess(token);

/* 
A teamID is need for the majority of team related tests
Use a environment variable TEAM
 */

const teamId = process.env.TEAM || "";

// Helper function
function checkExpectedKeys(data, expectedKeys) {
  return expectedKeys.every((key) => data.hasOwnProperty(key));
}

function isPlainObject(variable) {
  return (
    typeof variable === "object" &&
    !Array.isArray(variable) &&
    variable !== null
  );
}

describe("Team is an environment variable", () => {
  test("Team is defined", () => {
    expect(teamId).toBeDefined();
  });

  test("Team is a string", () => {
    expect(typeof teamId).toBe("string");
  });
});

let tournamentId;

describe("Create a new Swiss tournament", () => {
  let data;

  beforeAll(async () => {
    const options = {
      clock: {
        limit: 300,
        increment: 3,
      },
      nbRounds: 5,
      password: "somePassword",
    };

    data = await lichess.swiss.create(teamId, options);

    tournamentId = data.id;
  });

  test("Data is an object", () => {
    expect(isPlainObject(data)).toBeTruthy();
  });

  test("Data has expected keys", () => {
    let expectedKeys = [
      "id",
      "createdBy",
      "startsAt",
      "name",
      "clock",
      "variant",
      "round",
      "nbRounds",
      "nbPlayers",
      "nbOngoing",
      "status",
      "nextRound",
      "stats",
      "rated",
    ];
    expect(checkExpectedKeys(data, expectedKeys)).toBeTruthy();
  });
});

describe("Get info about a Swiss tournament", () => {
  let data;

  beforeAll(async () => {
    data = await lichess.swiss.get("35Rw0INn");
  });

  test("Data is an object", () => {
    expect(isPlainObject(data)).toBeTruthy();
  });

  test("Data has expected keys", () => {
    let expectedKeys = [
      "id",
      "createdBy",
      "startsAt",
      "name",
      "clock",
      "variant",
      "round",
      "nbRounds",
      "nbPlayers",
      "nbOngoing",
      "status",
      "stats",
      "rated",
    ];
    expect(checkExpectedKeys(data, expectedKeys)).toBeTruthy();
  });

  test("Confirm data values", () => {
    expect(data).toMatchSnapshot();
  });
});

describe("Update a Swiss tournament", () => {
  let data;

  beforeAll(async () => {
    data = await lichess.swiss.update(tournamentId);
  });

  test("Data is an object", () => {
    expect(isPlainObject(data)).toBeTruthy();
  });

  test("Data has expected keys", () => {
    let expectedKeys = [
      "id",
      "createdBy",
      "startsAt",
      "name",
      "clock",
      "variant",
      "round",
      "nbRounds",
      "nbPlayers",
      "nbOngoing",
      "status",
      "stats",
      "rated",
    ];
    expect(checkExpectedKeys(data, expectedKeys)).toBeTruthy();
  });

  test("Data has expected values", () => {
    expect(data.startsAt).toBe("2023-08-22T20:00:00Z");
  });
});

describe("Manually schedule the next round", () => {
  let data;

  beforeAll(async () => {
    data = await lichess.swiss.manualSchedule(tournamentId, "2524521600000");
  });

  test("Data is a string", () => {
    expect(typeof data).toBe("string");
  });

  test("Data is empty string", () => {
    expect(data).toBe("");
  });
});

describe("Join a Swiss tournament", () => {
  let data;

  beforeAll(async () => {
    data = await lichess.swiss.join(tournamentId, "somePassword");
  });

  test("Data is an object", () => {
    expect(isPlainObject(data)).toBeTruthy();
  });

  test("Data has expected keys", () => {
    let expectedKeys = ["ok"];
    expect(checkExpectedKeys(data, expectedKeys)).toBeTruthy();
  });

  test("Data has expected values", () => {
    expect(data.ok).toBe(true);
  });
});

describe("Pause or leave a swiss tournament", () => {
  let data;

  beforeAll(async () => {
    data = await lichess.swiss.pause(tournamentId);
  });

  test("Data is an object", () => {
    expect(isPlainObject(data)).toBeTruthy();
  });

  test("Data has expected keys", () => {
    let expectedKeys = ["ok"];
    expect(checkExpectedKeys(data, expectedKeys)).toBeTruthy();
  });

  test("Data has expected values", () => {
    expect(data.ok).toBe(true);
  });
});

describe("Terminate a Swiss tournament", () => {
  let data;

  beforeAll(async () => {
    data = await lichess.swiss.terminate(tournamentId);
  });

  test("Data is an object", () => {
    expect(isPlainObject(data)).toBeTruthy();
  });

  test("Data has expected keys", () => {
    let expectedKeys = ["ok"];
    expect(checkExpectedKeys(data, expectedKeys)).toBeTruthy();
  });

  test("Data has expected values", () => {
    expect(data.ok).toBe(true);
  });
});

describe("Export TRF of a Swiss tournament", () => {
  let data;

  beforeAll(async () => {
    data = await lichess.swiss.exportTRF("35Rw0INn");
  });

  test("Data is a string", () => {
    expect(typeof data).toBe("string");
  });

  test("Data has expected values", () => {
    expect(data).toMatchSnapshot();
  });
});

describe("Export games of a Swiss tournament (as PGN)", () => {
  let data;
  let options = {
    moves: true,
    pgnInJson: true,
    tags: true,
    clocks: true,
    evals: true,
    accuracy: true,
    opening: true,
  };

  beforeAll(async () => {
    data = await lichess.swiss.exportGamesPGN("35Rw0INn", options);
  });

  test("Data is a string", () => {
    expect(typeof data).toBe("string");
  });

  test("Data has expected values", () => {
    expect(data).toMatchSnapshot();
  });
});

describe("Export games of a Swiss tournament (as JSON)", () => {
  let data;
  let options = {
    moves: true,
    pgnInJson: true,
    tags: true,
    clocks: true,
    evals: true,
    accuracy: true,
    opening: true,
  };

  beforeAll(async () => {
    data = await lichess.swiss.exportGamesJSON("35Rw0INn", options);
  });

  test("Data is an array", () => {
    expect(Array.isArray(data)).toBeTruthy();
  });

  test("Data has expected values", () => {
    expect(data).toMatchSnapshot();
  });
});

describe("Get results of a swiss tournament", () => {
  let data;

  beforeAll(async () => {
    data = await lichess.swiss.results("35Rw0INn", 10);
  });

  test("Data is an array", () => {
    expect(Array.isArray(data)).toBeTruthy();
  });

  test("Data length is 10", () => {
    expect(data.length).toBe(10);
  });

  test("Data has expected values", () => {
    expect(data).toMatchSnapshot();
  });
});

describe("Get team swiss tournaments", () => {
  let data;

  beforeAll(async () => {
    data = await lichess.swiss.getAll("lichess-swiss", 10);
  });

  test("Data is an array", () => {
    expect(Array.isArray(data)).toBeTruthy();
  });

  test("Data length is 10", () => {
    expect(data.length).toBe(10);
  });

  test("Data has expected keys", () => {
    let expectedKeys = [
      "id",
      "createdBy",
      "startsAt",
      "name",
      "clock",
      "variant",
      "round",
      "nbRounds",
      "nbPlayers",
      "nbOngoing",
      "status",
      "stats",
      "rated",
    ];
    expect(checkExpectedKeys(data[0], expectedKeys)).toBeTruthy();
  });
});
