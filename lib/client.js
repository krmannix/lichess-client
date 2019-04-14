'use strict';

const rp = require('request-promise')

class Client {
  constructor(token = null) {
    this.token = token
    this.headers = token ? { 'Authorization': `Bearer ${token}` } : {}
  }

  request(url, options = {}) {
    const requestOptions = {
      uri: url,
      qs: options,
      headers: this.headers,
    }

    return rp(requestOptions)
  }
}

module.exports = Client
