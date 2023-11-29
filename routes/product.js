var express = require('express');
const product_controlers = require('../controllers/product');
var router = express.Router();

const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    res.redirect("/login");
    }
    

/* GET product */
router.get('/', product_controlers.product_view_all_Page);

/* GET create product page */
router.put('/product/:id',secured, product_controlers.product_update_put);
// GET detail costume page */
router.get('/detail',secured, product_controlers.product_view_one_Page);
/* GET create Product page */
router.get('/create',secured, product_controlers.product_create_Page);
/* GET create update page */
router.get('/update',secured, product_controlers.product_update_Page);
/* GET delete Product page */
router.get('/delete',secured, product_controlers.product_delete_Page);
 

 
 

module.exports = router;
