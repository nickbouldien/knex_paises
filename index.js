const Blipp = require('blipp');
const Hapi = require('hapi');
const HapiSwagger = require('hapi-swagger');
const Inert = require('inert');
const Vision = require('vision');

const { get_countries, get_country, post_country} = require('./api/countries');
const { get_people, get_person, post_person} = require('./api/people');

const isDev = process.env.NODE_ENV !== "production";

const port = process.env.PORT || 8080;
const host = isDev ? "localhost" : "/";

let swaggerOptions = {
  // basePath: '/v1',
  debug: isDev,
  tags: [
    {
      name: 'country',
      description: 'country routes',
    },
  ],
  jsonEditor: true,
};

const server = Hapi.server({
  port,
  host,
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
  await server.register([
    Inert,
    Vision,
    Blipp,
    {
      plugin: HapiSwagger,
      options: swaggerOptions
    }
  ]);

  await server.start();
  console.log(`server running at: ${server.info.uri}. Dev mode === ${isDev}`);
};

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

start();
