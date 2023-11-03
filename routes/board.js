var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("hi")
     // Get query parameters
     let query = req.query;
     console.log(`rows ${query.rows}`);
     console.log(`cols ${query.cols}`);
     
  res.render('board', { title: 'Board Displasy', query: query });
});

module.exports = router;
