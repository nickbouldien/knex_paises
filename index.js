const Hapi = require('hapi');
const Boom = require('boom');
const sampleData = require('./sampleData');

const isDev = process.env.NODE_ENV !== "production";

const PORT = process.env.PORT || 8080;
const HOST = isDev ? "localhost" : "/";

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

server.route({
  method: ['GET', 'POST'],
  path: '/api/test',
  handler: function (request, h) {
    const successObj = { 'success!': true };
    return JSON.stringify(successObj);
  }
});

server.route({
  method: 'GET',
  path: '/countries/{id}',
  handler: function (request, h) {
    const country = sampleData.find(country => country.id === Number(request.params.id) );
    // const sortKey = request.query.sortKey;
    if (!country) {
      return Boom.notFound(`Country with id ${request.params.id} not found!`);
    }
    return country;
  }
});

server.route({
  method: 'GET',
  path: '/countries',
  handler: function (request, h) {
    return sampleData;
  }
});

const start = async () => {
  await server.start();
  console.log(`server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

start();
