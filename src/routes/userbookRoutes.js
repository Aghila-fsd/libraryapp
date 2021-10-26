
const express=require("express")

const userbookRouter=express.Router();

const Bookdata=require('../model/Bookdata');


function router(nav4,nav3){

    userbookRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(userbooks){
           res.render("userbooks",{
               nav4,nav3,
               title:'Library',
               userbooks
           });
        });
      
   });
  
    
   userbookRouter.get('/:id',function(req,res){
    const id=req.params.id;
    Bookdata.findOne({_id:id})
    .then(function(userbook){
        res.render('userbook',{
            nav4,
            title:'Library',
            userbook
        });
    });  
  });
 return userbookRouter;
}
module.exports=router;