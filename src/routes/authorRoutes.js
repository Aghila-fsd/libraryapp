const express=require ('express');
const authorsRouter =express.Router();
function router(nav){
    var authors=[{
        title:'Joseph barbera',
        nationality:'italian',
        DOB:'24/3/1911',
        img:"JBarbera.jpg"
    },
    {
    title:'J K Rowling',
    nationality:'uk',
     DOB:'31/7/1965',
    img:"jk rowling.jpg"
    },
    {
        title:'Vaikkam Muhammed Basheer',
        nationality:'Indian',
        DOB:'21/1/1908',
        img:"mbasheer.jpg" 
    }
    
    ]
    authorsRouter.get('/',function(req,res){
        res.render("authors",{
            nav,
            title:"Library",
            authors
    
        });
    });
    authorsRouter.get('/:id',function(req,res){
        const id=req.params.id
        res.render('author',{
            nav,
            title:"Library",
            author:authors[id]
    
    
        });
    });
    return authorsRouter;
}

module.exports=router;