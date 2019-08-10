'use strict';

class Account {
  constructor(client) {
    this._client = client
  }

  account() {
    const path = 'api/account'

    return this._client.get(path)
  }

  email() {
    const path = 'api/account/email'

    return this._client.get(path)
  }

  preferences() {
    const path = 'api/account/preferences'

    return this._client.get(path)
  }

  kid() {
    const path = 'api/account/kid'

    return this._client.get(path)
  }

  kidOn() {
    const path = 'api/account/kid'
    const options = { v: true }

    return this._client.post(path, {}, null, options)
  }

  kidOff() {
    const path = 'api/account/kid'
    const options = { v: false }

    return this._client.post(path, {}, null, options)
  }
}

module.exports = Account
