
const {
    Shop,
    product
} = require('../models/index');
function index(req, res) {
    product.all().then(data => res.json(data)).catch((err) => {
        console.log(err);
        return res.status(422).json(err);
    });
}

function create(req, res) {
    const shop = req.params.id;
    console.log(shop);
    const b = req.body;
    console.log(b);
    Shop.findById(
        shop
    ).then(() => product.create({
        name: b.name,
        price: b.price,
        shopId: shop
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
    product.findOne({
        product_name
    }.then(({ dataValues }) => res.json(dataValues)));
}
function update(req, res) {
    const product_name = req.params.product_id;
    product.findOneAndUpdate({ product_name }).then(({ dataValues }) => res.json(dataValues));
}
function remove(req, res) {
    const product_name = req.params.product_id;
    product.findOneAndDelete({ product_name }).then(({ dataValues }) => res.json(dataValues));
}

module.exports = {
    index, create, read, update, remove
};
