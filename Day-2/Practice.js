// Operators

// Only if both username and password are correct, print "Login Success".
let userName = "Aneesh";
let passWord = "1234";
if (userName || passWord) {
    console.log("Login Success");
}
else {
    console.log("Error will be found");
}

// If the customer is above 60 years OR has a membership, give a discount. 
let customer = 65;
let isMember = false;
if (customer >= 60 || isMember === true) {
    console.log("Discount Applicable");
}
else {
    console.log("Not an Discount");
}

// Allow the student to give the exam only if attendance is 75% or more AND fees are paid.
let attendance = 80;
let feesPaid = true;
if (attendance > 75 && feesPaid == true) {
    console.log("Exam are Eligible");
}
else {
    console.log("Exam are not Eligible");
}