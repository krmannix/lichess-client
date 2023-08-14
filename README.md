# lichess-client
♟️ node.js lichess API wrapper ♙

### Getting Started

* [Create a Lichess account](https://lichess.org/signup)
* [Generate a Lichess API token](https://lichess.org/account/oauth/token)

To use, install via npm, include `lichess-client` in your project, and initialize with your API token:
```bash
npm install lichess-client
```
```js
const Lichess = require('lichess-client')
const lichess = new Lichess('apitoken')
```

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

#### Users

###### [Get real-time users status](https://lichess.org/api#operation/accountMe)
```js
let usernames = ['bestplayerever', 'runnerup']
lichess.users.statusesByUsernames(usernames)
```

###### [Get user public data](https://lichess.org/api#operation/apiUser)
```js
let username = 'bestplayerever'
lichess.users.get(username)
```

###### [Get user activity](https://lichess.org/api#operation/apiUserActivity)
```js
let username = 'bestplayerever'
lichess.users.activityByUsername(username)
```

###### [Get users by ID](https://lichess.org/api#operation/apiUsers)
```js
let usernames = ['bestplayerever', 'runnerup']
lichess.users.listByUsernames(usernames)
```

###### [Get members of a team](https://lichess.org/api#operation/teamIdUsers)
```js
let team = 'ateam'
lichess.users.listByTeamId(team)
```

###### [Get live streamers](https://lichess.org/api#operation/streamerLive)
```js
lichess.users.listStreams()
```

###### [Get titled users](https://lichess.org/api#operation/usersTitled)
```js
let titles = ['GM', 'WCM']
let options = { online: false }
lichess.users.listByTitle(titles, options)
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

#### Relations

###### [Get users followed by a user](https://lichess.org/api#operation/apiUserFollowing)
```js
let username = 'bestplayerever'
lichess.relations.following(username)
```

###### [Get users who follow a user](https://lichess.org/api#operation/apiUserFollowers)
```js
let username = 'bestplayerever'
lichess.relations.followers(username)
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
* ~~Get real-time users status~~ (0.0.6)
* Get all top 10
* Get one leaderboard
* ~~Get user public data~~ (0.0.6)
* Get rating history of a user
* Get performance statistics of a user
* ~~Get user activity~~ (0.0.6)
* ~~Get users by ID~~ (0.0.6)
* ~~Get members of a team~~ (0.0.6)
* ~~Get live streamers~~ (0.0.6)
* Get crosstable
* Autocomplete usernames
* Add a note for a user
* Get notes for a user

#### Relations
* ~~Get users followed by the logged in user~~ (0.0.5)
* Follow a player
* Unfollow a player

#### Games
* ~~Export one game~~ (0.0.2)
* Export ongoing game of a user
* ~~Export games of a user~~ (0.0.2)
* ~~Export games by IDs~~ (0.0.3)
* Stream games of users
* Stream games by IDs
* Add game IDs to stream
* ~~Get ongoing games~~ (0.0.3)
* Stream moves of a game
* Import one game

#### TV
* Get current TV games
* Stream current TV game
* Get best ongoing games of a TV channel

#### Puzzles
* Get the daily puzzle
* Get a puzzle by its ID
* Get your puzzle activity
* Get your puzzle dashboard
* Get the storm dashboard of a player
* Create and join a puzzle race

#### Teams
* Get team swiss tournaments
* Get a single team
* Get popular teams
* Teams of a player
* Search teams
* Get members of a team
* Get team Arena tournaments
* Join a team
* Leave a team
* Get join requests
* Accept join request
* Decline join request
* Kick a user from your team
* Message all members

#### Board
* Stream incoming events
* Create a seek
* Stream Board game state
* Make a Board move
* Write in the chat
* Fetch the game chat
* Abort a game
* Resign a game
* Handle draw offers
* Handle takeback offers
* Claim victory of a game
* Berserk a tournament game

#### Bot
* Stream incoming events
* Get online bots
* Upgrade to Bot account
* Stream Bot game state
* Make a Bot move
* Write in the chat
* Fetch the game chat
* Abort a game
* Resign a game

#### Challenges
* List your challenges
* Create a challenge
* Accept a challenge
* Decline a challenge
* Cancel a challenge
* Challenge the AI
* Open-ended challenge
* Start clocks of a game
* Add time to the opponent clock
* Admin challenge tokens

#### Bulk pairings
* View upcoming bulk pairings
* Create a bulk pairing
* Manually start clocks
* Cancel a bulk pairing

#### Arena tournaments
* Get current tournaments
* Create a new Arena tournament
* Get info about an Arena tournament
* Update an Arena tournament
* Join an Arena tournament
* Pause or leave an Arena tournament
* Terminate an Arena tournament
* Update a team battle
* Export games of an Arena tournament
* Get results of an Arena tournament
* Get team standing of a team battle
* Get tournaments created by a user
* Get team Arena tournaments

#### Swiss tournaments
* Create a new Swiss tournament
* Get info about a Swiss tournament
* Update a Swiss tournament
* Manually schedule the next round
* Join a Swiss tournament
* Pause or leave a swiss tournament
* Terminate a Swiss tournament
* Export TRF of a Swiss tournament
* Export games of a Swiss tournament
* Get results of a swiss tournament
* Get team swiss tournaments

#### Simuls
* Get current simuls

#### Studies
* Export one study chapter
* Export all chapters
* Study metadata
* Export all studies of a user
* List studies of a user

#### Messaging
* Send a private message

#### Broadcasts
* Get official broadcasts
* Create a broadcast tournament
* Get your broadcast tournament
* Update your broadcast tournament
* Create a broadcast round
* Get your broadcast round
* Update your broadcast round
* Push PGN to your broadcast round
* Stream an ongoing broadcast tournament as PGN
* Export one round as PGN
* Export all rounds as PGN

#### Analysis
* Get cloud evaluation of a position

#### External engine
* List external engines
* Create external engine
* Get external engine
* Update external engine
* Delete external engine
* Analyse with external engine
* Acquire analysis request
* Answer analysis request

#### Opening Explorer
* Masters database
* Lichess games
* Player games
* OTB master game

#### Tablebase
* Tablebase lookup
* Tablebase lookup for Atomic chess
* Tablebase lookup for Antichess

#### OAuth
* Request authorization code
* Obtain access token
* Revoke access token
* Test multiple OAuth tokens
