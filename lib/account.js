'use strict';

class Account {
  constructor(client) {
    this._client = client
  }

  account() {
    const path = 'api/account'
    const headers = {
      'Accept': 'application/json',
    }

    return this._client.get(path, headers)
      .then(JSON.parse)
  }

  email() {
    const path = 'api/account/email'
    const headers = {
      'Accept': 'application/json',
    }

    return this._client.get(path, headers)
      .then(JSON.parse)
  }

  preferences() {
    const path = 'api/account/preferences'
    const headers = {
      'Accept': 'application/json',
    }

    return this._client.get(path, headers)
      .then(JSON.parse)
  }

  kid() {
    const path = 'api/account/kid'
    const headers = {
      'Accept': 'application/json',
    }

    return this._client.get(path, headers)
      .then(JSON.parse)
  }

  kidOn() {
    const path = 'api/account/kid'
    const headers = {
      'Accept': 'application/json',
    }
    const options = { v: true }

    return this._client.post(path, headers, null, options)
      .then(JSON.parse)
  }

  kidOff() {
    const path = 'api/account/kid'
    const headers = {
      'Accept': 'application/json',
    }
    const options = { v: false }

    return this._client.post(path, headers, null, options)
      .then(JSON.parse)
  }
}

module.exports = Account
