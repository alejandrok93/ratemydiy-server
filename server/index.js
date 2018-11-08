const server = require("./server.js");

const port = process.env.PORT || 8000;

server.get("/", (req, res) => {
  res.send("server is running!");
});
server.listen(port, () => {
  console.log("server is running!");
});
