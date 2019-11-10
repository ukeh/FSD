$(document).ready(function(){

$.ajax({

method:"GET",
url:"https://www.randomtext.me/api/lorem/ul-5/5-15",
success:function(result){
    console.log(result);
   // var obj=jQuery.parseJSON();
    console.log(result.text_out);
    $("#myDiv").html(result.text_out);
}


})






});