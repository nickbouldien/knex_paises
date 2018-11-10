const Hapi = require('hapi');

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
    return 'welcome';
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
