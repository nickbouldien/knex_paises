const Hapi = require('hapi');

const get_countries = require('./api/countries/routes/get_countries');
const get_country = require('./api/countries/routes/get_country');
const post_country = require('./api/countries/routes/post_country');
const get_people = require('./api/people/routes/get_people');
const get_person = require('./api/people/routes/get_person');
const post_person = require('./api/people/routes/post_person');

const isDev = process.env.NODE_ENV !== "production";

const PORT = process.env.PORT || 8080;
const HOST = isDev ? "localhost" : "/";

const server = Hapi.server({
  port: PORT,
  host: HOST,
  routes: {
    validate: {
      failAction: async (request, h, err) => {
        if ( !isDev ) {
          console.error('ValidationError:', err.message);
          throw Boom.badRequest(`Invalid request payload input`);
        } else {
          console.error(err);
          throw err;
        }
      }
    }
  }
});

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, h) {
    return 'hello world!';
  }
});

/* test route */
server.route({
  method: ['GET', 'POST'],
  path: '/api/test',
  handler: function (request, h) {
    // TODO - reply with request method
    const successObj = { 'success!': true };
    return JSON.stringify(successObj);
  }
});

/* country routes */
server.route(get_country);
server.route(get_countries);
server.route(post_country);

/* person routes */
server.route(get_person);
server.route(get_people);
server.route(post_person);

const start = async () => {
  await server.start();
  console.log(`server running at: ${server.info.uri}. Dev mode === ${isDev}`);
};

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

start();
