$(document).ready(function(){


   function validateLogin(name,pwd,status){

        let flag=false;
        if((name=="admin") && (pwd=="12345")){
            flag=true;
        }
        else{
            flag=false;
        }
        status(flag);

    }


$("#loginbtn").click(function(){

    var uname=$('#username').val();
    var password=$('#inputPassword').val();


    validateLogin(uname,password, function(f){


        if(f)
        {
            window.location.href = "home.html"; 


        }
        else{
            alert("Login failed");
        }
    });
});


});