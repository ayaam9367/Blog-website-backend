const http = require("http");
const fs = require("fs");
const _ = require('lodash')

//server stores the server instance
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  //lodash
  const num = _.random(0, 100);
  console.log(num);

  //set header content type
  res.setHeader("Content-Type", "text/html");

  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;

    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;

    case "/about-me":
      res.setHeader('Location', '/about');
      res.statusCode = 301;
      res.end();
      break;

    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  //send an html file to the browser
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      //res.write(data);
      res.end(data); //can be passed directly
    }
  });
});

server.listen(3003, "localhost", () => {
  console.log("listening for requests on port 3003");
});
