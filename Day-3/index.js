// Conditional Statement 

// if
// else if
// else

// var age = 85;
var age = 79;

if(age <= 18){
    console.log("You have Eligible for LL.");
}

else if( (age <= 80) && (age > 18) ){
    console.log("You have Eligible for DL.");
}

else{
    console.log("You have not Eligible for DL.")
}

let userSelectplayer = "Dhoni"
switch (userSelectplayer){
    case ("Dhoni"):
        console.log("Yes Correct");
        break;
    case ("Kohli"):
        console.log("No found");
        break;
    default: 
        console.log("Rohit");
}