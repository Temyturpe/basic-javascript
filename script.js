'use strict';
// const job = 'Frontend';
// if(job === 'Accountant') {
//     alert('victor is a frontend engineer!')
// }else {
//     alert('victor is not a tech bro')
// }
// console.log(job);
// console.log(1+34+55);

// values and variables
// value
// console.log('Victor');
// console.log(20);
// console.log(true);
// variables
// let myName = 'Victor';
// let myAge = 18;
// let isBasedInLagos =  false;

// console.log(myName, myAge, isBasedInLagos);
// console.log(myName);
// console.log(myName);
// console.log(myName);
// console.log(myName);

// data types
// strings
// let myName = 'Richard';
// let myJob = "Frontend Engineer";
// console.log(typeof myJob);
// numbers
// let myAge = 20;
// let birthYear = 2003;
// console.log(birthYear);
// boolean
// let isAMan = true;
// console.log(isAMan);
// undefine
// let completedAssignment 
// console.log(completedAssignment);

// let, const and var
// var
// var myName = 'Temitope';
// console.log(myName);
// let
// let myJob = 'frontend engineer';
// myJob = 'designer';
// console.log(myJob);
// myName = 'Kayode';
// console.log(myName);
// const
// const myHubby = 'baking';
// console.log(myHubby);

// basic operation
// const currentYear = 2023;
// const ayoadeBirthYear = 1997;
// const ayodecurrentAge = currentYear - ayoadeBirthYear;
// const kayodeBirthYear = 2002;
// const kayodecurrentAge = currentYear - kayodeBirthYear;

// console.log(ayodecurrentAge > kayodecurrentAge);
// console.log(ayodecurrentAge , kayodecurrentAge);

// challenge one
// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;
// const markBMI = markWeight / markHeight ** 2;
// const johnBMI = johnWeight / johnHeight ** 2;

// console.log(markBMI, johnBMI);
// const markHeigherBMI = markBMI > johnBMI;
// console.log(markHeigherBMI);

// string template literals
// const firstName = 'Victor';
// const job = 'Frontend Engineer';
// const myLocation = 'warri';
// const mobile = 9075648376;
// const currentYear = 2023;
// const myBirthYear = 1990;

// const victor = "Hello there! My name is " + firstName + ". I'm a " + job + " I'm based in " + myLocation + ". I'm a " + (currentYear - myBirthYear) + "years old male. " + "You can reach me on " + mobile + ".";

// console.log(victor);

// const victor2 = `Hello there! My name is ${firstName}. I'm a ${job}. I'm based in ${myLocation}. I'm a ${currentYear - myBirthYear}years old male. You can reach me on ${mobile}.`
// console.log(victor2);

// if/else statement
// challenge one
// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 56;
// const johnHeight = 1.29;
// const markBMI = markWeight / markHeight ** 2;
// const johnBMI = johnWeight / johnHeight ** 2;

// console.log(markBMI, johnBMI);
// const markHeigherBMI = markBMI > johnBMI;
// console.log(markHeigherBMI);

// if(condition){
//    code you want to execute if true
// }else{
//    code you want to run if false 
// }
// if(markBMI > johnBMI){
//     console.log(`Mark has a higher BMI of ${markBMI}`);
// }else if(markBMI === johnBMI){
//   console.log(`Mark and John have equal BMI`);
// }else{
//     console.log(`John has a higher BMI of ${johnBMI}`);
// }


// challenge solution
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:

// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 😉
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy

// Test data:

// Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// const dolpAvgScore = (96 + 108 +  89) / 3;
// const KoaAvgScore = (96 + 108 + 89) / 3;
// console.log( dolpAvgScore, KoaAvgScore);

// if(dolpAvgScore > KoaAvgScore){
//     console.log("team dolphin wins");
// }else if(dolpAvgScore === KoaAvgScore){
//     console.log("both team draws");
// }else{
//     console.log('team koala wins');
// }

// bonus part
// if(dolpAvgScore > KoaAvgScore && dolpAvgScore >= 100 ){
//     console.log("team dolphin wins");
// }else if (KoaAvgScore > dolpAvgScore && KoaAvgScore >= 100 ){
//     console.log("team koala wins");
// }else if( dolpAvgScore === KoaAvgScore && dolpAvgScore >= 100 && KoaAvgScore >= 100){
//     console.log("it was a draw");
// }else{
//     console.log('no winner');
// }

// type conversion and type coercion
// type conversion(manual)
// const currentYear = '2023';
// console.log(typeof currentYear, currentYear);
// console.log(String(currentYear));
// console.log(Number(currentYear));


// type coercion
// console.log("i'm a" + 20 + "years old student");
// console.log('19' - 23 + 2);

