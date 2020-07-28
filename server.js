const http = require("http");
const router = require("./router");

const server = http.createServer(router);
// process.end.PORT give us the port that heroku specifies
// The Dyno Manager sets up a number of default environment variables that you can access in your application.
// If the dyno is a web dyno, the $PORT variable will be set. The dyno must bind to this port number to receive incoming requests.

//So process.env.PORT || 3000 means: whatever is in the environment variable PORT, or 3000 if there's nothing there.
server.listen(process.env.PORT || 5000, () =>
   console.log(`Listening at http://localhost:5000`)
);
