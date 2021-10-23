const express=require("express");
const loginRouter=express.Router();
const Userdata=require('../model/Userdata');



function router(nav1,nav2){


loginRouter.get('/',function(req,res){
   
    res.render("login",{
        nav1,
        nav2, 
        title:'Library'
        
    });
});


    
       // 'username':'admin',
      //  'Password':'12345'
    


loginRouter.post('/checkuser',async(req,res)=>{

try{
   const  username=req.body.username
   const   password=req.body.password
   Userdata.findOne({username:username,password:password},function(err,doc){
    if(username==='admin'||password==='12345'){
        res.redirect('/admin');
    }
   else if(doc){        
    res.status(201).redirect('/user');
    }  
   else{
   
     res.send('Invalid username or password')
          
   }
});
}
   catch(error){
    res.status(400).send('Invalid username');
    }
});

return loginRouter;

}
module.exports=router;