// Do-while loop

// Print 1-10 Number by using do-while loop:

// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i <= 10);


// Q Print count of odd numbers from 100 - 1:

// let j = 100;
// let count = 0;
// do{
//     if(j%2==1) {
//         count++;
//     }
//     j--;
// }while(j >= 1);

// console.log(count, "count");





// Break and continue 
// 1. Break

// let i = 1;
// for(i=1; i<=10; i++){
//     console.log(i)
//     if(i > 4){
//         break;
//     }
// }


// Q 1 - 100 , print count of even numbers  , and if count goes above 20 then break loop:
// let i = 1;
// let count = 0;
// for (i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//         if (count >= 50) {
//             break;
//         }
//         count++;
//     }
// }
// console.log(count);

// 2. Continue
// let i=1;
// for(i=1; i<=8; i++){
//     if((i==3) || (i==5)){
//         continue;
//     }
//     console.log(i);
// }





// Array
// let i =[2, 4, 6, 8, 2, 4, 6, 8, 82, 4, 6, 8, 2, 4, 6, 8, 2];
// console.log(i, "Numbers");
// console.log(i[0], "Number[0]");
// console.log(i[1], "Number[1]");
// console.log(i[2], "Number[2]");
// console.log(i[3], "Number[3]");
// console.log(i.length, "Length of Array");
// console.log(i.length -1);
// console.log( (i.length) / 2);
// console.log(Math.round(8.5));
// console.log(Math.floor(8.5));
// console.log(Math.ceil(8.5));





// let i = ["a", "b", "c", "d"];
// i.push("g");
// i.push("j")
// i.pop();
// i.pop();
// console.log(i);



// let i = ["v", "w", "x", "y", "z"];
// i.shift();
// i.shift();
// i.unshift("s");
// i.unshift(4);
// // console.log(i);


// let i = [2, 5, 8];
// console.log(i[0]);
// console.log(i.at(2));

// let i = [2, 4, 6];
// let j = [4, 5, 8];
// console.log(i.concat(j));
// console.log(j.concat(i));

// const array1 = [5, 12, 8, 130, 44];
// console.log(array1.indexOf(12)); 

// var fruit = ["Apple", "Banana", "Mango", "Grapes", "Pea", "Papaya"];
// const newArr = fruit.slice(2); 
// var newArr = fruit.slice(1, 4);
// var newArr = fruit.slice(-4);
// var newArr = fruit.slice(1, -2);
// console.log(newArr);

// const months = ["Jan", "March", "April", "June"];
// months.splice(1, 0, "May");
// months.splice(1, 1, "May");
// months.splice(1, 2, "May");
// months.splice(2, 1, "May");
// console.log(months);

// var i = ["z", "x", "a", "g"];
// i.sort();
// console.log(i);

// let i = [22, 11, 45, 21, 2000, 4567, 1234];
// i.sort();
// console.log(i);

// var i = [2, 4, 7];
// var reverseI = i.toReversed();
// console.log(reverseI);

// let i = [1, 2, "abcd"];
// // let str = i.toString();
// console.log(i.toString());

// const array1 = [1, 2, "a", "1a"];

// console.log(array1.toString());