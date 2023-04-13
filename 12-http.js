const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
    return;
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
    return;
  }

  res.end(
    `
    <h1>Opps!</h1>
    <p>This page doesn't exist.</p>
    <a href='/'>Navigate back to the home page</a>
    <br>
    <a href='/about'>Navigate back to the about page</a>
    `
  );
});

server.listen(5000);
