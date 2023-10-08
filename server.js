const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
require("dotenv").config();
const cors = require("cors");

const port = process.env.PORT || 8888;

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors());

require("./src/sockets/socketHandlers")(io);

server.listen(port, () => {
  console.log(`Server socketio is listening on port ${port}`);
});
