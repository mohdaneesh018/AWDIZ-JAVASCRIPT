//  1.	Find the second highest number in an array without sorting it. 
//  Input: [10, 5, 20, 8, 15] 
//  Output: 15 
let I = [10, 5, 20, 8, 15];
let max = 0;
let secMax = 0;
for (let i = 0; i < I.length; i++) {
    if (I[i] > max) {
        secMax = max;
        max = I[i]
    }
    else if (I[i] < max && I[i] > secMax) {
        secMax = I[i];
    }
}
console.log(secMax);

// 2.	Character frequency counter from a string.  Input: "apple" 
//  Output: { a: 1, p: 2, l: 1, e: 1 } 
let word = "apple";
let frequency = {};
let char = 0;
for (let i = 0; i < word.length; i++) {
    char = word[i];
    if (frequency[word[i]]) {
        frequency[char] += 1;
    }
    else {
        frequency[char] = 1;
    }
}
console.log(frequency);



// 3.	Reverse only words in an array of strings. 
//  Input: ["hello", "world"] 
//  Output: ["olleh", "dlrow"] 
let Arr = ["hello", "world"];
let reversearr = [];
for (let i = 0; i < Arr.length; i++) {
    let word = Arr[i];
    let reverse = "";
    for (let j = word.length - 1; j >= 0; j--) {
        reverse += word[j];
    }
    reversearr.push(reverse);
}
console.log(reversearr);




// 4.	Check even or odd using map. 
//  Input: [1, 2, 3, 4] 
//  Output: ["odd", "even", "odd", "even"] 
let i = [1, 2, 3, 4];
for (i = 1; i <= 4; i++) {
    if (i % 2 == 0) {
        console.log("Even");
    }
    else if (i % 2 == 1) {
        console.log("Odd");
    }
}



// 5.	Flatten a nested array (1 level deep). 
//  Input: [1, 2, [3, 4], 5] 
//  Output: [1, 2, 3, 4, 5] 
let x = [1, 2, [3, 4], 5];
let flatten = [];

for (let i = 0; i < x.length; i++) {
    let element = x[i];

    if (Array.isArray(element)) {
        for (let j = 0; j < element.length; j++) {
            flatten.push(element[j]);
        }
    } else {
        flatten.push(element);
    }
}

console.log(flatten);


// 6.  Print all prime numbers between 10 and 50. 
// Output: [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]  
// let arrNew = [];
for (i = 10; i <= 50; i++) {
    let isPrime = true;
    for (let k = 2; k < i; k++) {
        if (i % k == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(i);
    }
}




// 7.	Filter names that start with vowels. 
//  Input: ["Alice", "Bob", "Eve", "Uma", "Charlie"] 
//  Output: ["Alice", "Eve", "Uma"] 
let vowel = ["Alice", "Bob", "Eve", "Uma", "Charlie"];
let UppercaseVowel = ["A", "E", "I", "O", "U"];
let newVowel = vowel.filter(name => UppercaseVowel.includes(name[0].toUpperCase()));
console.log(newVowel);




// 8.	Rotate array by one to the right. 
//  Input: [1, 2, 3, 4] 
//  Output: [4, 1, 2, 3]
let digit = [1, 2, 3, 4];
console.log(digit.unshift(4));
console.log(digit);
console.log(digit.pop());
console.log(digit);




// 9.	Check if all array elements are greater than 10. 
//  Input: [12, 15, 22] 
//  Output: true 
let arr = [12, 15, 22];
let isCheck = arr.every(n => n > 10)
console.log(isCheck);




// 10.	Filter numbers divisible by 3 and 5. 
//  Input: [10, 15, 30, 20, 45] 
//  Output: [15, 30, 45] 
let j = [10, 15, 30, 20, 45];
let Output = j.filter(result => result % 3 == 0 && result % 5 == 0)
console.log(Output);




// 11.	Fibonacci sequence up to 15 terms. 
//  Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]  
let a = 1;
let b = 0;
let sum = 0;

for (let i = 1; i < 15; i++) {
    sum = a + b;
    a = b;
    b = sum;
    console.log(sum);
}



// 12.	Count occurrences of a value in array. 
//  Input: [1, 2, 1, 3, 1, 4], Element: 1 
//  Output: 3 
// let p = [1, 2, 1, 3, 1, 4];



// 13.	Sum of even numbers using reduce. 
//  Input: [1, 2, 3, 4, 5, 6] 
//  Output: 12 


// 14.	Check if string is palindrome. 
//  Input: "madam" 
//  Output: true  
let str = "madam";
let isPalindrome = true;
for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}

