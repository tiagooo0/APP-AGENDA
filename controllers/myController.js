const OneModel = require('../models/EventoModel');
const moment = require('moment');
const Evento = require("../models/EventoModel");


//Ejemplo de respuesta a una petición de tipo GET
exports.inicio = (req, res) => {
    res.status(200).render('index', {eventos});
};

// Creacion de evento
exports.createEvento = (req, res) => {
    const nuevoEvento = new Evento(req.body);
    nuevoEvento.save((err, evento) => {
    if (err) {
        console.error("Error al crear el evento:");
        res.status(500).json({ error: "Error al crear el evento" });
    } else {
        res.redirect("/");
    }
    });
    
};


// Eliminar Evento
exports.deleteEvento = (req, res) => {
    const eventoTitle = req.params.titulo;
  
    Evento.findOneAndRemove({ titulo: eventoTitle }, (err, evento) => {
      if (err) {
        console.error("Error al eliminar el evento:", err);
        res.status(500).json({ error: "Error al eliminar el evento" });
      } else if (!evento) {
        res.status(404).json({ error: "El evento no existe" });
      } else {
          console.log("Se elimino con exito el evento")
        res.redirect("/");
      }
    });
  };
  