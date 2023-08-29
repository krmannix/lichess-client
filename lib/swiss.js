"use strict";

const NdjsonParser = require("./ndjson-parser");

class Swiss {
  constructor(client) {
    this._client = client;
  }

  create(teamId, options) {
    const path = `api/swiss/new/${teamId}`;
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const body = JSON.stringify(options);

    return this._client.post(path, headers, body).then(JSON.parse);
  }

  get(tournamentId) {
    const path = `api/swiss/${tournamentId}`;
    const headers = {
      Accept: "application/json",
    };

    return this._client.get(path, headers).then(JSON.parse);
  }

  update(tournamentId, options) {
    const path = `api/swiss/${tournamentId}/edit`;
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const body = JSON.stringify(options);

    return this._client.post(path, headers, body).then(JSON.parse);
  }

  manualSchedule(tournamentId, timestamp) {
    const path = `api/swiss/${tournamentId}/schedule-next-round`;
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    const body = JSON.stringify({ date: timestamp });

    return this._client.post(path, headers, body);
  }

  join(tournamentId, password) {
    const path = `api/swiss/${tournamentId}/join`;
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    let body = password ? JSON.stringify({ password: password }) : "";

    return this._client.post(path, headers, body).then(JSON.parse);
  }

  pause(tournamentId) {
    const path = `api/swiss/${tournamentId}/withdraw`;
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    return this._client.post(path, headers).then(JSON.parse);
  }

  terminate(tournamentId) {
    const path = `api/swiss/${tournamentId}/terminate`;
    const headers = {
      Accept: "application/json",
    };

    return this._client.post(path, headers).then(JSON.parse);
  }

  exportTRF(tournamentId) {
    const path = `swiss/${tournamentId}.trf`;

    return this._client.get(path);
  }

  _exportGames(tournamentId, headers, options) {
    const path = `api/swiss/${tournamentId}/games`;

    return this._client.get(path, headers, options);
  }

  exportGamesPGN(tournamentId, options) {
    return this._exportGames(
      tournamentId,
      { Accept: "application/x-chess-pgn" },
      options
    );
  }
  exportGamesJSON(tournamentId, options) {
    return this._exportGames(
      tournamentId,
      { Accept: "application/x-ndjson" },
      options
    ).then(NdjsonParser.parse);
  }

  results(tournamentId, nb) {
    const path = `api/swiss/${tournamentId}/results`;
    const headers = {
      Accept: "application/x-ndjson",
    };

    const qs = {
      nb: nb,
    };

    return this._client.get(path, headers, qs).then(NdjsonParser.parse);
  }

  getAll(teamId, max) {
    const path = `api/team/${teamId}/swiss`;
    const headers = {
      Accept: "application/x-ndjson",
    };

    const qs = {
      max: max,
    };

    return this._client.get(path, headers, qs).then(NdjsonParser.parse);
  }
}

module.exports = Swiss;
