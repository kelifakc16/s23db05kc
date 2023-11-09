var express = require('express');
const product_controlers= require('../controllers/product');
var router = express.Router();
/* GET product */
router.get('/', product_controlers.product_view_all_Page ); module.exports = router;