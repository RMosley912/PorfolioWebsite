//  AND , OR, NOT ... logical operators
//  Boolean values --> true or false

let trueValue = true;
let falseVal = false;

// let trueValue = 5>3;

// AND OPERATOR --> Output (true) --> Only if all the conditions are true, Else false
console.log( !(trueValue && falseVal) )

//  OR OPERATOR --> Output (false) --> Only if both the conditions are false, Else true
console.log(trueValue || falseVal);

// Conditional + Equality operators in JS ( >, <, =, >=, <=, ==, ===)

let age1 = 25;
let age2 = 30;

let age3 = 60;
let age4 = 55;

let op1 = age1 > age2;
let op2 = age3 > age4;


console.log(age1 > age2);
console.log(age3 > age4);

console.log(!op1 && op2);

// int, string, boolean, decimal, number, float...

let intValue = 35;
let strValue = "350"

//  ==, ===(stric comparision operator)

console.log(intValue == strValue);
console.log(intValue === strValue);

//  if-else statements -> Conditional statements in JS
// if( ... logic... ){ ..code to execute.. }
//  if statement will only excute the code inside {.. } iff the output of the logic  inside the (..) => true

if(intValue == strValue){
    console.log(" Int value is equals to the string value");
}else{
    console.log(" Int and string value are different!");
}