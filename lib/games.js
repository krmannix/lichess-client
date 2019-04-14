'use strict';

const Base = require('./base.js')

class Games {
  static list(username, options = {}) {
    const url = `https://lichess.org/api/games/user/${username}`

    return Base.makeRequest(url, options)
  }

  static get(gameId, options = {}) {
    const url = `https://lichess.org/game/export/${gameId}`

    return Base.makeRequest(url, options)
  }
}

module.exports = Games
