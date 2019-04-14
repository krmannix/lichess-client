'use strict';

class Games {
  constructor(client) {
    this.client = client
  }

  list(username, options = {}) {
    const url = `https://lichess.org/api/games/user/${username}`

    return this.client.request(url, options)
  }

  get(gameId, options = {}) {
    const url = `https://lichess.org/game/export/${gameId}`

    return this.client.request(url, options)
  }
}

module.exports = Games
