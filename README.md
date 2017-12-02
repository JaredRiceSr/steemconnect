# Utopian Connect

[Utopian.io](https://utopian.io)'s premier account connection and identity layer service.

Based on a fork of [SteemConnect](https://github.com/steemit/steemconnect), adapted for Utopian.

## Install

0. Clone this repository locally and `cd` into it.
1. Download and install Node.js >= 7.7.1 then run
``` 
npm install
```

2.  Set these Environment variables like so: (you must use the `export` command)
```js
export BROADCASTER_USERNAME=utopian-io;
export BROADCASTER_POSTING_WIF='[POSTING WIF HERE]';
export JWT_SECRET=[RANDOM STRING HERE];
export DATABASE_URL=localhost:5432;
export STEEMJS_URL='https://api.steemit.com';
export DEBUG='sc2:*';
export PORT=3500;
```

## Make Database
1. Install postgreSQL: 
```sh
brew install postgresql # install postgreSQL with Homebrew
pg_ctl -D /usr/local/var/postgres start && brew services start postgresql # start postgreSQL
postgres -V # confirm that postgreSQL is running
```

2. Now, run `psql postgres` on the command line to enter postgres's command prompter (you may or may not need `sudo`.)
3. You are now in the PSQL command line. Try `postgres=# \du` to see the list of installed users.
4. Set up Utopian Connect in the PSQL line:
```js
CREATE ROLE utopian WITH LOGIN PASSWORD 'utopian';
```
- This creates the main `utopian` POSTGRES account.
```js
\du
```
- Check to make sure the account was created. The attribute list should be empty. If the account was not created, try `CREATE ROLE` again.
```js
ALTER ROLE utopian SUPERUSER;
```
- Give the account permission to access databases freely.
```js
CREATE DATABASE sc2;
```
- Create a database with name `sc2`.
```js
GRANT ALL PRIVILEGES ON DATABASE sc2 TO utopian;
```
- Make sure the utopian account has permissions to the database.
- Lastly, I recommend installing this free software called `postico` to manage the database. The GUI for Mac is very easy to use.
```js
\q
```
- Quit the PostGres command prompter.

## Setup Database
```js
npm install -g sequelize-cli
```
- Install Sequelize CLI
```js
sequelize db:migrate;
sequelize db:seed:all;
```
- Initialize DB with necessary data

## Run Utopian Connect
```
npm start
```

## Api

### Routes

*/api/me* - Get user profile (require user or app token)

*/api/broadcast* - Broadcast posting operation for user (require app token)

## OAuth2
*/api/oauth2/authorize* - Issue new app token (require user token)

## Tokens
Tokens are created with JWT, the payload is public. Here is how it look:

### Token for user
```
{
  role: 'user',
  user: 'guest'
}
```
The token hash is saved on user localStorage once he login.

### Token for application
```
{
  role: 'app',
  proxy: 'example',
  user: 'guest',
  scope: ['vote', 'comment']
}
```

The token hash is sent to the application once user authorize the application.
