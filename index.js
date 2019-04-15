'use strict';

const Account = require('./lib/account')
const Client = require('./lib/client')
const Games = require('./lib/games')
const Relations = require('./lib/relations')

class Lichess {
  constructor(token = null) {
    const client = new Client(token)
    this._account = new Account(client)
    this._games = new Games(client)
    this._relations = new Relations(client)
  }

  get account() {
    return this._account
  }

  get games() {
    return this._games
  }

  get relations() {
    return this._relations
  }
}

module.exports = Lichess
