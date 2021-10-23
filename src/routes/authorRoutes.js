const express=require ('express');
const authorsRouter =express.Router();
const Authordata=require('../model/Authordata');
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
    
    authorsRouter.get('/',function(req,res){
        Authordata.find()
        .then( function(authors){
        res.render("authors",{
            nav1,nav3,
            title:"Library",
            authors
    
        });
    });
});
    authorsRouter.get('/:id',function(req,res){
        const id=req.params.id
        Authordata.findOne({_id:id})
        .then(function(author){
        res.render('author',{
            nav1,
            title:"Library",
            author
    
    
        });
    });
});

 /* GET SINGLE User BY ID */
authorsRouter.get('/updateauthor/:id', function(req, res) {
    res.render('updateauthor',{Authordata:req.params.id,
     nav1, 
     nav3,
     title:'Library',
   })
     });
 
     authorsRouter.post('/updateauthor/:id',function(req,res){
       
         /* UPDATE User */
       
          upload(req, res, (err) => {
          var item={ 
            author:req.body.author,
            title:req.body.title,
            genre:req.body.genre,
            image:req.file.filename
          }    
             
             
           Authordata.findByIdAndUpdate(req.params.id, item, function(err) {
               if (err) {
                   res.redirect('updateauthor/' + req.params.id);
               } else {
                   res.redirect('/authors')
               }
             });  
         });
     });    
 
 authorsRouter.get('/delete/:id', function(req, res) {
 
     Authordata.findByIdAndRemove(req.params.id, function(err, project) {
         if (err) {
             res.redirect('/authors');
         } else
         {
             res.redirect('/authors');
         }
     });
 });

    return authorsRouter;
}

module.exports=router;