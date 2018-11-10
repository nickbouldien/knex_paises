const Hapi = require('hapi');
const Boom = require('boom');
const Joi = require('joi');

const get_countries = require('./api/countries/routes/get_countries');
const get_country = require('./api/countries/routes/get_country');

const isDev = process.env.NODE_ENV !== "production";

const PORT = process.env.PORT || 8080;
const HOST = isDev ? "localhost" : "/";

// const personValidator = Joi.object({
//   country: Joi.string().required(),
//   name: Joi.string().required(),
//   profession: Joi.string().required(),
// });

const server = Hapi.server({
  port: PORT,
  host: HOST,
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

const start = async () => {
  await server.start();
  console.log(`server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

start();
