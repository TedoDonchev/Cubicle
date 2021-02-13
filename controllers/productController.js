const { Router } = require('express');
const router = Router();

router.get('/create', (req, res) => {
    res.render('create', {layout: 'main', title: 'Create'});  
});

router.get('/', (req, res) => {
    res.render('home', {layout: 'main', title: 'Browse'});  
});

module.exports = router;