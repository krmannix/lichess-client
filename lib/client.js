'use strict';

const rp = require('request-promise')

class Client {
  constructor(token = null) {
    this.token = token
    this.headers = token ? { 'Authorization': `Bearer ${token}` } : {}
  }

  get(url, options) {
    return this.request('GET', url, {}, options)
  }

  post(url, body, options) {
    return this.request('POST', url, body, options)
  }

  request(method, url, body = {}, options = {}) {
    const requestOptions = {
      method: method,
      uri: url,
      qs: options,
      headers: this.headers,
    }
    if (method == 'POST') requestOptions.body = body

    return rp(requestOptions)
  }
}

module.exports = Client
