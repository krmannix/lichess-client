'use strict';

class Games {
  constructor(client) {
    this.client = client
  }

  current(options) {
    const url = 'https://lichess.org/api/account/playing'

    return this.client.get(url, options)
  }

  currentTv() {
    const url = 'https://lichess.org/tv/channels'

    return this.client.get(url)
  }

  get(gameId, options = {}) {
    const url = `https://lichess.org/game/export/${gameId}`

    return this.client.get(url, options)
  }

  listByIds(ids, options = {}) {
    const idString = ids.join(',')
    const url = 'https://lichess.org/games/export/_ids'

    return this.client.post(url, idString, options)
  }

  listByUser(username, options = {}) {
    const url = `https://lichess.org/api/games/user/${username}`

    return this.client.get(url, options)
  }
}

module.exports = Games
