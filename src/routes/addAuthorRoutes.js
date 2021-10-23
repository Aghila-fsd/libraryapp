const express = require('express');
const addauthorRouter = express.Router();
const Authordata= require('../model/Authordata')
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

    addauthorRouter.get('/', function(req, res) {

        res.render('addAuthors', {
            nav1,nav3,
            title: 'Library',


        }); 

    });
    addauthorRouter.post('/add', function(req, res) {
        upload(req, res, (err) => {
             var item={
         author:req.body.author,
        title:req.body.title,
        genre:req.body.genre,
        image:req.file.filename

        }
        var author=Authordata(item);
        author.save();//save to database
        res.redirect('/authors');
           
    });
});
    
    return addauthorRouter;
}

module.exports = router;
