const express=require ('express');
const port = process.env.PORT||2000
const app= new express();
const nav=[

    {
        link:'/admin',name:'Admin'
      
    },
    {
        link:'/user',name:'User'
       
    }

]

const nav1=[
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/addBooks',name:'Add Books'
    },
    {
        link:'/addAuthors',name:'Add Authors'
    }  

]

const nav2=[
    {
        link:'/login',name:'Login'
      
    },
    {
        link:'/signup',name:'SignUp'
       
    }
]

const nav3=[
    {
        link:'/',name:'Logout'
      
    }
]

const nav4=[
    {
        link:'/user/userbooks',name:'Books'
    },
    {
        link:'/user/userauthors',name:'Authors'
    }
]  

const adminRouter=require('./src/routes/adminRoutes')(nav1,nav3);
const userRouter=require('./src/routes/userRoutes')(nav4,nav3);

const booksRouter=require('./src/routes/bookRoutes') (nav1,nav3);
const authorsRouter=require('./src/routes/authorRoutes')(nav1,nav3);
const loginRouter=require('./src/routes/loginRoutes')(nav1,nav2);
const signupRouter=require('./src/routes/signupRoutes')(nav1,nav2);
const addbookRouter=require('./src/routes/addBookRoutes')(nav1,nav3);
const addauthorRouter=require('./src/routes/addAuthorRoutes')(nav1,nav3);
const userbookRouter=require('./src/routes/userbookRoutes')(nav4,nav3);
const userauthorRouter=require('./src/routes/userauthorRoutes')(nav4,nav3);

app.use(express.urlencoded({extended:true}));

app.use(express.static('./public'));
app.use(express.static('./public/images'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/addBooks', addbookRouter);
app.use('/addAuthors', addauthorRouter);
app.use('/user/userbooks',userbookRouter);
app.use('/user/userauthors',userauthorRouter);




app.use('/admin',adminRouter);
app.use('/user',userRouter);


app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        nav2,
        title:"Library"
    });
    //res.sendFile(__dirname + "/src/view/index.ejs");
});

app.listen(port, () => {
    console.log("Server ready at:" + port)
});