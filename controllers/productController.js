const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('home', {layout: 'main'});
});

router.get('/create', (req, res) => {
    res.render('create', {layout: 'main'});  
});

module.exports = router;