
const router = require('express').Router();
const main = require('./main');
const api = require('./api');

router.get(`(/|/Order|/Delivery|/Medicaments/:id?)`, main);

router.get('/api/medicaments/:id?', api.getMedicaments);
router.get('/api/orders/:id?', api.getOrders);
router.get('/api/deliveries/:id?', api.getDeliveries);
router.get('/api/categories/:id?', api.getCategories);

module.exports = router;