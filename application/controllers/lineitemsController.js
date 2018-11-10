const {
    order,
    product,
    lineItem
} = require('../models/index');
function index(req, res) {
    const productid = req.params.product_id;
    const orderid = req.params.order_id;
    lineItem.findAll({
        where: {
            productId: productid,
            orderId: orderid
        }
    }).then((lineItems) => {
        if (lineItems.length < 1) {
            res.send("no lineItems pending");
        } else {
            res.json(lineItems);
        }
    }).catch((e) => {
        res.send(e);
    });
}
function create(req, res) { // need to update order total when lineitem created
    const productid = req.params.product_id;
    const orderid = req.params.order_id;
    const amount = req.body.quantity;
    let cost = 0;
    let lineItemTotal = 0;
    product.findById(productid)
        .then((data) => {
            cost = data.price;
            lineItemTotal = cost*amount;
        })
        .then(() => lineItem.create({
            quantity: amount,
            total: lineItemTotal,
            productId: productid,
            orderId: orderid
        }).then((
            newLineItem
        ) => {
            res.send(newLineItem);
        }))
        .catch((e) => {
            res.send(e);
        });
}
function read(req, res) {
    const lineitemId = req.params.lineItem_id;
    lineItem.findOne({
        where: {
            id: lineitemId
        }
    }).then((data) => {
        if (data === null) {
            res.send("order not found");
        } else {
            res.send(data);
        }
    });
}
function update(req, res) {

}
function remove(req, res) {

}

module.exports = {
    index, create, read, update, remove
};
