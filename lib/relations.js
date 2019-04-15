'use strict';

class Relations {
  constructor(client) {
    this._client = client
  }

  followers(username) {
    const path = `api/user/${username}/followers`

    return this._client.get(path)
  }

  following(username) {
    const path = `api/user/${username}/following`

    return this._client.get(path)
  }
}

module.exports = Relations
