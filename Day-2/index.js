// Operators
//  1 =    
//  2 ==    Only Data
//  3 ===   Both Data & Datatype

    let a = 90;
    let b = 90;

    console.log(a == b);    //true

    var c = 45;
    var d = 54;

    console.log(c == d);   //false

    let x = 908;
    let y = "908";

    console.log(x === y);   //false

    let k = "90";
    let l = "90";

    console.log(k === l);   //true

// And + Or Operator
    let A = 5;
    let B = 8;

    Or = (A > B || A < B || A >= B || A <= B)    //true
    console.log(Or);

    Or = (A > B || A >= B || B <= A || B < A)    //false
    console.log(Or);

    And = (A > B && A < B && A >= B && A <= B)   //false
    console.log(And);

    And = (A < B && A <= B && B >= A && B >= A)   //true
    console.log(And);