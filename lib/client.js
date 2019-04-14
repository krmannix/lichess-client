'use strict';

const Base = require('./base')
const Games = require('./games')

class Client {
  constructor(token = null) {
    const base = new Base(token)
    this._games = new Games(base)
  }

  get games() {
    return this._games
  }
}

module.exports = Client
