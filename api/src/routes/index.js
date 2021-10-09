const { Router } = require('express');
const router = Router();

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//Routes
router.get('/', (req, res) => {
    res.send('Home o Ruta Principal Proyecto Country')
})

// router.use('/countries', require('./countries.js'));
// router.use('/activities', require('./activities.js'));

router.use(require('./countries.js'));
router.use(require('./activities.js'));

module.exports = router;
















