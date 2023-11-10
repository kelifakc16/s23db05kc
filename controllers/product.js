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

// Handle Product create on POST. 
exports.product_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Product create POST');
};
// Handle Product delete form on DELETE. 
exports.product_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Product delete DELETE ' + req.params.id);
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

// for a specific Product.
exports.product_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Product.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

//Handle Product update form on PUT.
exports.product_update_put = async function (req, res) {
    try {
        // console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
        let toUpdate = await Product.findById(req.params.id)

        // // Do updates of properties
        if (req.body.name) { toUpdate.name = req.body.name };
        if (req.body.category) { toUpdate.category = req.body.category };
        if (req.body.price) { toUpdate.price = req.body.price };
        let result = await toUpdate.save();
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(' {"error": $ {err}: Update for id $ {req.params.id} failed');
    }
};

