
const express=require("express")

const userauthorRouter=express.Router();
const Authordata=require('../model/Authordata');


function router(nav4,nav3){

userauthorRouter.get('/',function(req,res){
    Authordata.find()
    .then(function(userauthors){
       res.render("userauthors",{
           nav4,
           nav3,
           title:'Library',
           userauthors
       });
    });
  
});

userauthorRouter.get('/:id',function(req,res){
const id=req.params.id;
Authordata.findOne({_id:id})
.then(function(userauthor){
    res.render('userauthor',{
        nav4,
        title:'Library',
        userauthor
    });
});  
});
 return userauthorRouter;
}
module.exports=router;