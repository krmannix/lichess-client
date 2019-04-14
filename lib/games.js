'use strict';

class Games {
  constructor(client) {
    this.client = client
  }

  current(options) {
    const path = 'api/account/playing'

    return this.client.get(path, options)
  }

  currentTv() {
    const path = 'tv/channels'

    return this.client.get(path)
  }

  get(gameId, options = {}) {
    const path = `game/export/${gameId}`

    return this.client.get(path, options)
  }

  listByIds(ids, options = {}) {
    const idString = ids.join(',')
    const path = 'games/export/_ids'

    return this.client.post(path, idString, options)
  }

  listByUser(username, options = {}) {
    const path = `api/games/user/${username}`

    return this.client.get(path, options)
  }
}

module.exports = Games
