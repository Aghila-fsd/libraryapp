const express = require('express');
const addbooksRouter = express.Router();


function router(nav) {

    addbooksRouter.get('/', function(req, res) {

        res.render('addbook', {
            nav,
            title: 'Library',


        });

    });
    addbooksRouter.get('/add', function(req, res) {
        res.send("The Book has been added successfully");

    });
    return addbooksRouter;
}

module.exports = router;