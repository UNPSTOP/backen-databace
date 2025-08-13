const express = require('express');
const router = express.Router();
const product = require('../controller/product');

router.get('/', product.getproduct)
router.post('/', product.postproduct)
router.put('/:id', product.updateproduct)
    // router.delete('/:id', product.deleteproduct)

module.exports = router