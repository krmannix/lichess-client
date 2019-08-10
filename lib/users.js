'use strict';

const NdjsonParser = require('./ndjson-parser')

class Users {
  constructor(client) {
    this._client = client
  }

  activityByUsername(username) {
    const path = `/api/user/${username}/activity`
    const headers = {
      'Accept': 'application/json',
    }

    return this._client.get(path, headers)
      .then(JSON.parse)
  }

  get(username) {
    const path = `/api/user/${username}`
    const headers = {
      'Accept': 'application/json',
    }

    return this._client.get(path, headers)
      .then(JSON.parse)
  }

  listByTitle(titles, options = {}) {
    const path = `api/users/titled`
    const headers = {
      'Accept': 'application/x-ndjson',
    }

    titles = Array.isArray(titles) ? titles : [titles]
    options['titles'] = titles.join(',')

    return this._client.get(path, {}, options)
      .then(users => users === "" ? [] : NdjsonParser.parse(users))
  }

  listByTeamId(teamId) {
    const path = `team/${teamId}/users`
    const headers = {
      'Accept': 'application/x-ndjson',
    }

    return this._client.get(path, headers)
      .then(users => users === "" ? [] : NdjsonParser.parse(users))
  }

  listByUsernames(usernames) {
    const path = 'api/users'
    const headers = {
      'Accept': 'application/json',
    }
    const usernameString = usernames.join(',')

    return this._client.post(path, headers, usernameString)
      .then(JSON.parse)
  }

  liveStreams() {
    const path = 'streamer/live'
    const headers = {
      'Accept': 'application/json',
    }

    return this._client.get(path, headers)
      .then(JSON.parse)
  }

  statusesByUsernames(usernames) {
    const path = `api/users/status`
    const usernameString = usernames.join(',')
    const headers = {
      'Accept': 'application/json',
    }

    return this._client.get(path, headers, { ids: usernameString })
      .then(JSON.parse)
  }
}

module.exports = Users
