const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { Router } = require('express');
const router = Router();
const { Activity } = require('../db.js');

//Rutas
router.post('/activities', async (req, res) => {
  console.log(req.body);
  const { nombre, dificultad, duracion, temporada } = req.body;
    try {
          const newActivity = await Activity.create({
          nombre,
          dificultad,
          duracion,
          temporada
        });
        res.json(newActivity);
      } 
   catch (error) {
        res.send(error);
   }
});

router.get('/activities', async function(req, res) {
  const activities = await Activity.findAll();
  res.json(activities || 'Activities not found... - Actividades no encontrada...');
});

router.get('/activities/temporada/:temporada', async function(req, res) {
  const {temporada} =  req.params;
  const activities = await Activity.findAll({
    where :  { temporada }
  });
  res.json(activities || 'Activities not found... - Actividades no encontrada...');
});

router.get('/activities/dificultad/:dificultad', async function(req, res) {
  const {dificultad} =  req.params;
  const activities = await Activity.findAll({
    where :  { dificultad }
  });
  res.json(activities || 'Activities not found... - Actividades no encontrada...');
});
module.exports = router;