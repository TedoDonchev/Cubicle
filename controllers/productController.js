const { Router } = require('express');
const router = Router();
const productService = require('../services/productService');

router.get('/', (req, res) => {
    let products = productService.getAll();
    res.render('home', {layout: 'main', title: 'Browse', products });  
});


router.get('/create', (req, res) => {
    res.render('create', {layout: 'main', title: 'Create'});  
});

router.post('/create', (req, res) => {
    // TODO: Validate input

    productService.create(req.body);

    res.redirect('/');  
});


router.get('/details/:productId', (req, res) => {   
    let product = productService.getOne(req.params.productId);
    res.render('details', {layout: 'main', title: 'Details', product });  
});

module.exports = router;