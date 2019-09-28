var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req, res) {
    burger.all(function(burger_data) {
        console.log(burger_data);
        res.render('index',{burger_data});
    })
})

router.post('/burgers/update', function(req, res) {
    console.log(req.body.burger_id)
    burger.update(req.body.burger_id, function(result) {
        console.log(result);
        res.redirect('/');
    });
});

router.post('/burger/add/:name', function(req, res){
    console.log(req.params.name)
    burger.add(req.params.name, function(result){
        console.log(result);
        res.redirect('/')
    })
})

module.exports = router;