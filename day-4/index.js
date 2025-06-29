// Assignment Question using Conditional statement :-
// Q.1 Write a Program to check if a number is Positive, negative, or Zero using if-else:

var num = -34;
if (num >= 0) {
    console.log("Number is Positive");
}

else if (num <= 0) {
    console.log("Number is Negative");
}

else {
    console.log("Number is Zero");
}


// Q.2 Check wheather a number  is even or odd using if-else:

let i = 95;
if (i % 2 == 0) {
    console.log("Number is even");
}
else if (i % 2 == 1) {
    console.log("Number is odd");
}
else {
    console.log("Number is not even or not odd");
}


// Q.3 Write a program that accepts age as input and prints:
var age = 35;
if (age < 13) {
    console.log("Child");
}

else if ((age >= 13) && (age < 20)) {
    console.log("Teenager");
}

else if ((age >= 20) && (age < 60)) {
    console.log("Adult");
}

else {
    console, log("Senior");
}

// Q.4 Create a Program to Print the grade of a student using if-else based on marks:

let nums = 82;
if (nums >= 90) {
    console.log("Grade is: A");
}
else if ((nums <= 89) && (nums > 80)) {
    console.log("Grade is: B");
}
else if ((nums <= 79) && (nums > 70)) {
    console.log("Grade is: C");
}
else if ((nums <= 69) && (nums > 60)) {
    console.log("Grade is: D");
}
else {
    console.log("Grade is: F");
}

// Q.5 Use a switch case to take a number between 1-7 and print the corresponding weekday:

let weak = 5;
switch (weak) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
}

// Q.6 Create a program using switch that takes a character input and prints wheather it is a vowel (a, e, i, o, u) or consonent:

var vowel = "g";
switch (vowel) {
    case "a":
        console.log("It's a Vowel");
        break;
    case "e":
        console.log("It's a Vowel");
        break;
    case "i":
        console.log("It's a Vowel");
        break;
    case "o":
        console.log("It's a Vowel");
        break;
    case "u":
        console.log("It's a Vowel");
        break;
    case "f":
        console.log("It's a Consonent");
        break;
    default: {
        console.log("It's a Consonent");
    }
}

// Q.7 Use if-else to check if a year is a leap year or Not:
let year = 2004;
if ((year % 2 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
    console.log("It's a Leap Year.")
}
else {
    console.log("It's not a Leap Year.")
}

// Q.8 Use Switch-case to perform basic arithmetic operations(+, -, *, /) based on the operator input:
let a = 5;
let b = 7;
let operator = "*";
switch (operator) {
    case "+":
        console.log(a + b);
        break;
    case "-":
        console.log(a - b);
        break;
    case "*":
        console.log(a * b);
        break;
    case "/":
        console.log(a / b);
        break;
    default:
        console.log("Enter valid operator");
        break;
}

// Q.9 Write a Program using if-else to check if a personis eligible to vote(age >= 18):
let Age = 13;
if (Age >= 18) {
    console.log("Eligible for Vote.");
}
else if (Age < 18) {
    console.log("Not Eligible for Vote.");
}

// Q.10 Using if-else, Check if three given sides can form a triangle or not:
let x = 2;
let y = 3;
let z = 4;
if (((x + y) > z) && ((y + z) > x) && ((x + z) > y)) {
    console.log("Three sides is Triangle.");
}
else {
    console.log("Three Sides not a Triangle.")
}



// Assignment Question by using Loops :-
// Q.1 Print all even numbers from 1 to 50 using a for loop and if condition:

let Num = 1;
for (Num = 1; Num <= 50; Num++) {
    if (Num % 2 == 0) {
        console.log(Num);
    }
}

// Q.2 Using a while loop. print numbers from 10 to 1 in reverse order:
let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}

// Q.3 Write a program that prints the multiplications table of a number(e.g., 7)using a for loop:
let k = 1;
for (k = 1; k <= 10; k++) {
    console.log(7 * k);
}

// 4. Using a for loop, print only the odd numbers from 1 to 100:
let m = 1;
for (m = 1; m <= 100; m++) {
    if (m % 2 == 1) {
        console.log(m);
    }
}

// 5. Create a program to count how many numbers between 1 and 100 are divisible by both 3 and 5 using for and if: 
var count = 0;
let p =  1;
for (p = 1; p < 100; p++) {
    if (p % 3 == 0 && p % 5 == 0) {
        count++;
    }
}
console.log(count);

//6. Print the factorial of a number using a while loop:

var num = 5;
var fact = 1;

while (num >= 1) {
    fact = fact * num;
    num--;
}
console.log(fact);

//7. Use a for loop to find the sum of all numbers from 1 to 100:

var sum = 0;

for (i = 1; i <= 100; i++) {
    sum = sum + i;
}
console.log(sum);

//8. Write a program using a loop and switch to print: 
let  I = 0;
for (I = 0; I < 50; I++) {
    switch (I) {
        case I % 3 == 0:
            console.log("Fizz");
            break;
        case I % 5 == 0:
            console.log("buzz");
            break;
        case I % 3 && I % 5 == 0:
            console.log("fizzbuzz");
            break;
        default:
            console.log(I);
            break;
    }
}

//9. Print the first 10 Fibonacci numbers using a while loop: 

let num6 = 0;
let num7 = 1;
let sum2 = 0;

for (let i = 0; i < 10; i++) {
    sum2 = num6 + num7;
    num6 = num7;
    num7 = sum2;

    console.log(sum2);
}

//10. Using a for loop, print the square of numbers from 1 to 10 and categorize them using if: 

let square = 1;

for (let i = 0; i < 10; i++) {
    square = square * i;
    square++;

    if (square < 20) {
        console.log("small");
    } else if (square > 20 && square < 50) {
        console.log("medium");
    } else {
        console.log("big");
    }
}