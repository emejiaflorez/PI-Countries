const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { Router } = require('express');
const router = Router();
const { Country, Activity } = require('../db.js');

//Rutas

router.get('/countries', async (req, res) => {
  const { name } = req.query;
  const condition = name
  ? {where: { nombre :{[Op.like]: name +'%'} }}
  : {}
 //condition.attributes = { exclude: ['imgFlag'] }
  const countries = await Country.findAll(
     condition,
  );
  //res.json(countries);
  res.json(countries.length ? countries : 'No countries found... - No se encontraron paises..');
})

router.get('/countries/:id', async (req, res) => {
  const {id} = req.params ;
  const country = await Country.findByPk(id);
  res.json(country || 'Country not found... - Pais no encontrado....');
})

router.get('/countries/id/:ID', async (req, res) => {
  const { ID } = req.params;
  const country = await Country.findOne({
    where: { ID }
  });
  res.json(country || 'Country not found... - Pais no encontrado...');
});

module.exports = router;