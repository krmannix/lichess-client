'use strict';

const request = require('request-promise')

class Games {
  static list(username, options = {}) {
    const url = `https://lichess.org/api/games/user/${username}`

    return this.makeRequest(url, options)
  }

  static get(gameId, options = {}) {
    const url = `https://lichess.org/game/export/${gameId}`

    return this.makeRequest(url, options)
  }

  static makeRequest(url, options) {
    const requestOptions = {
      uri: url,
      headers: {
        'Authorization': `Bearer ${options['token']}`
      },
      qs: options,
    }

    return request(requestOptions)
  }
}

module.exports = Games
