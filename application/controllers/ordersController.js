const {
    order,
    Shop,
    lineItem
} = require('../models/index');
function index(req, res) {
    const shop = req.params.id;
    order.findAll({
        where: {
            shopId: shop
        }
    }).then((o) => {
        console.log(o);
        if (o.length < 1) {
            res.send("no orders pending");
        } else {
            res.json(o);
        }
    });
}

function create(req, res) {
    const shop = req.params.id;
    Shop.findById(
        shop
    ).then(() => order.create({
        shopId: shop,
        total: "0" // will need to update this with total of all line items once lineitem crud complete
    }).then(({ order_data }) => {
        res.send(order_data);
    })).catch((e) => {
        res.send("shop doesn't exist");
    });
}
function read(req, res) {
    const shop = req.params.id;
    const orderid = req.params.order_id;
    order.findOne({
        where: {
            shopId: shop,
            id: orderid
        }
    }).then((order) => {
        if (order === null) {
            res.send("order not found");
        } else {
            res.json(order);
        }
    });
}
function update(req, res) {
    const shop = req.params.id;
    const orderid = req.params.order_id;
    order.update({
        total: req.body.total
    },
    {
        where: {
            id: orderid,
            shopId: shop
        }
    }).then(({
        dataValues
    }) => res.json(dataValues));
}
function remove(req, res) {
    const shop = req.params.id;
    const orderid = req.params.order_id;
    order.destroy({
        where: {
            id: orderid,
            shopId: shop
        }
    }).then(() => {
        res.send("order deleted from database");
    }).catch((e) => {
        res.send('order not found');
    });
}

module.exports = {
    index, create, read, update, remove
};
