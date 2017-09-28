const express = require('express');
const burger = require('../models/burger.js')
let router = express.Router();
module.exports = router;

router.get("/", (req,res) => {
    burger.all(function(data){
        res.render("index", {burgers: data});
    })
})
