var express = require('express'); var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var product_controller = require('../controllers/product');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Product ROUTES ///
// POST request for creating a Product.
router.post('/product', product_controller.product_create_post);
// DELETE request to delete Product.
router.delete('/product/:id', product_controller.product_delete);
// PUT request to update Product.
router.put('/product/:id', product_controller.product_update_put);
// GET request for one Product.
router.get('/product/:id', product_controller.product_detail);
// GET request for list of all Product items.
router.get('/product', product_controller.product_list);
module.exports = router;