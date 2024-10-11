let addButton = document.getElementById("addButton");
//add event
addButton.addEventListener("click", function () {
  //1.Select the elements
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

  let result = document.getElementById("result");

  //perform calc
  let sum = parseFloat(num1) + parseFloat(num2);
  result.innerHTML = '<i class="fas fa-equals icon"></i>' + sum;
 });


let subButton = document.getElementById("subButton");
//add event
subButton.addEventListener("click", function () {
    //1.Select the elements
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
  
    let result1 = document.getElementById("result1");
    let sub = parseFloat(num1) - parseFloat(num2);
    result1.innerHTML = '<i class="fas fa-equals icon"></i>' + sub;
    console.log(sub);

});



let mulButton = document.getElementById("mulButton");
//add event
mulButton.addEventListener("click", function () {
    //1.Select the elements
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
  
    let result2 = document.getElementById("result2");
    
  let multiply = parseFloat(num1) * parseFloat(num2);
  result2.innerHTML = '<i class="fas fa-equals icon"></i>' + multiply;
  console.log(multiply);
});

let divButton = document.getElementById("divButton");
divButton.addEventListener("click", function () {
    //1.Select the elements
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
  
    let result3 = document.getElementById("result3");
  let divide = parseFloat(num1) / parseFloat(num2);
  result3.innerHTML = '<i class="fas fa-equals icon"></i>' + divide;
  console.log(divide);
 
 
 
 });
 let clearButton = document.getElementById("clearButton");
 clearButton.addEventListener("click", function () {
    location.reload();
 });