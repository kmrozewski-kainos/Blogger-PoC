#!/usr/bin/env bash
set -e

docker-compose down
docker rmi -f $(docker images -a | grep '<none>' | awk '{print $3}')