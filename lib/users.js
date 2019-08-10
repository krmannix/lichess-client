'use strict';

class Users {
  constructor(client) {
    this._client = client
  }

  activityByUsername(username) {
    const path = `/api/user/${username}/activity`

    return this._client.get(path)
  }

  get(username) {
    const path = `/api/user/${username}`

    return this._client.get(path)
  }

  listByTitle(titles, options = {}) {
    const path = `api/users/titled`

    titles = Array.isArray(titles) ? titles : [titles]
    options['titles'] = titles.join(',')

    return this._client.get(path, {}, options)
  }

  listByTeamId(teamId) {
    const path = `team/${teamId}/users`

    return this._client.get(path)
  }

  listByUsernames(usernames) {
    const path = 'api/users'
    const usernameString = usernames.join(',')

    return this._client.post(path, {}, usernameString)
  }

  liveStreams() {
    const path = 'streamer/live'

    return this._client.get(path)
  }

  statusesByUsernames(usernames) {
    const path = `api/users/status`
    const usernameString = usernames.join(',')

    return this._client.get(path, {}, { ids: usernameString })
  }
}

module.exports = Users
