const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://USERONE:<USERONE@ictakfiles.rp8eh.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
//mongoose.connect('mongodb://localhost:27017/libraryapp');
//mongoose.connect('mongodb+srv://userone:userone@ictakfiles.fmpzz.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');

const Schema=mongoose.Schema;
const AuthorSchema=new Schema({
    author:String,
    title:String,
    genre:String,
    image:String
});
var Authordata=mongoose.model('authordata',AuthorSchema);
module.exports=Authordata;