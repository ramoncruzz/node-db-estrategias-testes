docker run --name postgres -e POSTGRES_USER=ramoncruz -e POSTGRES_PASSWORD=ramoncruz -e POSTGRES_DB=heroes -p 5432:5432 -d postgres

    docker ps  ///para listar servicos ativos 
    docker exec -it postgres /bin/bash  //executa o terminal do postgres


 docker run --name adminer -p 8080:8080 --link postgres:postgres -d adminer

 ##------ MONGODB

docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=ramoncruz -e MONGO_INITDB_ROOT_PASSWORD=ramoncruz -d mongo:4

docker run --name mongoclient -p3000:3000 --link mongodb:mongodb -d mongoclient/mongoclient

docker exec -it mongodb \
     mongo --host localhost -u ramoncruz -p ramoncruz --authenticationDatabase admin \
    --eval "db.getSiblingDB('herois').createUser({user: 'ramon', pwd: 'ramon, roles: [{role:'readWrite', db: 'herois'}]})"

docker exec -it mongodb \
    mongo --host localhost -u ramoncruz -p ramoncruz --authenticationDatabase admin \
    --eval "db.getSiblingDB('herois').createUser({user: 'ramon', pwd: 'ramon', roles: [{role: 'readWrite', db: 'herois'}]})"