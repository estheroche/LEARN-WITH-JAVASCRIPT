let js = "amazing";
if (js === "amazing") alert("javaScript is FUN!");
43 + 3 - 4;
/* console.log( 43 + 3 -4);
        console.log("esther");
        console.log(43);

        let firstName = "Esther";
        console.log(firstName);
        console.log(firstName);

        //variable name convention

        let esther_gold = "EG";
        let $function = 34;
        let dollar = 345;
        let PI =3.4;

        let myFirstJob = 'Programmer';
        let myCurrentJob ='teacher';

        let job1 = 'Programmer';
        let job2 = 'Teacher';
        console.log(myFirstJob);
        

     let javascriptIsFun = true;
       console.log(javascriptIsFun);
       

       //BOOLEN DATA TYPE
       
       console.log(typeof true);
       console.log(typeof javascriptIsFun);
       console.log(typeof 34);
       console.log(typeof 'esther');

       //dynamic typing, changing from a boolen to string to define a varible
// STRING DATA TYPE

       javascriptIsFun = 'YES!';
       console.log(javascriptIsFun);
       console.log(typeof javascriptIsFun);
       */

//BIGINT, UNDEFINE, SYMBOL ARE OTHER DATA TYPES

  /*  let year;
       console.log(year);
       console.log(typeof year);
       //DYNAMIC TYPING

       year = 1991;
       console.log(typeof year);

//OPERATORE AND TYPES
//MATHEMATICAL OPERATOR
const now = 2034;
const ageEsther = now - 2000;
const ageGold = now - 2001;
console.log(ageEsther, ageGold );

console.log(ageEsther * 2, ageEsther / 10, 2 ** 3);
    // 2 ** 3 means 2*2*2 
    
    // to concatinate two or more strings with plus sign 



const firstName = 'esther';
const lastName = 'oche';
console.log(firstName + ' ' + lastName);

//ASSIGMENT OPERATOR

let x = 10 + 5;// 15
x += 10; // x =15+10 = 25
x *= 4; // x = 15  * 4 = 100
x++; // x = x + 1
x--; // = 99
x--;
console.log(x);

//comparison operator ( it will be a BOOLEN result i.e TRUE OR FALSE)
console.log(ageEsther > ageGold); //<, >, >=, <=
console.log(ageEsther >= 18);

//i.e boolean TRUE = 18
const isFullAge = ageEsther >= 18;
console.log(now - 2000 > now - 2001);

let k, y; // declaring empty variable example
k = y = 25 -10 -5; // k= 10, y=10
console.log(k, y); 

// to calculate average age

const averageAge = (ageEsther + ageGold ) / 2
console.log(ageEsther, ageGold, averageAge);
*/

//COMPARISON OPERATOR
// ACCECEMENT TEST DATA 1

//const massMark = 78;
//const heightMark = 1.69;
//const massJohn = 92;
//const heightJohn = 1.95;


/*const massMark = 95;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;


const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

console.log(BMIMark, BMIJohn);
console.log(BMIMark > BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);


/// STRINGS AND TEMPLATE LITERALS

// USING STING TO CONCATINATE

/*const firstName = 'esther';
const lastName = 'oche';
const job = 'writer';
const birthYear = 2003;
const year = 2023;

const esther = "I'm " + firstName + ' ' + lastName + ', a ' + (year - birthYear) + ' years old ' + job + '!';

console.log(esther);


/// USING TEMPLATE LITERAL TO CONCATINATE (batick sign)
const estherNew = `I'm ${firstName} ${lastName}, a ${year - birthYear} year old ${job}!`;
console.log(estherNew);

//USING BACTICS FOR REGULA QUOTATIONS

console.log(`Esther is a fine girl.......`)
/// creating multy line

console.log('srting with \n\
multiple \n\
lines');

// withtemplate string

console.log(`string
multiple
lines`);
*/

//WE ARE TO WRITE A CODE TO CHECK WHETHER A PERSON IS
//ALLOW TO START TAKING A DRIVERS LICENCE OR NOT,
//WHCIH WILL PRINT THE AGE REQUIRE TO BE ALLOWED TO USE
//A LICENCE
//USING IF/ELSE STATEMENT CONTROLSTRUCTURE

/*const age = 15;
const isOldEnough = age >= 18;

if (age >= 18) {
  console.log(`Sarah is old enough to drive 🚗🚗🚗🚗🚗`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young, kindly wait for another ${yearsLeft} years`);
}

// ALSO
// OUR CONDITION OPERATOR COMES WITH <=, >= it returns true or false

const birthYear = 1999
let century;
if (birthYear <= 2000) {
    century = 20

} else {
century = 21
}
console.log(century);

if (markHigherBMI) {
console.log(`Mark's BMI (${BMIMark}), is hgher than John's (${BMIJohn})`)
} else {
            console.log(`"John's BMI ${BMIJohn} is higher than Mark's (${BMIMark})`)
}
*/

//TYPE CONVERSION(manually done) AND COERCION (hiddenly done)
// converting string to number
const inputYear = '1991';
console.log(Number(inputYear) + 18);

