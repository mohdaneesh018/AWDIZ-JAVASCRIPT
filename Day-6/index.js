// Map Method

let i = [3, 4, 5];
let newI = i.map((j) => j * 15);
console.log(newI);

const stu = ["Aneesh", "Rehan", "Uvesh"];
let newStu = stu.map((boy) => boy + " Khan");
console.log(newStu);


// Foreach Method
let boys = ["Zahid", "Anash", "Samii"];
boys.forEach(name => console.log("Welcome", name));

// Filter Method
let num = [22, 45, 67, 78, 98];
let evenNums = num.filter(nums => nums % 2 == 0);
console.log(evenNums);

let nums = [22, 45, 67, 78, 98];
let oddNums = nums.filter(digit => digit % 2 == 1);
console.log(oddNums);


// using for loop
let number = [1, 2, 3];
let result = [];
for (let x = 0; x < number.length; x++) {
    result.push(number[x] * 5);
}
console.log(result, "result");


// even number
let even = [21, 34, 546, 6758, 768, 43, 78, 97, 90];
let count = 0;
for (let i = 0; i < even.length; i++) {
    if (even[i] % 2 == 0) {
        count++;
    }
    // console.log(count);
}
console.log(count);


let userAge = [34, 54, 76, 86, 90, 20, 30];
let fixedAge = 86;

for (let i = userAge.length - 1; i >= 0; i--) {
    if (fixedAge == userAge[i]) {
        console.log(i);
        break;
    }
}