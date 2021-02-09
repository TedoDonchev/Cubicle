const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('about', {layout: 'main'});
})



module.exports = router;