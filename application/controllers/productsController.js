
const {
    Shop,
    Product
} = require('../models/index');
function index(req, res) {
    Product.all().then(data => res.json(data)).catch((err) => {
        console.log(err);
        return res.status(422).json(err);
    });
}

function create(req, res) {
    const shop = req.params.id;
    // const body = req.body;
    Shop.findById(
        shop
    ).then(({ data }) => Product.create({
        shopId: data.id,
        name: req.body.name,
        price: req.body.price
    }).then(({
        newProduct
    }) => {
        console.log("product created");
        res.json(newProduct);
    })).catch((e) => {
        console.log(e);
    });
}

function read(req, res) {
    const product_name = req.params.product_id;
    Product.findOne({
        product_name
    }.then(({ dataValues }) => res.json(dataValues)));
}
function update(req, res) {
    const product_name = req.params.product_id;
    Product.findOneAndUpdate({ product_name }).then(({ dataValues }) => res.json(dataValues));
}
function remove(req, res) {
    const product_name = req.params.product_id;
    Product.findOneAndDelete({ product_name }).then(({ dataValues }) => res.json(dataValues));
}

module.exports = {
    index, create, read, update, remove
};
