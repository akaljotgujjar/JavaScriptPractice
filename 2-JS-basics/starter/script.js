
/*******************************
 Variable and Data Types
 */

// var firstName = 'Akaljot';
// console.log(firstName);

// var lastName = 'Gujjar';
// var age = 22;
// console.log(lastName, age);

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// job = 'teacher';
// console.log(job); 




/**********************************
 Variable Mutation and Type Coercion 
 */


// Type Coercion
// var firstName = 'Akaljot';
// var age = 22;
// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'teacher';
// isMarried = false;
// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried)

// // Variable Mutation

// age = 'Twenty Two';
// job = 'driver';
// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried)

// var lastName = prompt('What is his last name?');
// console.log(firstName + ' ' + lastName);

/*********************
 * Basic Operators 
 */

//  var year, yearAkaljot, yearMark;
//  ageAkaljot = 22;
//  ageMark = 33;
//  now = 2020;

//  // Math Operators 
//  yearAkaljot = now - 22;
//  yearMark = now - 33;

//  console.log(yearAkaljot);
//  console.log(now + 2);
//  console.log(now * 2);
//  console.log(now / 10);

//  // Logical operators 
// var akaljotOlder = ageAkaljot < ageMark;
// console.log(akaljotOlder);

// // typeof operator --> shows what each thing is, in other words, what type it is. 
// console.log(typeof akaljotOlder);
// console.log(typeof ageAkaljot);
// console.log(typeof 'Mark is older than John');

// var x;
// console.log(typeof x);

/*************************
 * Operator Precedence
 */

//  var now = 2020;
//  var yearAkaljot = 1998;
//  var fullAge = 21;

//  // Multiple operators
//  var isFullAge = now - yearAkaljot >= fullAge; //output: true
//  console.log(isFullAge);

//  // Grouping 
//  var ageAkaljot = now - yearAkaljot;
//  var ageMark = 35;
//  var average = (ageAkaljot + ageMark) / 2;
//  console.log(average);

//  // Multiple assignment 
//  var x, y;
//  x = y = (3 +5) * 4 -6; // 8 * 4 -6 // 32 -6 // 26
//  console.log(x, y);

// // More operators 
// x *= 2;
// console.log(x);
// x += 10;
// console.log(x);
// x++;
// console.log(x);

/*********************
 * Coding Challenge
 */

//  var massMark = 78; //kg
//  var heightMark = 1.69 // meters

//  var massJohn = 92;
//  var heightJohn = 1.95;

//  var BMIMark = massMark / (heightMark * heightMark);
//  var BMIJohn = massJohn / (heightJohn * heightJohn);

//  var markHigherBMI = BMIMark > BMIJohn;
//  console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);

/***********************
 * If else statements
 */

//  var firstName = 'Akaljot';
//  var civilStatus = 'single';

//  if (civilStatus === 'married') {
//      console.log(firstName + ' is married');
//  } else {
//      console.log(firstName + ' will hopefully marry soon :)');
//  }


//  var isMarried  = true;
//  if (civilStatus) {
//     console.log(firstName + ' is married');
// } else {
//     console.log(firstName + ' will hopefully marry soon :)');
// }

//  var massMark = 78; //kg
//  var heightMark = 1.69 // meters

//  var massJohn = 92;
//  var heightJohn = 1.95;

//  var BMIMark = massMark / (heightMark * heightMark);
//  var BMIJohn = massJohn / (heightJohn * heightJohn);

// //  var markHigherBMI = BMIMark > BMIJohn;
// //  console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);

// if (BMIMark > BMIJohn) {
//     console.log('Mark\'s BMI is higer than John\'s')
// } else {
//     console.log('John\'s BMI is higer than Mark\'s')
// }


/*******************
 * Boolean Logic
 */

//  var firstName = 'Akaljot';
//  var age = 20;

//  if (age < 13) {
//      console.log(firstName + ' is a boy');
//  } else if (age >= 13 && age < 20) { 
//     // Between 13 and 20 --> >= 13 AND age < 20
//     console.log(firstName + ' is a teenager')
//  } else if (age >= 20 && age < 30) {
//     console.log(firstName + ' is a young man')
//  } else {
//      console.log(firstName + ' is a man.')
//  }

/*************************
 * Ternary Operator and Switch Statements
 */


 // Ternary Operator 
//  var firstName = 'Akaljot';
//  var age = 16;

//  age >= 18 ? console.log(firstName + ' drinks beer')
//  : console.log(firstName + ' drinks juice');

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

// if (age >= 18) {
//     var drink = 'beer';
// } else {
//     var drink = 'juice';
// }

// Switch Statement

// var job = 'instructor';

