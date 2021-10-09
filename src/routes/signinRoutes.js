const express=require ('express');
const signinRoutes =express.Router();
function router(nav){
    // var signin
    //     uname:'admin',
    //     pwd:'12345',
        
    // }]
    signinRoutes.get('/',function(req,res){
        res.render("signin",{
            nav,
            title:"Library",
            //signin
    
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
     return signinRoutes;
}

module.exports=router;