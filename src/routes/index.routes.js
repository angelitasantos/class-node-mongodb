const { Router } = require('express')
const router = Router();

const { renderIndex, renderAbout, renderManual } = require('../controllers/index.controller')

router.get('/', renderIndex);

router.get('/about', renderAbout);

router.get('/manual', renderManual);

module.exports = router;