// falsy values are: zero (0), empty string ("" or ''), undefined, null and NaN(NOT A NUMBER)

// console.log(23, Boolean(23));
// console.log(0, Boolean(0));

// const myname = 'Temitope';
// console.log(myname, Boolean(myname));

// let accountBalance;
// if(accountBalance){
//     console.log('ODOGWU!!');
// }else{
//     console.log("HUSTLE OO!");
// }

// const energy = true;
// const gas = false;

// if(energy && gas){
//  console.log('cook noodles');
// }else if(energy && !gas){
//     console.log('warm spag');
// }else{
//     console.log('take cornflakes');
// }

// equality operator
// "=" for value assignment 
// "==" is a loose operator
// "===" is a strict operator

//loose operator "=="
// const age = String(22);
// if(age === 22){
//     console.log("welcome to adulthood");
// }else{
//     console.log('you are very young');
// }

// boolean logical operator
// and (&&), or (||) , not (!)
// const anAdult = true;
// const locationLagos = true;
// const completeNysc = false;

// if(kayAge > 18 && locationLagos && completeNysc){
//     console.log("congratulations, you got the job!🎉");
// }else if(kayAge > 18 || locationLagos || completeNysc){
//     console.log('You were so close!');
// }else{
//     console.log('You didnt meet any of the requirements!');
// }
// if(anAdult && locationLagos && !completeNysc){
//     console.log("congratulations, you got the job!🎉");
// }else{
//     console.log('You didnt meet any of the requirements!');   
// 
// switch statement
const tasks = 'morning';

// if(tasks === 'morning'){
//     console.log('pray, meditate and check email');
// }else if(tasks === 'afternoon'){
//     console.log('code, meetings, lunch, prepare for class')
// }else if(tasks === 'evening'){
//     console.log('classes, meeting, code, write')
// }else{console.log('code, movies, eat, video games')}

// switch(tasks) {
//     case 'morning':
//         console.log('pray, meditate and check email') ;
//     ;
//     break;
//     case 'afternoon':
//         console.log('code, meetings, lunch, prepare for class');
//     ;
//     break;
//     case 'evening': 
//        console.log('classes, meeting, code, write');
//     ;
//     break;
//     default:
//         console.log('code, movies, eat, video games');
//     ;
// }
//  expressions and statement
// console.log("temitope");
// const myname = 'temtiope';
// console.log(myname);

// const logic = true && false && true;
// console.log(logic);

// const about = if(logic){
//     console.log(2 + 3);
// }else{
//     console.log('not valid');
// };

// if(logic){
//     console.log(2 + 3);
// }else{
//     console.log('not valid');
// }

// statemnets cant be inside an expression because they cant produce a value. however, an expression can be inside a statement

// console.log(`my name is ${myname}. im a ${2023 - 1992} and ${
//     if(logic){
//         console.log(2 + 3);
//     }else{
//         console.log('not valid');
//     }}`)

// conditional operator / ternary operator
// const age = 13;

// if(age >= 18){
//     console.log('old enough to take alcohol');
// } else{
//     console.log('you are too young')
// }

// const drink = age >= 18 ?  'red wine':  'fruit juice';
// console.log(drink);

// let serve;
// if(age >= 18){
//     serve = 'red wine';
// }else {
//     serve = 'fruit juice';
// }

//  console.log(serve)

//  console.log(`i am old enough to take ${age >= 18 ?  'red wine':  'fruit juice'}`)

// functions
// function declaration
function myfunc() {
    console.log('my function runs');
}

// calling or running or invoking the function

myfunc();
myfunc();


// everything about functions
// function keyword, function name,open parenthesis, in the parentesis you put the parameters, open a curly 
// bracket to add your code(code block),  write code in code block, return the code you want. close curly 
// bracket. call function by calling the function name and open parenthesis and put the argument(the values 
// of the parameters). save the function name along with the argument in a variable. now voew the variable 
// in the console.
function fruitProcessor(apple, oranges){
    const fruitJuice = `my processor just made a juice containing ${apple} apples and ${oranges} oranges `;

    return fruitJuice;
}

const juice = fruitProcessor(4, 8);
console.log(juice);
const thickjuice = fruitProcessor(8, 20);
console.log(thickjuice);

// function declaration
function currentAge(birthYear){
    const currentYear = 2023;
    const userAge = currentYear - birthYear;
    return userAge;
}
const age1 = currentAge(1998);
console.log(age1);

// function expression
const currentAge2 = function (birthYear){
    const currentYear = 2023;
    const userAge = currentYear - birthYear;
    return userAge;
}
const age2 = currentAge2(2002);
console.log(age2)

// console.log(myname);
// const myname = 'temitope';






