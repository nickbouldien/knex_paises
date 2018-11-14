# Knex Países - People
Just a simple api messing around with Hapi and its ecosystem. (I had always heard good things about Hapi, but never used it, so I made an excuse to mess around with it for a few days (with Knex - another library I had read good things about).  The "theme" deals with famous people from different countries (países)).

#### Start Dev:
- clone/fork
- npm install
- npm run migrate-latest
- npm run seed
- npm run dev
- can view [swagger docs](http://localhost:8080/documentation) to see available routes


#### Knex setup:
- knex init
- configure knexfile.js
- cd to knex/migrations/ and run `knex migrate:make new_migration`
- edit migration file and run `knex migrate:latest`
- seed: cd to knex/seeds and run `knex seed:make new_seed`
- edit seed file and run `knex seed:run`


#### Sample Queries (using localhost):
- GET - country:
    - curl --request GET --url http://localhost:8080/api/v1/countries/{country_id}
- GET - countries:
    - curl --request GET --url http://localhost:8080/api/v1/countries
- POST - countries:
    - curl --request POST \
        --url http://localhost:8080/api/v1/countries \
        --header 'content-type: application/json' \
        --data '{
      		"area": 12341234,
      		"currency": "dollar",
      		"GDP": 12341234,
      		"language": "chinese",
      		"name": "china",
      		"population": 654654654654
      	}
      '        
- GET - person:
    - curl --request GET --url http://localhost:8080/api/v1/people/{person_id}
- GET - people:
    - curl --request GET --url http://localhost:8080/api/v1/people
- POST - people:
    - curl --request POST \
        --url http://localhost:8080/api/v1/person \
        --header 'content-type: application/json' \
        --data '{
      	"name": "Elvis",
      	"profession": "singer",
      	"country": "United States of America"
      }'


#### TODOs:
- ~~use knex~~
- ~~add swagger docs~~
- ~~add prettier~~
- ~~add dotenv~~
- add tests
- add graphql???


#### Resources:
- [hapi docs](https://hapijs.com/)
- [knex docs](https://knexjs.org)
- [knex setup gist by Nigel Earle](https://gist.github.com/NigelEarle/80150ff1c50031e59b872baf0e474977)
- [scotch.io tutorial hapi/knex](https://scotch.io/tutorials/making-a-restful-api-with-hapi-js)
- [mls tutorial on hapi](https://labs.mlssoccer.com/how-to-be-a-hapi-developer-8bb844b3d6a)
