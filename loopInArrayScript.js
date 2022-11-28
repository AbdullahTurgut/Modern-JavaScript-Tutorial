

//loops in Array & objects

let cars =['Bmw','Masarati','Chevrolet','Ferrari'];

let people = [
    {firsName : 'Abdullah', lastName : 'Turgut'},
    {firsName : 'Asya', lastName : 'Turgut'},
    {firsName : 'Eray', lastName : 'Turgut'}
];


//Array
// for(let i =0;i<cars.length;i++){
//     console.log( i+1 + " = " +cars[i]);
// }

// Objects
// for(let i=0;i<people.length;i++){
//     console.log(people[i]);
//     console.log(people[i].firsName);
// }



//-----for-in
//Array

// for(let i in cars){
//     console.log(`index : ${i} -- value : ${cars[i]}`);
// }

// Objects

// for(let i in people){
//     console.log(`index : ${i} -- value : ${people[i].lastName}`);
// }



//----foreach
//Array
// cars.forEach(function(item){
//     //burda dizinin içerisindeki her elaman sırayla item içerisine kopyalanıyor.
//     console.log(item);
// }); 


// Objects
// people.forEach(function(item){
//     console.log(item);
//     console.log(item.firsName);
//     console.log(item.lastName);
// });



//----MAP objesi geriye bir dizi dönderir

// let val = people.map(function(item){
//     return item.firsName + " " + item.lastName;
// });

// console.log(val);//artık karşımıza bir dizi geldi


let numbers = [1,3,5,7,8,10];

let num = numbers.map(function(x){
    return x*x;
});

console.log(num);