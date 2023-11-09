var Product = require('../models/product');
// List of all Products
exports.product_list = async function (req, res) {
    try {
        theProducts = await Product.find();
        res.send(theProducts);

    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }

};

// for a specific Product. 
exports.product_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Product detail: ' + req.params.id);
};
// Handle Product create on POST. 
exports.product_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Product create POST');
};
// Handle Product delete form on DELETE. 
exports.product_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Product delete DELETE ' + req.params.id);
};
// Handle Product update form on PUT. 
exports.product_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Product update PUT' + req.params.id);
};


// Handle a show all view
exports.product_view_all_Page = async function (req, res) {
    try {
        theProducts = await Product.find();
        res.render('product', { title: 'Product Search Results', results: theProducts });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};