console.log("hello");
window.alert("hello2");
window.console.log("hello1");
console.dir(document.body.childNodes[1]);
document.body.style.background="green";
document.body.childNodes[1].innerText="abc";
let heading=document.getElementById("heading");
console.dir(heading);
let headings=document.getElementsByClassName("heading-class");
console.dir("headings");
console.log("headings");
let firstEl=document.querySelector(".class");
console.dir(firstEl);
let allEl=document.querySelectorAll("p");
console.dir(allEl);
let btn1=document.querySelector("#btn1");
btn1.onclick=(evt)=>{
    console.log(evt.target);
    console.log(evt.type);
    console.log(evt.clientx);
    console.log(evt);
   // console.log("btn1 was clicked");
   // let a=24;
   // a++;
   // console.log(a);//
};