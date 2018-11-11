# Knex Países


#### Start Dev:
- clone/fork
- npm install
- npm run dev


#### Sample Queries (using localhost):
- GET - country:
    - curl --request GET --url http://localhost:8080/countries/{country_id}
- GET - countries:
    - curl --request GET --url http://localhost:8080/countries
- POST - countries:
    - curl --request POST \
        --url http://localhost:8080/countries \
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
    - curl --request GET --url http://localhost:8080/people/{person_id}
- GET - people:
    - curl --request GET --url http://localhost:8080/people
- POST - people:
    - curl --request POST \
        --url http://localhost:8080/person \
        --header 'content-type: application/json' \
        --data '{
      	"name": "Elvis",
      	"profession": "singer",
      	"country": "United States of America"
      }'

        
#### Knex setup:
- knex init
- configure knexfile.js
- cd to knex/migrations/ and run `knex migrate:make new_migration`
- edit migration file and run `knex migrate:latest`
- seed: cd to knex/seeds and run `knex seed:make new_seed`
- edit seed file and run `knex see:run`


#### TODOs:
- use knex / objection.js
- add logging
- add swagger docs
- add tests


#### Resources:
- [hapi docs](https://hapijs.com/)
- [knex docs](https://knexjs.org)
- [knex setup gist by Nigel Earle](https://gist.github.com/NigelEarle/80150ff1c50031e59b872baf0e474977)
- [scotch.io tutorial hapi/knex](https://scotch.io/tutorials/making-a-restful-api-with-hapi-js)
- [mls tutorial on hapi](https://labs.mlssoccer.com/how-to-be-a-hapi-developer-8bb844b3d6a)
