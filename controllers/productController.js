const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('home', {layout: 'main', title: 'Browse'});
});

    router.get('/create', (req, res) => {
        res.render('create', {layout: 'main', title: 'Create'});  
});

module.exports = router;