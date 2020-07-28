const fs = require("fs");
const path = require("path");

const types = {
   html: "text/html",
   css: "text/css",
   js: "application/javascript",
};

function publicHandler(request, response) {
   // replace this!
   const urlArray = request.url.split("."); // e.g. "/style.css" -> ["/style", "css"]
   const extension = urlArray[1]; // e.g. "css"
   const type = types[extension]; // e.g. "text/css"
   console.log(filePath);
   // __dirname starts from this point where the file is saved.  || __dirname with ..  directs to  "workshop" file
   const filePath = path.join(__dirname, "..", request.url); // e.g /puclic/style.css which means: we return back two steps to the "workshop" file which contains the  /puclic/style.css
   console.log(filePath);
   // fs helps explore file systems. it doesn't fetch this is why we need to handle errors right away.
   // fs.readFile reads a file
   // content-type helps let know the type of the file
   fs.readFile(filePath, (error, file) => {
      if (error) {
         console.log(error);
         // { "content-type": "text/html" } this is the header which explains the type of files we're getting.
         response.writeHead(404, { "content-type": "text/html" }); // we write text/html and not the "type" bacaue we are not returning a file.
         response.end("<h1>Not found</h1>");
      } else {
         response.writeHead(200, { "content-type": type });
         response.end(file);
      }
   });
   //  response.writeHead(404);
   //  response.end();
}

module.exports = publicHandler;
