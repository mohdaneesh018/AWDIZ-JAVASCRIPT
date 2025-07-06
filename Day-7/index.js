// Given an array check given age from end side of array if found then return index if not found then retun "Not found"

let userAge = [24, 56, 45, 18, 32, 67, 78];
let targetUser = 56;
let matchFlag = false;

for (let i = userAge.length - 1; i >= 0; i--) {
    if (targetUser == userAge[i]) {
        console.log(i);
        matchFlag = true;
        break;
    }
}

if (matchFlag == false) {
    console.log("Not found");
}


// Reduce Method
// Find addition of Elements from array 30 by using Reduce Method

let num = [1, 3, 5, 10, 11];
let initialValue = 0;

let totalNum = num.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
console.log(totalNum);


// every  == and operator boolean based
let nums = [2, 5, 89, 75, 56];
const result = nums.every((nums) => nums < 100);
console.log(result);


// some == or operator 
let i = [2, 45, 65, 67, 89];
let j = i.some( (k) => k < 10);
console.log(j);