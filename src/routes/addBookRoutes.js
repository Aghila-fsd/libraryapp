const express = require('express');
const addbookRouter = express.Router();
const Bookdata= require('../model/Bookdata')
const multer = require('multer');
//const path = require('path');
//image uplod
const storage = multer.diskStorage({
   destination:(req,file,cb)=>{
       cb(null,'./public/images/');
   },
      filename:(req, file, cb)=>{
         cb(null,file.fieldname+"_"+Date.now()+"_"+file.originalname);
      }
    });
    const upload=multer({ 
        storage: storage 
    }).single("image");





function router(nav1,nav3) {

    addbookRouter.get('/', function(req, res) {

        res.render('addBooks', {
            nav1,nav3,
            title: 'Library',


        });

    });
    addbookRouter.post('/add', function(req, res) {
        upload(req, res, (err) => {
             var item={
         title:req.body.title,
        author:req.body.author,
        genre:req.body.genre,
        image:req.file.filename

        }
  var book=Bookdata(item);
  book.save();
  res.redirect('/books');   
    });
});
    return addbookRouter;
}

module.exports = router;