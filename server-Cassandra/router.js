const router = require('express').Router();
const controller = require('./controller.js');

router.route('/qAndA')
.get(controller.get);

module.exports = router;