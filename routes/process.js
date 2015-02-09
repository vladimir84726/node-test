var express = require('express');
var router = express.Router();
var model = require('model');

/* GET users listing. */
router.get('/process/:id', function(req, res, next) {
  res.send(model.getOrderProcesses(req.params.id));
});

/* POST users listing. */
router.post('/process/:id', function(req, res, next) {
  res.send(model.insertOrderProcess(req.params.id));
});

module.exports = router;
