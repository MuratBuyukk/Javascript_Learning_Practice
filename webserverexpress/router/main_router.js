const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    console.log('Main page');
    res.send("<h1 style='color: blue' >Main page</h1>");
});

module.exports = router;