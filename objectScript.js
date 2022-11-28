//Object Literals
let val;

let person ={
    firsName : 'Abdullah',
    lastName : 'Turgut',
    age : 26,
    hobbies : ['music','game'],
    address:{
        city : 'Kocaeli',
        district : 'Gebze'
    },
    //obje içinde bir çok şey tanımlayabiriz, array,obje
    //obje içinde obje sanki objekşın :))

    getBirthYear : function(){
        return 2022 - this.age;
    }//Hangi nesnenin içinde bir this dersek o nesnenin referansını almış oluruz.
};
val = person;
val = person.firsName;//1.yol
val = person.lastName;
val = person['firsName'];//2.yol
val = person.age;
val = person.hobbies;
val = person.hobbies[0];//hobilerin ilk elemanı için
val = person.hobbies.length;
val = person.address;
val = person.address.city;//böyle de address objesinin city'sine ulaştık

val = person.getBirthYear();



console.log(val);
console.log(typeof person);


let people=[
    {firsName:'Abdullah',lastName:'Turgut'},
    {firsName:'Asya',lastName:'Turgut'},
    {firsName:'Eray',lastName:'Turgut'}
];
val = people[0];
val = people[0].firsName;//bu şekildede obje elemanlarına ulaşabiliriz.

for(let i =0;i<people.length;i++){
    console.log(people[i].firsName);
}

// console.log(val);
// console.log(typeof val);