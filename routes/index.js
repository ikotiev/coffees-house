const { Router } = require('express');

const router = Router();

router.use(require('./coffees.route'));

module.exports = router;
