#!/usr/bin/env bash
set -e
mvn clean package -DkipTests -f ../wfeservices/pom.xml
cp ../wfeservices/target/wfeservices-*.jar ./wfeservices//wfeservices.jar

docker-compose up -d --no-deps --build wfeservices