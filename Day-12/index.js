// This
// Constructor function
// New
// Class 
// Try Catch Finally
// Async Await
// Ls Ss Cookies






// 1. This Keyword

function data(user1, user2) {
    console.log(user1, user2);
}
data("Virat", "Rohit");







// 2. Constructor
const data = {
    name: "Awdiz",
    surname: "Institute",
    greeting: function () {
        console.log(data.name, "data.name");
        console.log("name", this.name);
        console.log("surname", this.surname);
    },
}

// console.log(data.greeting, "data.greeting");
console.log(data.greeting(), "data.greeting()");








// 3. New
function admission(name, surname, number, email) {
    // console.log(name, surname, number, email);
    this.name = name;
    this.surname = surname;
    this.number = number;
    this.email = email;
}

const user1 = new admission("Virat", "Kohli", 12345, "virat@gmail.com");
console.log(user1.name);
console.log(user1.surname);
console.log(user1.number);
console.log(user1.email);

const user2 = new admission("MS", "Dhoni", 67890, "msd@gmail.com");
console.log(user2.name);
console.log(user2.surname);
console.log(user2.number);
console.log(user2.email);







// 4. Class
class Teacher {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }
    teach() {
        console.log(this.name, "teaches", this.subject);
    }
}

const teacher1 = new Teacher("Imran", "Math");
console.log(teacher1, "teacher1");
console.log(teacher1.name, "name");
console.log(teacher1.subject, "subject");
console.log(teacher1.teach(), "teach");

const teacher2 = new Teacher("Zahid", "Science");
console.log(teacher2, "teacher");
console.log(teacher2.name, "name");
console.log(teacher2.subject, "subject");
console.log(teacher2.teach(), "teach");







// 5. Try, Catch, Finally
try {
    let num = 10;
    let result = num / 2;
    // const num = 6;
    // num = 7;
    console.log(result, "result");
} catch (error) {
    console.log("error in catch", error);
} finally {
    console.log("Finally loading will stop");
}









// 6. Async Await
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Products");
            // reject("Products");
        }, 5000);
    });
}

// function data() {
//     try {
//         const output = fetchData();  // waiting for 5 sec
//         console.log(output, "output");
//     } catch (error) {
//         console.log(error, "error");
//     }
// }

async function data() {
    try {
        const output = await fetchData();  // waiting for 5 sec
        console.log(output, "output");
    } catch (error) {
        console.log(error, "error");
    }
}
data();