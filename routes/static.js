/* Static routes */

var express = require('express');
var router = express.Router();

/* GET application information page. */
router.get('/appinfo', function(req, res, next) {
  res.sendfile('./public/html/info.html');
});

/* GET sample JQuery mobile page. */
router.get('/multipages', function(req, res, next) {
  res.sendfile('./public/html/jquerymobile-multipages.html');
});

module.exports = router;
