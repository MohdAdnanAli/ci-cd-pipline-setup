const http = require("http");
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.end("CI/CD pipeline running successfully!");
  res.end("Hello, DevOps World!");
});

server.listen(port, () => {
  console.log("Server running on port " + port);
});
