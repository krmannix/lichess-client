'use strict';

const NdjsonParser = require('./ndjson-parser')

class Bot {
  constructor(client) {
    this._client = client
  }

  stream(callback, options = {})
  {
    const path = 'api/stream/event'

    this._client.stream(path, {}, options, callback)
  }

  makeMove(gameId, move, options = {})
  {
    const path = `api/bot/game/${gameId}/move/${move}`

    this._client.post(path, {}, null, options)
  }

  streamGame(gameId, callback, options = {})
  {
    const path = `api/bot/game/stream/${gameId}`

    this._client.stream(path, {}, options, callback)
  }

  resignGame(gameId, options = {})
  {
    const path = `api/bot/game/${gameId}/resign`

    this._client.post(path, {}, null, options)
  }

  chat(gameId, message, room = 'player', options = {})
  {
    const path = `api/bot/game/${gameId}/chat`

    const body = {
        room: room,
        text: message
    }

    const headers = {
        'Content-type': 'application/json',
      }

    this._client.post(path, headers, JSON.stringify(body), options)
  }
}

module.exports = Bot
