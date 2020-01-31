# Hearthstone Deck Builder API

This is the Server / Express API part of the Hearthstone Deck Builder app.

# Setting Up and Seeding Local Dev

1. `brew update && brew install postgresql` - Install Postgres (assuming OSX)
1. Add the following to your `~/.bash_profile`: `export PGDATA=/usr/local/var/postgres`
1. `pg_ctl start` - Start Postgres
1. `createuser -Pw --interactive`
    - type `hearthstone` for the role
    - Just press (return) for no password
    - Select `y` when asked if superuser
1. `createdb hearthstone` - Create the local database
1. `yarn migrate` - Run local migrations
1. `yarn seed:cards` - Seed cards table

# Setting Up and Seeding Production

1. `heroku create` - Creates a new heroku app and adds it to your remotes.
1. `heroku addons:create heroku-postgresql:hobby-dev` - Provisions a PostgreSQL database for your app.
1. `yarn migrate:production` - Runs knex migrations on production (eg. to create tables, etc.)
1. `yarn seed:cards:production` - Runs card seed file on production database to fill cards table.

# Local Postgres Commands

Generally speaking on local dev postgres should be configured to run on startup, but in case it isn't you should ensure that postgres has been started before spinning up the express server.

Here are some commands to start/stop/restart and check the status of postgres.

`pg_ctl start`

`pg_ctl stop`

`pg_ctl restart`

`pg_ctl status`
