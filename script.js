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
// function myfunc() {
//     console.log('my function runs');
// }

// calling or running or invoking the function

// myfunc();
// myfunc();


// everything about functions
// function keyword, function name,open parenthesis, in the parentesis you put the parameters, open a curly 
// bracket to add your code(code block),  write code in code block, return the code you want. close curly 
// bracket. call function by calling the function name and open parenthesis and put the argument(the values 
// of the parameters). save the function name along with the argument in a variable. now voew the variable 
// in the console.
// function fruitProcessor(apple, oranges){
//     const fruitJuice = `my processor just made a juice containing ${apple} apples and ${oranges} oranges `;

//     return fruitJuice;
// }

// const juice = fruitProcessor(4, 8);
// console.log(juice);
// const thickjuice = fruitProcessor(8, 20);
// console.log(thickjuice);

// function declaration
// function currentAge(birthYear){
//     const currentYear = 2023;
//     const userAge = currentYear - birthYear;
//     return userAge;
// }
// const age1 = currentAge(1998);
// console.log(age1);

// function expression
// const currentAge2 = function (birthYear){
//     const currentYear = 2023;
//     const userAge = currentYear - birthYear;
//     return userAge;
// }
// const age2 = currentAge2(2002);
// console.log(age2);

// console.log(myname);
// const myname = 'temitope';

// arrow function
// const currentAge = birthYear => 2023 - birthYear;
// const age = currentAge(1998);

// console.log(age);

// const yearUntilRetirement = (birthYear, firstName) => {
//     const age2 = 2023 - birthYear;
//     const retirement = 65 - age2

//     return `${firstName} has ${retirement} years to retire.`;
// }
// console.log(yearUntilRetirement(1980, 'Richard'));
// console.log(yearUntilRetirement(1995, 'Victor'));

// functions calling functions
// juicemaker that has a fruitcutter 

// const fruitcutter = fruit => {
//     return fruit * 4;
// }
// fruitcutter(3)

// const juicemaker = (apple, orange, firstName) => {
//    const applepieces = fruitcutter(apple);
//    const orangePieces = fruitcutter(orange);

//    const Juice = `${firstName} made a juice with ${applepieces} pieces of apples and ${orangePieces} pieces of orange`;
//  return Juice;
// }

// function declaration
// function fruitcutter(fruit){
//     return fruit * 4;
// }

// console.log(juicemaker(4, 2, 'Victor'));
// console.log(juicemaker(10, 12, 'Richard'));
// console.log(juicemaker(9, 3, 'Kayode'));

// const yearUntilRetirement = (birthYear, firstName) => {
//     const age2 = 2023 - birthYear;
//     const retirement = 65 - age2

//     return `${firstName} has ${retirement} years to retire.`;
// }
// console.log(yearUntilRetirement(1980, 'Richard'));
// console.log(yearUntilRetirement(1995, 'Victor'));

// const calcAge = birthYear => 2023 - birthYear;

// const yearUntilRetirement = function (birthYear, firstName){
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

  
//   if(retirement > 0){
//     console.log(`${firstName} has ${retirement}years to retire, He is ${age}years old`)
//     return retirement;
//   }else{
//     console.log(`${firstName} has retired 🙌, He is ${age}years old`)
//     return retirement;
//   }

// }
// console.log(yearUntilRetirement(1944, 'Richard'));


// data structuring
// arrays

// const student1 = 'Victor';
// const student2 = 'Richard';
// const student3 = 'Kayode';

// console.log(student1, student2, student3);

// const students = ['Victor', 'Richard', 'Kayode', 1998, 1989, true, false ];
// console.log(students);
// console.log(students[2]);
// console.log(students.length);
// console.log(students[students.length - 1]);


// const students2 = new Array('Victor', 'Richard', 'Kayode');
// console.log(students2);

// PUSH for adding values at the end of an array
// const student2 = students.push('ayode');
// console.log(student2);

// unshift for adding values at the beginning
// const student3 = students.unshift("Temitope");
// console.log(students);

// pop used to remove the last value
// const student4 = students.pop();
// console.log(students);

// shift used to remove the first element
// const student5 = students.shift();
// console.log(students);

// indexOf is used to check the position of a value in an array
// console.log(students.indexOf('Richard'));


// includes is used to check if a value is in an array. it returns a boolean value.
// console.log(students.includes('Temitope'));




// if(students.includes('Temitope')){
//     console.log('you have a student called victor')
// } else{
//     console.log('this person is not your student')
// }


// bills (richard: 150, victor: 100, kayode: 220, ayode: 250 )
// calculate tip( using rule: anything between 50 and 200 pays 15% tip, anything between 200 and 400 pays 20% tip)
// calculate total bill

// const tipCalc = function(bill){
//     return bill >= 50 && bill <= 200 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [150, 100, 220, 250];
// const tips = [tipCalc(bills[0]), tipCalc(bills[1]), tipCalc(bills[2]), tipCalc(bills[3])];
// console.log(tips);
// const bills2 = bills.push(300);
// console.log(bills);
// const tips2 = [tipCalc(bills[0]), tipCalc(bills[1]), tipCalc(bills[2]), tipCalc(bills[3]), tipCalc(bills[4])];
// console.log(tips2);
// const tips2 = tips.push(tipCalc(bills[4]));
// console.log(tips);

// const totalBills = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2], bills[3] + tips[3], bills[4] + tips[4] ];
// console.log(totalBills);

// console.log(bills[0]);


// tipCalc(150)


// const Ktip = tipCalc(220);
// console.log(Ktip);
// const Vtip = tipCalc(100);
// console.log(Vtip);
// const Rtip = tipCalc(150);
// console.log(Rtip);
// const Atip = tipCalc(250);
// console.log(Atip);

// objects
const Richard = [
    'Richard',
    'Gboyega',
    2023 - 1998,
    'Frontend developer',
    ['Victor', 'Kayode', 'Ayoade']
];
const friend = Richard[4];
console.log(friend[1]);
console.log(Richard);

const Richard2 = {
    first: 'Richard',
    last: 'Gboyega',
    age: 2023 - 1998,
    job: 'Frontend developer',
    friends: ['Victor', 'Kayode', 'Ayoade']
}
const nameKey = 'Name';

console.log(Richard2)
// dot notation
console.log(Richard2.friends[1]);

// bracket notation
// console.log(Richard2['lastName']);
// console.log(Richard2.lastName);


console.log(Richard2['first' + nameKey]);
console.log(Richard2['last' + nameKey]);










