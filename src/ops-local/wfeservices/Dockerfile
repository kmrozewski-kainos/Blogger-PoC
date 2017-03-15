FROM java:8-jre-alpine

ADD wfeservices.jar wfeservices.jar
ADD config.yml config.yml

CMD java -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5080 -jar wfeservices.jar server config.yml

EXPOSE 8080
EXPOSE 5080