const express=require ('express');
const booksRouter =express.Router();
const Bookdata=require('../model/Bookdata');
//const bodyParser=require('body-parser');
const multer = require('multer');
const ejs = require('ejs');
const path = require('path');
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
        storage: storage }).single("image");

function router(nav1,nav3){
    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then( function(books){
            res.render("books",{
                nav1,nav3,
                title:"Library",
                books
        
            });
        });
        
    });
    booksRouter.get('/:id',function(req,res){
        const id=req.params.id
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render('book',{
                nav1,
                title:"Library",
                book
        
        
            });

        });
        
    });
    
    /* GET SINGLE User BY ID */
booksRouter.get('/updatebook/:id', function(req, res) {
    res.render('updatebook',{Authordata:req.params.id,
     nav1, nav3,
     title:'Library',
   })
     });
 
     booksRouter.post('/updatebook/:id',function(req,res){
       
         /* UPDATE User */
       
             upload(req, res, (err) => {
                var item={
                    title:req.body.title,
                   author:req.body.author,
                   genre:req.body.genre,
                   image:req.file.filename
           
                    }
             
             
           Bookdata.findByIdAndUpdate(req.params.id, item, function(err) {
               if (err) {
                   res.redirect('updatebook/' + req.params.id);
               } else {
                   res.redirect('/books')
               }
             });  
         });
     });    
 
 booksRouter.get('/delete/:id', function(req, res) {
 
     Bookdata.findByIdAndRemove(req.params.id, function(err, project) {
         if (err) {
             res.redirect('/books');
         } else
         {
             res.redirect('/books');
         }
     });
 });
 

    return booksRouter;
}

module.exports=router;