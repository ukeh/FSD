function validateForm(form){
//var uname=document.getElementById("Username");
var uname=form.Username.value;
var email=form.email.value;
var number=form.number.value;
var number_re=/(6|7|8|9)\d{9}$/;
var email_re=/\S+@\S+\.\S/;
if(uname.length<6)
{
alert("required atleast 6 characters");
return false;

}
else if(email_re.test(email)==false){
alert("Please enter a valid email");
return false;
}
else if(number_re.test(number)==false)
{
alert("Please enter a valid number");
return false;
}

}