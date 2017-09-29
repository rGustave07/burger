const express = require('express');
const burger = require('../models/burger.js')
let router = express.Router();
module.exports = router;

router.get("/", (req,res) => {
    burger.all(function(data){
        res.render("index", {burgers: data});
    })
})

router.delete("/:id", (req, res) => {
    let condition = `id = ${req.params.id}`;

    burger.delete(condition, function(data){
        res.redirect("/");
    })
})

router.post("/", (req, res) => {
    // console.log(req.body); {burger: 'Ritter Gustave'}
    burger.create("burgers", req.body.burger_name, function(data){
        res.redirect("/");
    });
    // console.log(req.body.burger_name);
})
