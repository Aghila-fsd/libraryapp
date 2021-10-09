var username=document.getElementById("uname");
var password=document.getElementById("password");
var unameerror=document.getElementById("unameerror");
var pwderror=document.getElementById("passworderror");


function check()
{
    if(username.value=="admin" && password.value=="12345"){
        unameerror.innerHTML="";
        return true;
    }else{
        unameerror.innerHTML="username:admin|password:12345";
        unameerror.style.color="red";
        unameerror.style.fontFamily=" Comic Sans MS,serif";
        return false;
    }
}
// function pass()
// {
//     if(password.value=="12345"){
//         pwderror.innerHTML="";
//         return true;
//     }else{
//            pwderror.innerHTML=="12345";
//            pwderror.style.color="red";
//            return false;
//     }
// }
// function validate(callback){
//     if(user() && pass())
//     {
//         callback();
//     }else{
//         return false;
//     }
// }
// function display()
// {
//     window.open("books.ejs");
//     return true;
// }