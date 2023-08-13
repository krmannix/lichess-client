'use strict';

const NdjsonParser = require('./ndjson-parser')

class Relations {
  constructor(client) {
    this._client = client
  }

  following(username) {
    const path = `api/rel/following`
    const headers = {
      'Accept': 'application/x-ndjson',
    }

    return this._client.get(path, headers)
      .then(relations => relations === "" ? [] : NdjsonParser.parse(relations))
  }
}

module.exports = Relations
