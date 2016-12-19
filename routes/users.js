var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:artistname', function(req, res, next) {
  res.render('users', {
    artistname: req.params.artistname
  });
});

module.exports = router;
