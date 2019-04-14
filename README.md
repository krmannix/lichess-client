# lichess
♟️ node.js lichess API wrapper ♙

### Getting Started

* [Create a Lichess account](https://lichess.org/signup)
* [Generate a Lichess API token](https://lichess.org/account/oauth/token)

To use, include `lichess` in your project and initialize with your API token:
```js
const Lichess = require('./index')

const lichess = new Lichess('apitoken')
```
**_Note_: lichess is not yet published to npm**

### Usage

#### Account

###### [Get my profile](https://lichess.org/api#operation/accountMe)
```js
lichess.account.account()
```

###### [Get my email address](https://lichess.org/api#operation/accountEmail)
```js
lichess.account.email()
```

###### [Get my preferences](https://lichess.org/api#operation/account)
```js
lichess.account.preferences()
```

###### [Get my kid mode status](https://lichess.org/api#operation/accountKid)
```js
lichess.account.kid()
```

###### [Turn on kid mode](https://lichess.org/api#operation/accountKidPost)
**_Note_: You will need `preference:write` permissions for the associated API token**
```js
lichess.account.kidOn()
```

###### [Turn off kid mode](https://lichess.org/api#operation/accountKidPost)
**_Note_: You will need `preference:write` permissions for the associated API token**
```js
lichess.account.kidOff()
```

#### Games

###### [Export one game](https://lichess.org/api#operation/gamePgn)
```js
let gameId = '123'
let options = { moves: true } // all options specified in API docs
lichess.games.get(gameId, options)
```

###### [Export games of a user](https://lichess.org/api#operation/apiGamesUser)
```js
let username = 'bestplayerever'
let options = { max: 5 } // all options specified in API docs
lichess.games.listByUser(username, options)
```

###### [Export games by IDs](https://lichess.org/api#operation/gamesExportIds)
```js
let ids = ['123', '456']
let options = { moves: true } // all options specified in API docs
lichess.games.listByIds(ids, options)
```

###### [Get ongoing games](https://lichess.org/api#operation/apiAccountPlaying)
```js
let options = { nb: 15 } // all options specified in API docs
lichess.games.current(options)
```

###### [Get current TV games](https://lichess.org/api#operation/tvChannels)
```js
lichess.games.currentTv(options)
```

### API coverage
* [Lichess API reference](https://lichess.org/api)

#### Account
* ~~Get my profile~~ (0.0.4)
* ~~Get my email address~~ (0.0.4)
* ~~Get my preferences~~ (0.0.4)
* ~~Get my kid mode status~~ (0.0.4)
* ~~Set my kid mode status~~ (0.0.4)

#### Users
* Get real-time users status
* Get all top 10
* Get one leaderboard
* Get user public data
* Get rating history of a user
* Get user activity
* Get users by ID
* Get members of a team
* Get live streamers
* Get titled users

#### Relations
* Get users followed by a user
* Get users who follow a user

#### Games
* ~~Export one game~~ (0.0.2)
* ~~Export games of a user~~ (0.0.2)
* ~~Export games by IDs~~ (0.0.3)
* Stream current games
* ~~Get ongoing games~~ (0.0.3)
* ~~Get current TV games~~ (0.0.3)

#### Teams
* Get members of a team

#### Challenges
* Stream incoming events
* Create a challenge
* Accept a challenge
* Decline a challenge

#### Chess Bot
* Upgrade to bot account
* Stream incoming events
* Stream game state
* Make a move
* Write in the chat
* Abort a game
* Resign a game

#### Tournaments
* Get current tournaments
* Create a new tournament
* Export games of a tournament
* Get results of a tournament
