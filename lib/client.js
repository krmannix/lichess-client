'use strict';

const rp = require('request-promise')

class Client {
  constructor(token = null) {
    this.token = token
    this.headers = token ? { 'Authorization': `Bearer ${token}` } : {}
    this.baseUrl = 'https://lichess.org'
  }

  get(path, options) {
    return this.request('GET', path, {}, options)
  }

  post(path, body, options) {
    return this.request('POST', path, body, options)
  }

  request(method, path, body = null, options = {}) {
    const uri = this.baseUrl + '/' + path
    const requestOptions = {
      method: method,
      uri: uri,
      qs: options,
      headers: this.headers,
    }
    if (method == 'POST' && body) requestOptions.body = body

    return rp(requestOptions)
  }
}

module.exports = Client
