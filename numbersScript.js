// // Strings 

// const firstName= 'Abdullah';
// const lastName = 'Turgut';
// const age = 26;

// let val ;
// val = firstName+ " " +lastName;
// val = 'Abdullah';
// val += ' Turgut';

// val = 'Benim adım ' + firstName + ' ve yaşım ' + age + "'dır.Ben Gebze'de yaşıyorum.";

// //String Concat

// val = firstName.concat(' ',lastName);

// //String Length
// //val = val.length;

// //String Uppercase-LowerCase
// val = val.toUpperCase();
// val = val.toLowerCase();

// //val = val.indexOf('h');

// //substring
// //val = val.substring(3,8);

// //slice
// //val = val.slice(5,11);

// //replace
// val = val.replace('abdullah' , 'lina');
// //trim başındaki ve sonundaki boşlukları yok eder
// val = val.trim();


// console.log(val);
// console.log(typeof val);

// ---------- TEMPLATE LITERALS---------------

const fullName = 'Zehra Turgut';
const city = 'Gebze';
const yearOfBirth = 1999;

let val;
val = 'My name is ' + fullName+
      '. I\'m ' +(2022-yearOfBirth)+ ' years old' + 
      ' and I live in ' + city;

//bu alttaki işaretler ctrl alt , ile
//ternary operator diye geçiyor
val = `My name is ${fullName} I'm ${(2022-yearOfBirth>=18)?'over 18':'under 18'} and I live in ${city}`;




console.log(val);
