const express=require ('express');
const signupRouter =express.Router();
function router(nav){
    // var signin
    //     uname:'admin',
    //     pwd:'12345',
        
    // }]
    signupRouter.get('/',function(req,res){
        res.render("signup",{
            nav,
            title:"Library",

    
        });
    });
    // booksRouter.get('/:id',function(req,res){
    //     const id=req.params.id
    //     res.render('book',{
    //         nav,
    //         title:"Library",
    //         book:books[id]
    
    
    //     });
    // });
     return signupRouter;
}

module.exports=router;