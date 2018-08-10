const router = require('express').Router();
const controller = require('./controller.js');

router.route('/qAndA')
.get(controller.get)
.post(controller.post);

module.exports = router;