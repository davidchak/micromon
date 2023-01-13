#!/bin/sh
# TODO: реализовать сборку проекта одним скриптом

docker compose -f docker-compose.yml --env-file ./env/.env.dev up --build 
