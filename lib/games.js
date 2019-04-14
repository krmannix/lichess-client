'use strict';

class Games {
  constructor(client) {
    this._client = client
  }

  current(options) {
    const path = 'api/account/playing'

    return this._client.get(path, options)
  }

  currentTv() {
    const path = 'tv/channels'

    return this._client.get(path)
  }

  get(gameId, options = {}) {
    const path = `game/export/${gameId}`

    return this._client.get(path, options)
  }

  listByIds(ids, options = {}) {
    const idString = ids.join(',')
    const path = 'games/export/_ids'

    return this._client.post(path, idString, options)
  }

  listByUser(username, options = {}) {
    const path = `api/games/user/${username}`

    return this._client.get(path, options)
  }
}

module.exports = Games
