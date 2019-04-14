'use strict';

class Games {
  constructor(base) {
    this.base = base
  }

  list(username, options = {}) {
    const url = `https://lichess.org/api/games/user/${username}`

    return this.base.request(url, options)
  }

  get(gameId, options = {}) {
    const url = `https://lichess.org/game/export/${gameId}`

    return this.base.request(url, options)
  }
}

module.exports = Games
