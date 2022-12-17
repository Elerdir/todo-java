How to create db in docker

Install docker:
download from their web :-)

In terminal:
docker network create todo-java-db

create a folder to mount /var/lib/postgresql/data

cd into that folder

MAC LINUX Users
docker run --name todo-java-db -p 5433:5432 --network=todo-java-db -v "$PWD:/var/lib/postgresql/data" -e POSTGRES_PASSWORD=password -d postgres:alpine

check that container is running
docker ps

docker run -it --rm --network=todo-java-db postgres:alpine psql -h todo-java-db -U postgres

type in password

list of databases:
\l

create database todo_java_db;

\q
