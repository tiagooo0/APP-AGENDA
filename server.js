const mongoose = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv");
const Evento = require("./models/EventoModel.js")

//Carga de variables de entorno
dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);

//Conexión al cloud de Mongodb Atlas
mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then((con) => {
    console.log("Connected to database");

   //  Consulta todos los eventos y los imprime en la consola
    Evento.find()
      .then((eventos) => {
        console.log("Eventos encontrados:", eventos);
      })
      .catch((error) => {
        console.log("Error al consultar eventos:", error);
      });
  });

const port = 3000;
//Corremos el servidor en el puerto seleccionado
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port} correctamente`);
});

 // Insertar un evento en la base de datos
/* const nuevoEvento = new evento({
    titulo: "prueba evento",
    descripcion: "hola si si si si",
    date: new Date(),
  });

  nuevoEvento
    .save()
    .then((eventoGuardado) => {
      console.log("Evento guardado:", eventoGuardado);
    })
    .catch((error) => {
      console.log("Error al guardar el evento:", error);
    });*/
  