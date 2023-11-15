var express = require('express');
const product_controlers = require('../controllers/product');
var router = express.Router();
/* GET product */
router.get('/', product_controlers.product_view_all_Page);

/* GET create product page */
router.put('/product/:id', product_controlers.product_update_put);
// GET detail costume page */
router.get('/detail', product_controlers.product_view_one_Page);


module.exports = router;