// switch (job) {
//     case 'teacher': 
//     case 'instructor' :
//         console.log(firstName + ' teaches kids how to code');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives an uber in Lisbon');
//         break;
//     case 'designer':
//         console.log(firstName + ' designs beautiful websites');
//     break; 
//     default:
//         console.log(firstName + ' does something else');
// }

// var age = 32;
// switch (true) {
//     case age < 13 : 
//         console.log(firstName + ' is a boy');
//         break;
//     case age >= 13 && age < 20 :
//         console.log(firstName + ' is a teenager')
//         break;
//     case age >= 20 && age < 30 :
//         console.log(firstName + ' is a young man')
//         break;
//     default :
//     console.log(firstName + ' is a man.')
// }


/***************************
 * Truthy and Flasy vaules and equality operators 
 */

 // falsy values: undefined, null, 0, '', NaN
 // truthy values: NOT falsy values

//  var height;

//  height = 23;

//  if (height || height === 0) {
//      console.log('Variable is defined');
//  } else {
//     console.log('Variable is not defined');
//  }


//  // Equality operators 

//  if (height == '23') {
//      console.log('The == operator does type coercion!')
//  }


/**
 * Challenge Code 2
 */

//  var scoreJohn = (200 + 120 + 103) / 3;
//  var scoreMike = (116 + 94 + 123) / 3;
//  var scoreMary = (89 + 134 + 105) / 3;
//  console.log(scoreJohn, scoreMike); 

//  if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
//     console.log('John\'s team wins with ' + scoreJohn + ' points');
//  } else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
//     console.log('Mike\'s team wins with ' + scoreMike + ' points');
//  } else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
//     console.log('Mary\'s team wins with ' + scoreMary + ' points');
//  } else {
//     console.log('There is a draw');
//  }

//  if (scoreJohn > scoreMike) {
//      console.log('John\'s team wins with ' + scoreJohn + ' points');
//  } else if (scoreJohn < scoreMike) {
//     console.log('Mike\'s team wins with ' + scoreMike + ' points');
//  } else {
//      console.log('There is a draw');
//  }

/*************************
 * Functions 
 */

//  function calculateAge(birthYear) {
//      return 2018 - birthYear;
//  }

//  var ageJohn = calculateAge(1990);
//  var ageMike = calculateAge(1948);
//  var ageJane = calculateAge(1969);
//  console.log(ageJohn, ageMike, ageJane);


// function yearsUntilRetirement(year, firstName) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(firstName + ' retires in ' + retirement + ' years')
//     } else {
//         console.log(firstName + ' is already retired')
//     }
    
// } 

// yearsUntilRetirement(1990, 'John');
// yearsUntilRetirement(1948, 'Mike');
// yearsUntilRetirement(1969, 'Jane');

/**********************************
 * Funtion Statements and Expressions
 */

 // Function Declaration 
 // function whatDoYouDo(job, firstName) {}

 // Function Expression
//  var whatDoYouDo = function(job, firstName) {
//     switch(job) {
//         case 'teacher' :
//             return firstName + ' teaches kids how to code';
//         case 'driver' :
//             return firstName + ' drives a cab in Lisbon';
//         case 'desginer' :
//             return firstName + ' designs beautiful websites'
//         default: 
//             return firstName + ' does something else'
//     }
//  }

//  console.log(whatDoYouDo('teacher', 'John'));
//  console.log(whatDoYouDo('driver', 'Jane'));
//  console.log(whatDoYouDo('retire', 'Mike'));

/*******************
 * Arrays
 */

 // Initialize new array
//  var names = ['John', 'Mark', 'Jane'];
//  var years = new Array(1990, 1969, 1948);

//  console.log(names);
//  console.log(names.length);

//  // Mutated array data
//  names[1] = 'Ben';
//  names[names.length] = 'Mary';

//  console.log(names);

//  // Different data types
// var john = ['John', 'Smith', 1990, 'designer', false];

// john.push('blue');
// john.unshift('Mr.')

// console.log(john);

// john.pop()
// john.pop()
// john.shift()
// console.log(john);

// console.log(john.indexOf(1990));

// var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John is a designer';
// console.log(isDesigner);

/*************************
 * Coding Challenge 3 
 */

//  function tipCalculator(bill) {
//      var percentage;
//      if (bill < 50) {
//          percentage = .2;
//      } else if (bill >= 50 && bill < 200) {
//         percentage = .15;
//      } else {
//          percentage = .1;
//      }
//      return percentage * bill;
//  } 

//  var bills = [124, 48, 268];
//  var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];
//  var finalValues = [bills[0] + tips[0], 
//                     bills[1] + tips[1], 
//                     bills[2] + tips[2]];

//  console.log(tips, finalValues);

/***************************
 * Objects anf Properties 
 */


 // Object literal
