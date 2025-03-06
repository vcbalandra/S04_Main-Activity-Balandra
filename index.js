// What are conditional statements?
// Condition statements allow us to control the flow of our program. It allows us to run a statement/instruction if a condition is met or run another separate instruction if otherwise.

// if, else if and else statement

let numA = 1;

// if statement - executes a statement if a specified condition is true

if (numA < 0) {
    console.log('Hello');
} else {
    console.log('Hello again.')
}

/*
    syntax : if(condition){
    statement;
    }
*/

// the result of the expression added in the if's condition must result to true, else, the statement inside the if() will not run

//else if clause 
/*
    - executes a statement if previous conditions are false and if the specified condition is true
    - the 'else-if' clause is optional and can be added to capture additional conditions to change the flow of a program
*/

let city = "Tokyo"

if (city === 'New York'){
    console.log('Welcome to NY!');
} else if (city === "New york"){
    console.log('Welcome to New York.')
} else {
    console.log('Again');
}

// we weere able to run the else if() statement after we evaluated that the if condition was failed 

// if the if()condition was passed and run, we will no longer evaluate to else if() and end the process there

// else statement
/*
    - executes a statement if all other conditions are false
    - the 'else' statement is optional and can be added to capture any result to change the flow of the program

    - the 'return' statement can be utilized with conditional statements in combination with functions to change values to be used for other features of our application
*/

// let message = 'No message.'

// function determineTyphoonIntensity(windspeed){
//     if (windspeed < 30){
//         return 'Not a Typhoon yet.'
//     } else if (windspeed <= 61){
//         return 'Tropical depression detected.'
//     } else if (windspeed >= 62 && windspeed <= 88) {
//         return 'Tropical storm detected.'
//     } else if (windspeed >= 89 || windspeed <= 117){
//         return 'Severe tropical storm detected.'
//     } else {
//         return 'Typhoon detected.'
//     }
// }

// returns the string to the variable 'message' that invoked it
// message = determineTyphoonIntensity(85);
// console.log(message);

// // console.warn() is a good way to print warnings in our console that could help us developer act on a certain output within our code
// if (message == 'Tropical storm detected.'){
//     console.warn(message);
// }

// [Section] Truthy and Falsy
/*
    - In JS, a 'truthy' value is a value that is considered true when encountered in a Boolean context.
    - values are considered true unless defined otherwise
    - falsy values/ exceptions for truthy 
    
    1. false 
    2. 0
    3. -0
    4. ""
    5. null
    6. undefined
    7. NaN
*/

// if (true){
//     console.log('truthy');
// }

// if (1){
//     console.log('Truthy');
// }

// if (undefined){
//     console.log('Falsy')
// }

// if (0){
//     console.log('Falsy')
// }

// if ([]){
//     console.log('Truthy');
// }

// if (""){
//     console.log('Falsy')
// }

// Conditional (Ternary) Operator
/*
    - The conditional (Ternary) Operator takes in three operands:
    1. condition
    2. expression to execute if the condition is truthy
    3. expression to execute if the condition is falsy
    - can be used as an alternative to an 'if else' statement 
    - ternary operators have and implicit 'return' statement meaning without 'return' keyword. the resulting expressions can be stored in a variable.

    syntax:
    (espression) ? ifTrue : ifFalse;
*/
// Single statement execution
// let ternaryResult = (1 < 18) ? true : false;
// console.log('Result of Ternary Operator: ' + ternaryResult);

// if (num < 0){
//     console.log('Hello');
// } else {
//     console.log('Hello again.')
// }
let number = 1
 number < 0 ? console.log('Hello') : console.log('Hello again');

 
// let message = 'No message.'

// function determineTyphoonIntensity(windspeed){
//     if (windspeed < 30){
//         return 'Not a Typhoon yet.'
//     } else if (windspeed <= 61){
//         return 'Tropical depression detected.'
//     } else if (windspeed >= 62 && windspeed <= 88) {
//         return 'Tropical storm detected.'
//     } else if (windspeed >= 89 || windspeed <= 117){
//         return 'Severe tropical storm detected.'
//     } else {
//         return 'Typhoon detected.'
//     }
// }

// let message = 'No message';
// function determineTyphoonIntensity(windspeed) {
//     return windspeed < 30 ? 'Not a Typhoon yet.' :
//            windspeed <= 61 ? 'Tropical depression detected.' :
//            windspeed <= 88 ? 'Tropical storm detected.' :
//            windspeed <= 117 ? 'Severe tropical storm detected.' :
//            'Typhoon detected.';
// }

// message = determineTyphoonIntensity(85);
// console.log(message);
// windspeed = 100;
// let message1 = windspeed < 30 ? 'Not a Typhoon yet.' :
// windspeed <= 61 ? 'Tropical depression detected.' :
// windspeed <= 88 ? 'Tropical storm detected.' :
// windspeed <= 117 ? 'Severe tropical storm detected.' :
// 'Typhoon detected.';

// console.log(message1);

// Try-Catch Finally Statement
/*
    - 'Try catch' statement are commonly used for error handling
    - there are instances when the applications returns an error/warning that is not neccessarily and error in the contrast of our code
    - these errors are the result of an attempt of the programming language in help developers in creating efficient code
    - the 'finally' block is used to specify a response/action that is used to handle/resolve errors
*/

// function showIntensityAlert(windspeed){
//     try{
//         alertat(determineTyphoonIntensity(windspeed));
//         // error/err are commonly used variable names used by the developers for storing errors
//     } catch (error){
//         // typeof operator is used to check the data type of a value/expression and returns a string value of what the data type is
//         console.log(typeof error);
//         // catch errors within try statement
//         // in this case the error is an unknown function "alertat" which does not exist in JavaScript
//         // 'error.message' is used to access the information relating to an error object
//         console.warn(error.message);
//     } finally {
//         // continue execution of code regardless of success and failure of code execution in the 'try' block to handle/resolve errors
//         alert('Intensity updates will show new alert.')
//     }
// };
// showIntensityAlert(56);