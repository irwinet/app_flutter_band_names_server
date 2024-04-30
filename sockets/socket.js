const { io } = require('../index');

io.on("connection", (client) => {
  console.log("Cliente conectado");

  client.on("disconnect", () => {
    console.log("Cliente desconectado");
  });

  client.on("mensaje", (payload) => {
    console.log("Mensaje", payload);
    io.emit("mensaje", { admin: "Nuevo mensaje" });
  });

  client.on("emitir-mensaje", (payload) => {
    console.log("Mensaje", payload);
    io.emit("nuevo-mensaje", payload); // Emite a todos
    client.broadcast.emit("nuevo-mensaje", payload); // Emite a todos menos al que lo emitio
  });
});