console.log(isPalindrome);




// 15.	Return grade based on marks using switch. 
//  Input: Marks: 85 
//  Output: B  
let result = 85;
switch (result) {
    case 90:
        console.log("Grade: A");
        break;
    case 85:
        console.log("Grade: B");
        break;
    case 80:
        console.log("Grade: C");
        break;
    case 75:
        console.log("Grade: D");
        break;
    default:
        console.log("Fail");
        break;
}




// 16. Test re-declaring a variable. 
// Input: 
// let x = 10; var x = 20; 
// 	Output: SyntaxError 




// 17.	Remove duplicates from array without Set. 
//  Input: [1, 2, 2, 3, 4, 1] 
//  Output: [1, 2, 3, 4] 
let s = [1, 2, 2, 3, 4, 1];
let uniqueArr = s.filter((item, index) => {
    return s.indexOf(item) === index;
});
console.log(uniqueArr);




// 18.	Slice first 3 elements of array. 
//  Input: [10, 20, 30, 40, 50] 
//  Output: [10, 20, 30] 
let element = [10, 20, 30, 40, 50];
let otp = element.slice(0, 3);
console.log(otp);



// 19.	Find intersection of two arrays. 
//  Input: [1, 2, 3] and [2, 3, 4] 
//  Output: [2, 3] 
let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4];
let Result = [];
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] == arr2[j]) {
            Result.push(arr1[i]);
        }
    }
}
console.log(Result);



// 20.	Reverse array using while loop (in-place). 
//  Input: [1, 2, 3, 4] 
//  Output: [4, 3, 2, 1] 
let t = [1, 2, 3, 4];
let u = 0
let v = t.length - 1;
while (u < v) {
    let newArr = t[u];
    t[u] = t[v];
    t[v] = newArr;
    u++;
    v--;
}
console.log(t);



// 21.	Check if all elements in an array are positive (use flag variable). 
//    Input: [1, 4, 6, 9] 
//    Output: true
// Use a flag set to true, and turn it false if a negative number is found in loop
let elements = [1, 4, 6, 9];
let isPositive = true;
for (let i = 0; i < elements.length; i++) {
    if (elements[i] <= 0) {
        isPositive = false;
        break;
    }
}
console.log(isPositive);



// 22.	Check if a string has both uppercase and lowercase letters. 
//    Input: "HelloWorld" 
//    Output: true 
// Use two flags: hasUpper and hasLower. 
let strg = "HelloWorld";
let hasUpper = false;
let hasLower = false;

for (let i = 0; i < strg.length; i++) {
    let char = strg[i];
    if (char === char.toUpperCase() && char !== char.toLowerCase()) {
        hasUpper = true;
    }
    if (char === char.toLowerCase() && char !== char.toUpperCase()) {
        hasLower = true;
    }
    if (hasUpper && hasLower) {
        break;
    }
}
console.log(hasUpper && hasLower);  // Output: true



// 23.	Determine if a number is prime using flag inside loop. 
//    Input: 13 
//    Output: true 
// Set flag to false if any divisor is found in loop. 
let input = 13;
let isPrime = true;
for (let i = 2; i < input; i++) {
    if (input % i == 0) {
        isPrime = false;
        break;
    }
}
console.log(isPrime);



// 24.	Check if an array is sorted in ascending order using flag. 
//    Input: [2, 5, 8, 9] 
//    Output: true 
// Set flag false if any element is greater than next. 
let arr0 = [2, 5, 8, 9];
let isSorted = true;
for (let i = 0; i < arr0.length - 1; i++) {
    if (arr0[i] > arr0[i + 1]) {
        isSorted = false;
        break;
    }
}
console.log(isSorted);



// 25.	Check if a word has repeating characters using flag.
//    Input: "coding"
//    Output: false 
// let string = "coding";
// let isRepeat = false;
// for(let i=0; i < string.length; i++){
//     if(string[i] == string[i+1]){
//         isRepeat = true;
//         break;
//     }
// }
// console.log(isRepeat);