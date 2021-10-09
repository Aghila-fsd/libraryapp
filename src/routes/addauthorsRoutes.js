const express = require('express');
const addauthorsRouter = express.Router();


function addauthorRouter(nav) {

    addauthorsRouter.get('/', function(req, res) {

        res.render('addauthor', {
            nav,
            title: 'Library',


        })

    })
    addauthorsRouter.get('/add', function(req, res) {
        res.send("The Author has been added successfully");

    })
    return addauthorsRouter;
}

module.exports = addauthorRouter;
