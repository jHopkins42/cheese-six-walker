const router = require('express').Router();
const apiRoutes = require("./api");


router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).send("<h1>Sorry, the cat does not approve of your 404 error.</h1><a href='./public/derp-9.webp'> <img src='/public/derp-9.webp' alt='cat in a box'></a>");
});


module.exports = router;

