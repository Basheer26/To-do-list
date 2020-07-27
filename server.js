const http = require("http");

const server = http.createServer((request, response) => {
   response.end("hello");
});
// process.end.PORT give us the port that heroku specifies
// The Dyno Manager sets up a number of default environment variables that you can access in your application.
// If the dyno is a web dyno, the $PORT variable will be set. The dyno must bind to this port number to receive incoming requests.
server.listen(process.env.PORT || 5000, () =>
   console.log(`Listening at http://localhost:5000`)
);
