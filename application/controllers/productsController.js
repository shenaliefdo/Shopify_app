const {
    Shop,
    product
} = require('../models/index');
function index(req, res) {
    const shop = req.params.id;
    product.all({
        where: {
            shopId: shop
        }
    }).then(data => res.json(data)).catch((err) => {
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
        res.send("Shop does not exist");
    });
}

function read(req, res) {
    const shop = req.params.id;
    const productid = req.params.product_id;
    product.findOne({
        where: {
            shopId: shop,
            id: productid
        }
    }).then((product_data) => {
        if (product_data === null) {
            res.json("product doesn't exist");
        } else {
            res.json(product_data);
        }
    });
}
function update(req, res) {
    const shop = req.params.id;
    const productid = req.params.product_id;
    product.update({
        name: req.body.name,
        price: req.body.price
    },
    {
        where: {
            id: productid,
            shopId: shop
        }
    }).then(({
        dataValues
    }) => res.json(dataValues));
}
function remove(req, res) {
    const shop = req.params.id;
    const productid = req.params.product_id;
    product.destroy({
        where: {
            shopId: shop,
            id: productid
        }
    }).then(() => {
        res.send(`product removed from database`);
    }).catch((e) => {
        console.log(e);
    });
}

module.exports = {
    index, create, read, update, remove
};
