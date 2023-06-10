//Modelo de ejemplo para alojar datos en una DB mongo
const mongoose = require("mongoose");

//Creación del Schema evento
const EventoSchema = new mongoose.Schema({
    titulo: {
        type: String,
        require : true
    },
    descripcion: {
        type: String,
        require : true
    },
    date: {
        type: String,
        require : true
    },
});

//Creación del modelo Post
const evento = mongoose.model("Evento", EventoSchema);

module.exports = evento;
