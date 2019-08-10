'use strict';

const rp = require('request-promise')

class Client {
  constructor(token = null) {
    this.token = token
    this.headers = token ? { 'Authorization': `Bearer ${token}` } : {}
    this.baseUrl = 'https://lichess.org'
  }

  get(path, headers, options) {
    return this.request('GET', path, headers, {}, options)
  }

  post(path, headers, body, options) {
    return this.request('POST', path, headers, body, options)
  }

  request(method, path, headers = {}, body = null, options = {}) {
    const uri = this.baseUrl + '/' + path
    const requestHeaders = Object.assign({}, this.headers, headers)

    const requestOptions = {
      method: method,
      uri: uri,
      qs: options,
      headers: requestHeaders,
    }
    if (method == 'POST' && body) requestOptions.body = body

    return rp(requestOptions)
  }
}

module.exports = Client
