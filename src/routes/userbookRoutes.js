
const express=require("express")

const userbookRouter=express.Router();

const Userdata=require('../model/Userdata');


function router(nav4,nav3){

    userbookRouter.get('/',function(req,res){
        Userdata.find()
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
    Userdata.findOne({_id:id})
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