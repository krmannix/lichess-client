'use strict';

const Account = require('./lib/account')
const Client = require('./lib/client')
const Games = require('./lib/games')
const Relations = require('./lib/relations')
const Users = require('./lib/users')

class Lichess {
  constructor(token = null) {
    const client = new Client(token)
    this._account = new Account(client)
    this._games = new Games(client)
    this._relations = new Relations(client)
    this._users = new Users(client)
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

  get users() {
    return this._users
  }
}

module.exports = Lichess
