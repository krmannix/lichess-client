'use strict';

const Client = require('./lib/client')
const Games = require('./lib/games')

class Lichess {
  constructor(token = null) {
    const client = new Client(token)
    this._games = new Games(client)
  }

  get games() {
    return this._games
  }
}

module.exports = Lichess
