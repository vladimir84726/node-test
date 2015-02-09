var express = require('express');
var router = express.Router();
var model = require('model');

/* GET users listing. */
router.get('/orders', function(req, res, next) {
  res.send(model.getOrders());
});

module.exports = router;
