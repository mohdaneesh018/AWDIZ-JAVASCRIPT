// Datatypes
console.log("hello", typeof "hello");
console.log("jklsajfdkl73t28372%$^^", typeof "jklsajfdkl73t28372%$^^")

console.log(1, typeof 1);
console.log(67, typeof 67);

console.log("true", typeof true);
console.log("false", typeof false);

// Variables
var userName = "Aneesh";
console.log(userName);

var isTrue = "true";
console.log(isTrue);

var isNumber = "45";
console.log(userName, isTrue, isNumber);

var counter = 1;
console.log(counter);
counter = 2;
console.log(counter);
counter = 3;
console.log(counter);

let userCity = "Sikar";
console.log(userCity);

let addition = 23;
addition++;
addition += 1;

console.log(addition);

const isAge = 33;
console.log(isAge);

// Scope
{
    const age = 20;
    {
        {
            console.log(age);
        }
        console.log(age);
    }
    console.log(age);
    const ages = 36;
    console.log(ages); 
}