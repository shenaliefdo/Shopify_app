
const express = require('express');
const router = express.Router();
const ProductController = require("../controllers/productsController");
const OrderController = require("../controllers/ordersController");
const ShopController = require("../controllers/shopsController");
const LineItemController = require("../controllers/lineitemsController");
module.exports = router;

router.get('/shops', ShopController.index);
router.post('/shop', ShopController.create);
router.get('/shop/:id', ShopController.read);
router.put('/shop/:id', ShopController.update);
router.delete('/shop/:id', ShopController.remove);

router.get('/shop/:id/products', ProductController.index);
router.post('/shop/:id/product', ProductController.create);
router.get('/shop/:id/product/:product_id', ProductController.read);
router.put('/shop/:id/product/:product_id', ProductController.update);
router.delete('/shop/:id/product/:product_id', ProductController.remove);

router.get('/shop/:id/orders', OrderController.index);
router.post('/shop/:id/order', OrderController.create);
router.get('/shop/:id/order/:order_id', OrderController.read);
router.put('/shop/:id/order/:order_id', OrderController.update);
router.delete('/shop/:id/order/:order_id', OrderController.remove);

router.get('', LineItemController.index);
router.post('', LineItemController.create);
router.get('', LineItemController.read);
router.put('', LineItemController.update);
router.delete('', LineItemController.remove);
