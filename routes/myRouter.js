const myController = require('../controllers/myController');
const express = require('express');
const router = express.Router();
const Evento = require("../models/EventoModel");


//Defino rutas y acciones de respuesta
//router.route('/').get(myController.inicio);

//module.exports = router;
router.get('/', async (req, res) => {
    try {
      // Consulta todos los eventos y los guarda en la variable eventos
      const eventos = await Evento.find();
      
      // Renderiza la vista 'index' con los datos proporcionados
      res.render('index', { eventos });
    } catch (error) {
      console.log("Error:"+ error);
      res.status(500).send('Error en el servidor');
    }
  });
  
  module.exports = router;