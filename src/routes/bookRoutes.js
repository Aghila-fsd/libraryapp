const express=require ('express');
const booksRouter =express.Router();
function router(nav){
    var books=[{
        title:'TOm and jery',
        author:'joseph barbera',
        genre:'cartoon',
        img:"tom and jerry.jpg"
    },
    {
    title:'Harry porter',
        author:'Harry porter',
        genre:'Fantacy',
        img:"harry.jpg"
    },
    {
        title:'pathummayude adu',
        author:'Basheer',
        genre:'Drama',
        img:"basheer.jpg" 
    }
    
    ]
    booksRouter.get('/',function(req,res){
        res.render("books",{
            nav,
            title:"Library",
            books
    
        });
    });
    booksRouter.get('/:id',function(req,res){
        const id=req.params.id
        res.render('book',{
            nav,
            title:"Library",
            book:books[id]
    
    
        });
    });
    return booksRouter;
}

module.exports=router;