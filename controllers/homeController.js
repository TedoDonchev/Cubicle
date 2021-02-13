const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    //res.render('home', {layout: 'main', title: 'Browse'});
    res.redirect('/products')
});

router.get('/about', (req, res) => {
    res.render('about', {layout: 'main', title: 'About'});
})



module.exports = router;