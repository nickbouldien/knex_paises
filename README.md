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
        
#### TODOs:
- use knex / objection.js
- add logging
- add swagger docs
- add tests

#### Resources:
- [hapi docs](https://hapijs.com/)
