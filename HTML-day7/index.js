
$(document).ready(function()
{
    var count=0;
$('input[type="checkbox"]').change(function(){
    if(this.checked)
    {
        count++;
        $("#myDiv").text(count);
    }
    else{
        count--;
        $("#myDiv").text(count);
    }


})




})