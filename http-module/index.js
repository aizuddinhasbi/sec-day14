const http = require("node:http");

// Create a local server to receive data from
const server = http.createServer(function (req, res) {
  res.write("hello world! this is my 1st http server using node.js");
  res.end();
});

const PORT = 1986;
server.listen(PORT, function () {
  console.log("Server is running on port " + PORT);
});
