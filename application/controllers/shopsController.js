const {
    Shop
} = require('../models/index');
function index(req, res) {
    Shop.all().then(data => res.json(data)).catch((err) => {
        console.log(err);
        return res.status(422).json(err);
    });
}

function create(req, res) {
    const newShop = req.body;
    console.log(newShop);
    Shop.create(newShop).then(({
        dataValues
    }) => {
        console.log(dataValues);
        res.json(dataValues);
    }).catch((err) => {
        console.log(err);
        res.status(422).json(err);
    });
}

function read(req, res) {
    const name = req.params.id;
    Shop.findById(
        name
    ).then(({
        dataValues
    }) => res.json(dataValues));
}

function update(req, res) {
    const record_id = req.params.id;
    Shop.update({
        name: req.body.name
    },
    {
        where: { id: record_id },
    }).then(({
        dataValues
    }) => res.json(dataValues));
}

function remove(req, res) {
    const name = req.params.id;
    console.log(name);
    Shop.destroy({
        where: {
            id: name
        }
    }).then(({
        dataValues
    }) => res.json(dataValues));
}

module.exports = {
    index,
    create,
    read,
    update,
    remove
};
