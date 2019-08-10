'use strict';

const NdjsonParser = require('./ndjson-parser')

class Relations {
  constructor(client) {
    this._client = client
  }

  followers(username) {
    const path = `api/user/${username}/followers`
    const headers = {
      'Accept': 'application/x-ndjson',
    }

    return this._client.get(path, headers)
      .then(relations => relations === "" ? [] : NdjsonParser.parse(relations))
  }

  following(username) {
    const path = `api/user/${username}/following`
    const headers = {
      'Accept': 'application/x-ndjson',
    }

    return this._client.get(path, headers)
      .then(relations => relations === "" ? [] : NdjsonParser.parse(relations))
  }
}

module.exports = Relations
