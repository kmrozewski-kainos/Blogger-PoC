## Prerequisities
* nodejs (>=6.9.5)
* npm (>=3.10.10)
* prerequisities from <strong>local development environment</strong> (see README from `ops-local`)
* database structure - run liquibase migrations from `ops-local/start-local-db.sh`

## Getting started
* run `npm install` to install dependencies
* edit `config.yml` to populate table with proper data
* run `node index.js` to populate database with values from `config.yml`
