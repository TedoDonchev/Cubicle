const { Router } = require('express');
const router = Router();
const prodcutService = require('../services/productService');

router.get('/', (req, res) => {
    res.render('home', {layout: 'main', title: 'Browse'});  
});


router.get('/create', (req, res) => {
    res.render('create', {layout: 'main', title: 'Create'});  
});

router.post('/create', (req, res) => {
    // TODO: Validate input

    prodcutService.create(req.body);

    res.redirect('/');  
});


router.get('/details/:productId', (req, res) => {
    console.log(req.params.productId);
    res.render('details', {layout: 'main', title: 'Details'});  
});

module.exports = router;