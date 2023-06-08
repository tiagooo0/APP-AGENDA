const OneModel = require('../models/EventoModel');
const moment = require('moment');
const Evento = require("../models/EventoModel");


//Ejemplo de respuesta a una petición de tipo GET
exports.inicio = (req, res) => {
    res.status(200).render('index', {eventos});
};
    
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