var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:collaborator-:collaboratee', function(req, res, next) {
  res.render('collaborations', {
    collaborator: req.params.collaborator,
    collaboratee: req.params.collaboratee
  });
});

module.exports = router;
