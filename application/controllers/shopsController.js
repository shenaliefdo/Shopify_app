const Shop = require('../models/shop');
function index(req, res) {
    Shop.all().then(data => res.json(data)).catch((err) => {
        console.log(err);
        return res.status(422).json(err);
    });
}

function create(req, res) {

}
function read(req, res) {

}
function update(req, res) {

}
function remove(req, res) {

}

module.exports = {
    index, create, read, update, remove
};