//  var john = {
//      firstName: 'John',
//      lastName: 'Smith',
//      birthYear: 1990,
//      family: ['Jane', 'Mark', 'Bob', 'Emily'],
//      job: 'teacher',
//      isMarried: false
//  };

//  console.log(john.firstName);
//  console.log(john['lastName']);
//  var x = 'birthYear';
//  console.log(john[x]);


// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);

// // new Object syntax 
// var jane = new Object();
// jane.name = 'Jane';
// jane.birthYear = 1969;
// jane['lastName'] = 'Smith';
// console.log(jane);


/************************
 * Objects and Methods 
 */

//  var john = {
//      firstName: 'John',
//      lastName: 'Smith',
//      birthYear: 1992,
//      family: ['Jane', 'Mark', 'Bob', 'Emily'],
//      job: 'teacher',
//      isMarried: false,
//      calcAge: function() {
//          this.age = 2018 - this.birthYear;
//      }
//  }; 

//  john.calcAge();
//  console.log(john);

/************************
 * Coding Challenge 4 
 */

//  var john = {
//      fullName: 'John Smith',
//      mass: 92,
//      height: 1.95,
//      calcBMI: function() {
//          this.bmi = this.mass / (this.height * this.height);
//          return this.bmi
//      }
//  }

//  var mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// }

// if (john.calcBMI() > mark.calcBMI()) {
//     console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
// } else if (mark.bmi > john.bmi) {
//     console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
// } else {
//     console.log('They have the same BMI');
// }

/**
 * Loops and Iterations
 */

 // For Loop 

//  for (var i = 1; i <= 20; i++) {
//      console.log(i);
//  }

 // i = 0, 0 < 10 true, log i to console, i++ 
 // i = 1, 1 < 10 true, log i console i++ 
 // ....
 // i = 9, 9 < 10 true, log i console i++ 
 // i = 10, 10 < 10 FALSE, exit the loop!

//  var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

// for (var i = 0; i < john.length; i++) {
//     console.log(john[i]);
// }

// While Loop

// var i = 0;
// while (i < john.length) {
//     console.log(john[i]);
//     i++;
// }

// Continue and break statements 
// var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

//  for (var i = 0; i < john.length; i++) {
//      if (typeof john[i] !== 'string' ) continue;
//      console.log(john[i]);
//  }

// for (var i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string' ) break;
//     console.log(john[i]);
// }

// Looping Backwards
// for (var i = john.length -1; i >= 0; i--) {
//   console.log(john[i]);
// }

/***********************
 * Coding Challenge 5
 */

//  var john = {
//      fullName: 'John Smith',
//      bills: [124, 48, 286, 180, 42],
//      calcTips: function() {
//         this.tips = [];
//         this.finalValues = [];

//         for (var i = 0; i < this.bills.length; i++) {

//             // Determine percetnage based on tipping rules
//             var percentage;
//             var bill = this.bills[i];

//             if (bill < 50) {
//                 percentage = .2;
//             } else if (bill >= 50 && bill < 200) {
//                 percentage = .15;
//             } else {
//                 percentage = .1;
//             }

//             // Add results to the corresponding arrays
//             this.tips[i] = bill * percentage;
//             this.finalValues[i] = bill + bill * percentage;
            
//         }
//      }
//  }

// // john.calcTips();
// // console.log(john);

// var mark = {
//     fullName: 'Mark Miller',
//     bills: [77, 475, 110, 45],
//     calcTips: function() {
//        this.tips = [];
//        this.finalValues = [];

//        for (var i = 0; i < this.bills.length; i++) {

//            // Determine percetnage based on tipping rules
//            var percentage;
//            var bill = this.bills[i];

//            if (bill < 100) {
//                percentage = .2;
//            } else if (bill >= 100 && bill < 300) {
//                percentage = .1;
//            } else {
//                percentage = .25;
//            }

//            // Add results to the corresponding arrays
//            this.tips[i] = bill * percentage;
//            this.finalValues[i] = bill + bill * percentage;
           
//        }
//     }
// }

// function calcAverage(tips) {
//     var sum = 0;
//     for (var i = 0; i < tips.length; i++) {
//         sum = sum + tips[i];
//     }
//     return sum / tips.length;
// }

// // Do the calculations
// john.calcTips();
// mark.calcTips();


// john.average = calcAverage(john.tips); 
// mark.average = calcAverage(mark.tips);

// console.log(john, mark);

// if (john.average > mark.average) {
//     console.log(john.fullName + '\'s family pays higher tips, with an average of $ ' + john.average);
// } else if (mark.average > john.average) {
//     console.log(mark.fullName + '\'s family pays higher tips, with an average of $ ' + mark.average);
// } 


















