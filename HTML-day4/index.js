// console.dir(document);
// console.log(document.URL);
// document.title="ICT";
// console.log(document.title);
// console.log(document.all[7]);


//console.log(document.getElementById("intro"));
// 

// document.getElementById('div1').innerHTML="<p>Hello World</p>";

// let hold=document.getElementsByClassName("heading");
// hold[1].textContent="Hello";
// hold[1].style.borderBottom='solid 3px black';
// //hold[0].style.backgroundColor="yellow";
// for(var i=0;i<hold.length;i++)
// {
// hold[i].style.backgroundColor="red";

// }

// let safe=document.getElementsByTagName("h1");
// console.log(safe);
// safe[1].textContent="Tag text changed";

// let area=document.querySelector("input");
// area.value="Pling";
// document.querySelector("#button").value="ok";
// let submit=document.querySelector('input[type="submit"]');
// submit.value="oh god";
// document.querySelector(".lichild").style.color="red";



function myFunction(){


let item=document.querySelector('.lichild');
item.style.color="red";
document.querySelector('.lichild:last-child').style.color="blue";
document.querySelector('.lichild:nth-child(2)').style.color="green";

}
function eventFunction(){
alert("event started");


}

function changeVal(val)
{

alert("The input value has changed. the new value is :"+val);

}