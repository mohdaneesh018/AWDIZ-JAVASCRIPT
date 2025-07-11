// Function Declaration
function Greet() {
    console.log("Hello");
}

Greet();


// Function Expression
const Greeting = function () {
    console.log("Sikar");
}

Greeting();




function addTwo(num1, num2) {
    console.log(num1 + num2);
}
addTwo(4, 5);
// OR
function addtwo(a = 50, b = 40) {
    console.log(a + b);

}
addtwo();





function synTax(city = "Jaipur") {
    console.log("Hello", city);
}
synTax();
synTax("Mumbai");





// Arrow Function
const addition1 = (num1, num2) => num1 + num2;
console.log(addition1(2, 4));

const addition2 = num1 => num1 * num1;
console.log(addition2(4));





let x = 10;
function block() {
    let x = 20;
    console.log(x);
}
console.log(x);       // 10
block();              // 20





// New Topic = Object
// Object  { key1 : value1 , key2 : value2, key3 : value3 }
// object is an collection of key and values

var myData = {
    name: "Aneesh",
    city: "Udaipurwati",
    age: 22,
    students: ["Uvesh", "Ayan", "Aryan"],
    isOpen: true,
    courses: { courseName: "Full Stack", batchStrength: 15 },
}
// console.log(myData.name);
// console.log(myData.city);
// console.log(myData.age);
// console.log(myData.courses);
// console.log(myData.courses.batchStrength);
// console.log(myData.courses.courseName);

myData.name = "Zahid";
myData["age"] = 32; 
// console.log(myData.name);
// console.log(myData.age);

delete myData.isOpen;
delete myData.city;
// console.log(myData);


var data = {name: "Nabeel", city: "Fatehpur", age: 19};
for(let key in data) {
    // console.log(key, "key");
      console.log(key, "key", data[key]);
}