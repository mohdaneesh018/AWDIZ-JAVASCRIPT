// Q.1
let num = -45;
if (num >= 0) {
    console.log("Number is Positive");
}
else if (num <= 0) {
    console.log("Number is Negative");
}
else {
    console.log("Number is Zero");
}

// Q.2
let even = 31;
if (even % 2 == 0) {
    console.log("Number is Even");
}
else if (even % 2 == 1) {
    console.log("Number is odd");
}
else {
    console.log("Number is not an even or odd");
}

// Q.3
let age = 26;
if (age < 13) {
    console.log("Child");
}
else if (age >= 13 && age < 20) {
    console.log("Teenager");
}
else if (age >= 20 && age < 60) {
    console.log("Adult");
}
else {
    console.log("Senior");
}

// Q.4
let stu = 87;
if (stu >= 90) {
    console.log("Grade is: A");
}
else if (stu >= 80 && stu <= 89) {
    console.log("Grade is: B");
}
else if (stu >= 70 && stu <= 79) {
    console.log("Grade is: C");
}
else if (stu >= 60 && stu <= 69) {
    console.log("Grade is: D");
}
else {
    console.log("Student will be Fail.");
}

// Q.5
let week = 4;
switch (week) {
    case (1): {
        console.log("Monday");
        break;
    }
    case (2): {
        console.log("Tuesday");
        break;
    }
    case (3): {
        console.log("Wednesday");
        break;
    }
    case (4): {
        console.log("Thursday");
        break;
    }
    case (5): {
        console.log("Friday");
        break;
    }
    case (6): {
        console.log("Saturday");
        break;
    }
    default: {
        console.log("Monday");
        break;
    }
}

// Q.6
let vowel = 3;
switch (vowel) {
    case 1:
        console.log("Vowel is 1: a")
        break;
    case 2:
        console.log("Vowel is 2: e")
        break;
    case 3:
        console.log("Vowel is 3: i")
        break;
    case 4:
        console.log("Vowel is 4: o")
        break;
    case 5:
        console.log("Vowel is 5: u")
        break;
    default:
        console.log("Consonent");
        break;
}

// Q.7
let year = 1996;
if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    console.log("It's a Leap Year");
}
else {
    console.log("It's not a Leap Year");
}

// Q.8
let a = 6;
let b = 9;
let operator = "/";
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
        console.log("Enter Valid Operator");
        break;
}

// Q.9
let ages = 17;
if (ages >= 18) {
    console.log("Eligible for Vote")
}
else if (ages <= 18) {
    console.log("Not eligible for vote");
}

// Q.10
const x = 3;
const y = 4;
const z = 5;
if (((x + y) > z) && ((x + z) > y) && ((y + z) > x)) {
    console.log("Three sides is a Triangle");
}
else {
    console.log("Three sides not a Triangle");
}

// Part-B
// Q.1
let i = 1;
for (i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// Q.2
let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}

// Q.3
let p = 1;
for (p = 1; p <= 10; p++) {
    console.log(5 * p);
}

// Q.4
let k = 1;
for (k = 1; k <= 100; k++) {
    if (k % 2 == 1) {
        console.log(k);
    }
}

// Q.5
let m = 1;
let count = 0
for (m = 1; m <= 100; m++) {
    if ((m % 3 == 0) && (m % 5 == 0)) {
        count++;
    }
}
console.log(count);

// Q.6
let fact = 1;
let nums = 4;
while (nums >= 1) {
    fact = fact * nums;
    nums--
}
console.log(fact);

// Q.7
let sum = 0;
for (i = 1; i <= 100; i++) {
    sum = sum + i;
}
console.log(sum);

// Q.8
// let r = 20;
// for (r = 1; r < 50; r++) {
//     switch (r) {
//         case (r % 3 == 0):
//             console.log("Fizz");
//             break;
//         case (r % 5 == 0):
//             console.log("Buzz");
//             break;
//         case ((r % 3 == 0) && (r % 5 == 0)):
//             console.log("FizzBuzz");
//         default:
//             console.log(r);
//             break;
//     }
// }

// Q.9
let num6 = 0;
let num7 = 1;
let sum2 = 0;
for (let i = 0; i < 10; i++) {
    sum2 = num6 + num7;
    num6 = num7;
    num7 = sum2;
    console.log(sum2);
}

// Q.10 
let square = 1;
for (let i = 0; i < 10; i++) {
    square = square * i;
    square++;

    if (square < 20) {
        console.log("Small");
    }
    else if (square > 20 && square < 50) {
        console.log("Medium");
    }
    else {
        console.log("big");
    }
}