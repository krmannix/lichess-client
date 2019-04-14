'use strict';

const request = require('request-promise')

class Base {
  static makeRequest(url, options = {}) {
    const requestOptions = {
      uri: url,
      headers: {
        'Authorization': `Bearer ${options['token']}`
      },
      qs: options,
    }

    return request(requestOptions)
  }
}

module.exports = Base
