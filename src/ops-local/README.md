## Prerequisities
* Docker (>=1.12.1)
* Docker compose (>=1.8.0)

## Getting started
* type `./start-local-environment.sh` to run all dockers from `docker-compose.yml`
* type `./start-db.sh` to start database with liquibase migrations
* type `./restart-backend.sh` to restart `wfeservices` docker only
* type `./restart-backend-persistence.sh` to restart `wfeservices` docker and add changes from `persistence` project
* type `./cleanup-dockers.sh` to stop, remove all containers and delete all `<none>` docker images

#### Useful and `docker-compose` commands
* `docker-compose down` stops and <strong>removes</strong> containers from `docker-compose.yml`
* `docker-compose stop` only stops containers form `docker-compose.yml`
* `docker-compose logs -f -t` shows and follows logs for containers from `docker-compose.yml` with timestamps
