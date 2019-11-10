// function multiply(num1,num2)
// {
//     return (num1*num2);
// }

// let result=multiply(2,3);
// console.log(result);


//ES5-EgmaScript5
// let multiply=function(num1,num2)
// {
//     return (num1*num2);
// }

// let result=multiply(2,3);
// console.log(result);

//ES6
// let multiply=(num1,num2)=>{
//     return(num1*num2);
// }
// //console.log(multiply(2,3));

// let square=(num1)=>{
//     return(num1*num1);
// }
// console.log(square(5));

//arrow function ES6 callback function

// let getDetails=(id,callback)=>{
//     console.log("inside the function");
//     console.log("id:"+id);
//     callback();
// }
// getDetails(1,()=>{
//     console.log("Finished");
// });


// let getDetails = (id, callback) => {
//     console.log("inside the function");
//     console.log("id:" + id);
//     callback({ id: id, name: "unni" });
// }

// getDetails(1, (person) => {
//     console.log("object recieved");
//     console.log(person.id);
//     console.log("finished");
// });



// //Async

// console.log('Before');
// setTimeout(() => { console.log("inside"); }, 2000);
// console.log('After');


/* Find the error */

// function getUser(id) {
//     setTimeout(() => { return ({ id: id, Name: 'Meera' }); }, 2000);

// }

// console.log('Before');
// const user = getUser(1);
// console.log(user);
// console.log('After');


/* solution*/

// function getUser(id,callback)
// {
// setTimeout(()=>{callback({Id:id,Name:"Meera"});},2000);

// }

// console.log("Before");
// getUser(1,(user)=>{
//     console.log(user);
//     console.log("finished");
// });

//oops in js
//console.log("After");
// var person= new Object();
// person.name="unni";
// person.age=21;
// person.getter=function(){

//     return({Name:this.name,age:this.age});
// }
// person.setter=function(name,age){

//     this.name=name;
//     this.age=age;
// }

// console.log(person.getter());
// person.setter("rahul",22);
// console.log(person.getter());



/*constructor*/

// function person(fname,lname)
// {
// this.fname=fname;
// this.lname=lname;
// }
// person.prototype.getDetails=function(){
//     console.log("the name is"+this.fname);
// }

// let per1=new person('muk','lathiyan');
// let per2=new person('hai','poi');

// per1.getDetails();
// per2.getDetails();
// console.log(typeof(person));

/*creating using object.create()*/
// var coder={
//     isStudying:false,
//     printIntroduction:function(){

//         console.log(`My name is ${this.name}.Am I styudying? ${this.isStudying}`);
    
//         }
// }

// var m1=Object.create(coder);
//  m1.name='mukil';
// m1.isStudying=true;
// m1.printIntroduction();

/* CLASS */


// class Vehicle{
// constructor(name,maker,engine){
//     this.name=name;
//     this.engine=engine;
//     this.maker=maker;
// }
// getDetails(){
//     return(`The name of the bike is ${this.name}`);
// }

// }
// let bike1= new Vehicle('hay','suzu','3037');
// console.log(bike1.getDetails());
/* Inheritance */

// class Person{
//     constructor(){
//         this.name="unni";
//     }
// }
// class Student extends Person{
//     constructor(id)
//     {
//         super();
//         this.id=id;
//     }
//     toString(){
//         return(`Name of person:${this.name},
//         student ID: ${this.id}`);

//     }
// }

// let student1= new Student(22);
// console.log(student1.toString());

// const args=[1,2,3,4,11,19];
// function test(args,callback)
// {
//     console.log(args);
//     callback(args);
// }





// function getUser(id,callback)
// {
// setTimeout(()=>{callback({Id:id,Name:"Meera"});},2000);

// }

// console.log("Before");
// getUser(1,(user)=>{
//     console.log(user);
//     console.log("finished");
// });




// var promise1=new Promise(function(resolve,reject){
// const x=10;
// const y=10;
// if(x===y)
// {
//     resolve();
// }
// else{
//     reject();
// }
// });


// promise1.then(function(){console.log('equal')}),
// function(){
//     console.log("not equal:");
// }



// async function f(){
//     let promise=new Promise((resolve,reject)=>{ var x=2;
//     y=3;
// setTimeout(()=>{if(x==y){resolve("done");}else{reject("rejected");}}),2000});
// await promise.
// then(function(msg){console.log(msg)}
// ).catch(function(err){
//     console.log(err);
// })    ;
// }
// f();

/* 07/11/19 Promise workout */

// var promise1= new Promise(function(resolve,rejected){
// setTimeout(()=>{
//     resolve({id:1,name:"meera"});
// },1000);
// });
// promise1.then(function(obj){
// console.log(obj.name);  
// }).
// then(function(){
//     return new Promise(function(resolve,reject){

//         setTimeout(()=>{
//         resolve( "to second then");
//         },1000);
//     });


    
// }).
// then(function(a){
// console.log(a);
// }).
// then(function(){
//     console.log("To third then");
// }).catch(function(err)
// {
// console.log("Error kids");
// });


// Promise inside a function

// async function myF(id){

// return await new Promise(function(resolve,reject){
//     setTimeout(()=>{resolve({id:id,name:"unni"});
//     },1000);
// });
// }

// myF(21).then(function(usr){
// console.log(usr);
// });

// $(document).ready(function(){
//     $("h1").click(function(){
//         $(this).hide();
//     })
// });


// $(document).ready(function () {
//     $("#btn").click(function () {
//         if ($("#box").val() == 1) {
//             $("#myDiv").text("Fruits");
//         }
//         else {
//             $("#myDiv").text("Cars");
//         }
//     })



// //$("input[type='checkbox']").hide();
// $('input[type="checkbox"]').change(function () 
// {
//     if(this.checked) {
//         $("#myDiv").text($(this).val()+"<br>");
//     }
   
// })
// })


$(document).ready(function()
{
$('input[type="radio"]').change(function(){
    var a=$(this).val();

    if(a=="fruits")
    {
$("#myDiv").html("<ul><li>apple</li><li>orange</li></ul>")
    }
    else if(a=="cars"){
        $("#myDiv").html("<ul><li>Toyota</li><li>suzuki</li></ul>")
    }
 else if(a=="animals"){
    $("#myDiv").html("<ul><li>cat</li><li>dog</li></ul>")
 }
    


})




})