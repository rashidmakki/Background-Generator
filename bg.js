
var _ = require('lodash');
var array=[1,2,3,4,5,6,7,8,9];
console.log('answer:',_.without(array,3));

alert("click and change the two colours ") ;

var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");


function bgchange()
{
	body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";
	css.textContent=body.style.background+";";

}


color1.addEventListener("input",bgchange);
color2.addEventListener("input",bgchange);


