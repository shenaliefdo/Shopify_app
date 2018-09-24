const Shop = require('../models/shop');
function index(req, res) {
    Shop.all().then(data => res.json(data)).catch((err) => {
        console.log(err);
        return res.status(422).json(err);
    });
}

function create(req, res) {
    const newShop = req.params;
    Shop.create(newShop).then(({ dataValues }) => res.json(dataValues)).catch(err => res.status(422).json(err));
}
function read(req, res) {
    const name = req.params.id;
    Shop.findOne({
        name
    }).then(({ dataValues }) => res.json(dataValues));
}
function update(req, res) {

}
function remove(req, res) {

}

module.exports = {
    index, create, read, update, remove
};
