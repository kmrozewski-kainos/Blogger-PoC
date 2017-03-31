# Initial DB data

## Prerequisities
* nodejs (>=6.9.5)
* npm (>=3.10.10)
* prerequisities for <strong>local development environment</strong> (see [README](../../ops-local/README.md) from `ops-local`)
* database structure - run liquibase migrations from `ops-local/start-local-db.sh` or `ops-local/start-local-environment.sh`

## Getting started
* run `npm install` to install dependencies
* edit `config.yml` to populate table with proper data
* run `node index.js` to populate database with values from `config.yml`
