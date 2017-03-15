#!/bin/bash
FLUSHDB=false

while [[ $# -gt 0 ]]; do
  key="$1"
  case $key in
      -f|--flushdb)
      FLUSHDB=true
      ;;
      *)
      echo "unknown flag"
      ;;
  esac
  shift
done

set -e

if [ "${FLUSHDB}" = true ] ; then
  docker-compose stop db || true
  docker-compose rm -f db || true
  docker rmi -f opslocal_db || true
fi


# db-migrations
docker-compose up -d --build db
docker-compose up --build dockerize-wait-for-db

mvn clean install -f ../db-migrations/pom.xml -D liquibase.properties=${PWD}/db/liquibase.properties

# wfeservices
mvn clean install -f ../persistence/pom.xml
mvn clean package -DskipTests -f ../pom.xml
cp ../wfeservices/target/wfeservices-*.jar ./wfeservices/wfeservices.jar

docker-compose up --build