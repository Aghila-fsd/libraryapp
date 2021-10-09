const express=require ('express');
const port = process.env.PORT || 2021;
const app= new express();

const nav= [
    {
        link:'/books',name:'books'
    },
    {
        link:'/authors',name:'authors'
    },
    {
        link:'/admin',name:'Addbook'
    },
    {
        link:'/addauthor',name:'Addauthor'
    },
    {
        link:'/signin',name:'signin'
    },
    
    {
        link:'/signup',name:'signup'
    }
    
];
const booksRouter=require('./src/routes/bookRoutes') (nav);
const authorsRouter=require('./src/routes/authorRoutes')(nav);
const signinRouter=require('./src/routes/signinRoutes')(nav);
const signupRouter=require('./src/routes/signupRoutes')(nav);
const addbooksRouter = require('./src/routes/addbooksRoutes')(nav);
const addauthorsRouter = require('./src/routes/addauthorsRoutes')(nav);


app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/view');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/signin',signinRouter);
app.use('/signup',signupRouter);
app.use('/admin', addbooksRouter);
app.use('/addauthor', addauthorsRouter);

app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title:"Library"
    });
    //res.sendFile(__dirname + "/src/view/index.ejs");
});

app.listen(port, () => {
    console.log("Server ready at" + port)
});