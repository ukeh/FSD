/* AJAX */
//function loadDoc()
// {

//     var xhttp=new XMLHttpRequest();
//     xhttp.onreadystatechange=function(){
//         if(this.readyState==4 && this.status==200)
//         {
//             document.getElementById("demo").innerHTML=this.responseText;

        
//         }
//     }
//     xhttp.open("GET","ajax_info.txt",true);
//     xhttp.send();
// }

// function loadDoc()
// {
//     var xttp=new XMLHttpRequest();
//     xttp.onreadystatechange=function()
//     {
//         if(this.readyState==4 && this.status==200)
//         {
//             var obj=JSON.parse(this.responseText);
//             document.getElementById("demo").innerHTML=obj.text_out;
//         }
//     }

// xttp.open("GET","https://www.randomtext.me/api/lorem/ul-5/5-15",true);
// xttp.send();


// }


/* New object property*/

// Create an Object:
function loadDoc(){
var person = {
    firstName: "John",
    lastName : "Doe",
    language : "NO", 
  };
  
  // Change a Property:
  Object.defineProperty(person, "language", {
    value: "EN",
    writable : true,
    enumerable : false,
    configurable : true
  });
  
  // Enumerate Properties
  var txt = "";
  for (var x in person) {
    txt += person[x] + "<br>";
  }
  document.getElementById("demo").innerHTML = txt;
}