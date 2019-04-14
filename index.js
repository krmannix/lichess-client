'use strict';

const Account = require('./lib/account')
const Client = require('./lib/client')
const Games = require('./lib/games')

class Lichess {
  constructor(token = null) {
    const client = new Client(token)
    this._account = new Account(client)
    this._games = new Games(client)
  }

  get account() {
    return this._account
  }

  get games() {
    return this._games
  }
}

module.exports = Lichess
