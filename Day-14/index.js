
console.log("Hello");
var name = ""
name = "Awdiz"




// // Local Storage
localStorage.setItem("token", "myToken"); 
console.log(localStorage.getItem("token"), "getitem");

localStorage.removeItem("token");
localStorage.clear();




// // Session Storage
sessionStorage.setItem("token", "myToken");
console.log(sessionStorage.getItem("token"));

sessionStorage.removeItem("token");
sessionStorage.clear();





// Nested Loop
for(starting; ending; seqeunce){
    // code
    for(starting; ending; seqeunce){
        // code
    }
    // code
}



// Qs. Pattern
// $ $ $ $ $ $
// $ $ $ $ $ $
// $ $ $ $ $ $
// $ $ $ $ $ $
// $ $ $ $ $ $

for(let i = 1; i<= 5; i++){
    let res = " ";
    for(let j = 1; j <= 6; j++){
        if(j==6){
            res += "$";
        } else {
            res += "$ ";
        }
    }
    console.log(res);
}


// Qs. Pattern
// *
// * *
// * * *
// * * * *
// * * * * *

for (let i = 1; i <= 5; i++) {
    let res = " ";
    for (let j = 1; j <= i; j++) {
        res += "* "; 
    }
    console.log(res);
}

// 1 st iteration

// i = 1 ; i <= 5 ; 1 <=  5 true
// j = 1; j <= i ; 1 <= 1 true
// res += "* ";
// res = "* "
// j++ j = 2
// j <= i; ; 2 <= 1false
// res = "* "

// 2nd iteration

// i = 2 ; i <= 5 ; 2 <=  5 true
// j = 1; j <= i ; 1 <= 2 true
// res += "* ";
// res = "* "
// j++ j = 2
// j <= i; ; 2 <= 2 true
// res += "* ";
// res = "* * "
// j++ j = 3
// j <= i; 3 <= 2 false

// 3rd iteration

// i = 3 ; i <= 5 ; 3 <=  5 true
// j = 1; j <= i ; 1 <= 3 true
// res += "* ";
// res = "* "
// j++ j = 2
// j <= i; ; 2 <= 2 true
// res += "* ";
// res = "* * "
// j++ j = 3
// j <= i; 3 <= 3 true
// res += "* ";
// res = "* * * "

// 4th iteration

// i = 4 ; i <= 5 ; 4 <=  5 true
// j = 1; j <= i ; 1 <= 3 true
// res += "* ";
// res = "* "
// j++ j = 2
// j <= i; ; 2 <= 2 true
// res += "* ";
// res = "* * "
// j++ j = 3
// j <= i; 3 <= 3 true
// res += "* ";
// res = "* * * "
// j++ j = 4
// j <= i; 4 <= 4 true
// res += "* ";
// res = "* * * *"

// 5th iteration

// i = 5 ; i <= 5 ; 5 <=  5 true
// j = 1; j <= i ; 1 <= 3 true
// res += "* ";
// res = "* "
// j++ j = 2
// j <= i; ; 2 <= 2 true
// res += "* ";
// res = "* * "
// j++ j = 3
// j <= i; 3 <= 3 true
// res += "* ";
// res = "* * * "
// j++ j = 4
// j <= i; 4 <= 4 true
// res += "* ";
// res = "* * * *"
// j++ j = 5
// j <= i; 5 <= 5 true
// res += "* ";
// res = "* * * * *"



// Qs. Pattern 
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

for(let i = 1; i <= 5; i++){
    let res = " ";
    for(let j = 1; j <= i; j++){
        res += j + " ";
    }
    console.log(res);
}

// Qs. Print Table
// 2 * 1 = 2
// 2 * 2 = 4
// 2 * 3 = 6
// 2 * 4 = 8
// 2 * 5 = 10
// 2 * 6 = 12
// 2 * 7 = 14
// 2 * 8 = 16
// 2 * 9 = 18
// 2 * 10 = 20

let num = 2;
for(let i = 1; i <= 10; i++){
    console.log(`${num} * ${i} = ${num * i}`);
}

// Qs. Pattern 
// 2
// 2 4
// 2 4 6
// 2 4 6 8
// 2 4 6 8 10

for(let i = 1; i <= 5; i++){
    let res = " ";
    for(let j = 1; j <= i; j++){
        res += j * 2 + " ";
    }
    console.log(res);
}