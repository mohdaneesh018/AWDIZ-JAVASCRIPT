// Ternary Operator
// if else
//     if (condition) {
//         statement true;
//     }
//     else {
//         statement false;
//     }


// let age = 19;
// if(age >= 18){
//     console.log("You can vote.");
// } else {
//     console.log("You can't vote.");
// }


// syntax 
// condition ? statement true : statement false

let age = 100;
const canVote = age >= 18 ? "Yes" : "No";
console.log(canVote, "canVote");

const strictCheckVote = age >= 18 ? (age >= 80 ? "Yes" : "Over aged") : "No";
console.log(strictCheckVote, "strictCheckVote");






// 2. Template Literals
`text ${userName} text`
var name = "Mohd";
var userName = "Aneesh";
var calculation = 10 - 2;
console.log("Hello name, Good morning," + userName);

let greetingMessage = `Hello ${name} ${userName} ${calculation}, How are you?`;
console.log(greetingMessage, "GreetingMessage");






// 3. De-structuring
let num = [23, 24, 35];
console.log(num[0]);

const [firstValue, b, c] = num;
console.log(firstValue, b, c, "a, b, c");

// Q.2
var userData = { names: "AWDIZ", aged: 10, surNames: "Institute" };
console.log(userData.surNames);

const { names, aged, surNames } = userData;
console.log(names, aged, surNames, "names", "aged");






// 4. CallBack Function
function greet(name, callback) {
    console.log("Welcome", name);
    callback();
}
function afterGreeting() {
    console.log("Please accept privacy policy.");
}
greet("Aneesh", afterGreeting);

// Q.2
let userAge = 20;
function canVotes(age, yesFunction, noFunction) {
    if (age >= 18) {
        yesFunction();
    }
    else {
        noFunction();
    }
}

const successMessage = () => {
    console.log("You can Vote.");
};

function failorMeesge() {
    console.log("You can't Vote.");
}

canVotes(userAge, successMessage, failorMeesge);






// 5. Promise
// Resolve, reject
// then catch

let marks = 85;
const canPass = (marks) => {
    return new Promise( (resolve, reject)  => {
    //   new - new object create
    //   constructor function - class  -> Promise((resolve, reject) => {------}
        if(marks <= 90){
            resolve ("Result is Pass.");
        } else {
            reject("Result is Fail.");
        }
    });
}

canPass(marks)
    .then( (Response) => {
        console.log(Response, "response")
    })
    .catch( (error) => {
        console.log(error, "error");
    });