'use strict';

class Games {
  constructor(client) {
    this._client = client
  }

  current(options) {
    const path = 'api/account/playing'

    return this._client.get(path, {}, options)
  }

  currentTv() {
    const path = 'tv/channels'

    return this._client.get(path)
  }

  get(gameId, options = {}) {
    const path = `game/export/${gameId}`

    const headers = {
      'Accept': 'application/json',
    }

    return this._client.get(path, headers, options)
  }

  listByIds(ids, options = {}) {
    const idString = ids.join(',')
    const path = 'games/export/_ids'

    const headers = {
      'Accept': 'application/x-ndjson',
    }

    return this._client.post(path, headers, idString, options)
  }

  listByUser(username, options = {}) {
    const path = `api/games/user/${username}`

    const headers = {
      'Accept': 'application/x-ndjson',
    }

    return this._client.get(path, headers, options)
  }
}

module.exports = Games
