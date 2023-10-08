module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log(`${socket.id} connected`);

    socket.on("chat message", (msg) => {
      io.emit("chat message", msg);
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected");
    });
  });
};
