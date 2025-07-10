//  function - is a block of code used to perform a specific task

function code() {
    console.log("Sikar");
}
function codes() {
    console.log("Jaipur");
}
function coding() {
    console.log("Delhi");
    console.log("Goa");
}
console.log("Goa");

code();
codes();
coding();
console.log("Bikaner")
codes();
code();
coding();





// Q . Given an two varibles print addition of them.
let x = 50;
let y = 70;

function additionTwoVar() {
    console.log(x + y);
}

additionTwoVar();


// Q . Given an two varibles print multiplication of them.

function multiplicationTwoVar() {
    console.log(50 * 70);
}

multiplicationTwoVar();






// Q . Given an two varibles print addition of them by using parameters
let a = 30;
let b = 20;

function additionPara(num1, num2) {
    console.log(num1 + num2);
}

additionPara(a, b);
additionPara(30, 60);

// Q . Given an two varibles print subtract of them by using parameters

function subPara(num1, num2) {
    console.log(num1 - num2);
}

subPara(30, 60);







// Q Given numbers write two functions for subtraction and additions
function addPara(num1, num2, num3, num4) {
    // console.log(num1, "num1", num2, "num2", num3, "num3", num4, "num4");
    console.log(num1 + num2 + num3 + num4);
     console.log(num1 + num2 + num3);
}

function subtractPara(num1, num2, num3, num4) {
    // console.log(num1, "num1", num2, "num2", num3, "num3", num4, "num4");
    console.log(num1 - num2 - num3 - num4);
     console.log(num1 - num2);
}

addPara(2, 4, 6, 8);
subtractPara(500, 438, 22, 10);





function AdditionOfTwoVarible(a, b) {
  console.log(a + b, "hi");
  return a + b; // return -  function stop
//   console.log(b + 1);
}
AdditionOfTwoVarible(100, 200);
var output = AdditionOfTwoVarible(20, 40);
console.log(output, "output");




var teams = ["CSK", "KKR", "RCB", "LSG", "SRH"];
var userTypeteams = "CSK";

function getTyped(data, userTypeteams) {
    console.log(data, "data");
    let filtered = data.filter((ele) => ele == userTypeteams);
    return filtered;
}

const outputs = getTyped(teams, userTypeteams);
console.log(outputs, "output");