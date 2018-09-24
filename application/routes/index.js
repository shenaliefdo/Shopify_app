
const express = require('express');
const router = express.Router();
const ProductController = require("../controllers/productsController");
const OrderController = require("../controllers/ordersController");
const ShopController = require("../controllers/shopsController");
module.exports = router;

router.get('/shops', ShopController.index);
router.post('/shop/', ShopController.create);
router.get('/shop/:id', ShopController.read);
