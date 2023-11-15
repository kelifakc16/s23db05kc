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
exports.product_create_post = async function (req, res) {
    let document = new Product();
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.name = req.body.name;
    document.category = req.body.category;
    document.price = req.body.price
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Product delete form on DELETE. 
exports.product_delete = async function (req, res) {
    try {
        result = await Product.findByIdAndDelete(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }

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

exports.product_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await Product.findById(req.query.id)
        res.render('productDetail',
            { title: 'Product Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
/* GET create costume page */
exports.product_create_Page = async function (req, res) {
    console.log("create view")
    try {
        res.render('productCreate', { title: 'Product Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }

};
// Handle building the view for updating a costume.
// query provides the id
exports.product_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await Product.findById(req.query.id)
        res.render('productUpdate', { title: 'Product Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query 
exports.product_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await Product.findById(req.query.id)
        res.render('productDelete', { title: 'Product Delete', toShow: result });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};