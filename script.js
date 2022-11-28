 //ctrl +k ardından c ile seçtiklerimizi yorum satırı yapabiliyoruz
 
 //burda alert bir nevi site uyarısı gibi çalıştı
 //alert("Merhaba Televole");

//  console.log("Merhaba");
//  console.log(1234);
//  console.log([1,2,3,4]);
//  console.error("Hata oluştu");
//  console.warn("Bir uyarı oluştu");

 /* 
    yorum satırları
    yorum satırları
    yorum satırları
    yorum satırları
 */

//console yazılanlar

//----------DEĞİŞKENLER-----------------

// var age;
// console.log(age);
//bunun çıktısında bir şey tanımlamadığımız için undefined yazdı 
// age = 20;
// console.log(age);
//burda age için 20 değerini yazdırdı

// var fullname='Abdullah Turgut';
// console.log(fullname);
//Burdada string olarak adımı getirdi.

// var , let , const
// * var ile tanımaladığımız tüm değişkenleri
// let ile tanımlayabiliriz.

// let city='Kocaeli';
// console.log(city);

//const kullandığımızdada aynen değişken yazılır fakat burda const kullandığımızda sabit bir değer olduğunu belirtmek için 
// const email = 'abc@gmail.com';
// console.log(email);
//yani burda emaili değiştirmeye çalıştığımızda
//email = 'bcd@gmail.com';
//gibi hata ile karşılaşırız.
//console.log(email);
//Uncaught TypeError: Assignment to constant variable. at script.js:45:7 gibi

//----------DEĞİŞKEN TİPLERİ-----------------
// iki ana başlık altında alıcaz
// 1) Pritive Types
  //String 
//   let firstName='Turgut';
//   console.log(typeof firstName);

//   //Number
//   let age=20;
//   console.log(typeof age);
//   let money=100.5;
//   console.log(typeof money);

//   //Boolean 
//   let isActive = true;
//   console.log(typeof isActive);

//   //Null
//   let job = null;
//   console.log(typeof job);

//   //undefined 
//   let car ;
//   console.log(typeof car);



// // 2) Reference Types - Objects

// //Array 
// let names=['Ali','Ahmet','Can'];
// console.log(typeof names);

// //Object

// let adress = {
//     city:'Kocaeli',
//     country:'Turkey'
// }
// console.log(typeof adress);

// //function 

// var calculateAge= function(){
//     return 26;
// }
// console.log(typeof calculateAge);


//------------TÜR DÖNÜŞÜMLERİ----------------

// let num1 = '5';
// console.log(typeof num1);
// let num2 = '10';
// //Bu şekilde string olarak gösterdi 
// console.log(num1+num2);//510 gibi 

// let num3 = Number('5');
// let num4 = Number('10');
// console.log(num3 + num4);
// //burdada mesela type(variable) yaptık int olarak topladı
// let total = num3 * num4;
// console.log(total);
// console.log(typeof total);

// //number to string 
// let val;
// val =String(10);



// var num5 = 10;
// console.log(num5);
// console.log(typeof num5);
// //string olarak dönüştürdüğümüz val 2 basamaklı olduğunu anladık bu sayede 
// console.log(val.length);

// var nameOfMe='Abdullah';//8 harf 
// console.log(nameOfMe.length);//gibi
// //Date to string
// val =String( new Date().getMonth());

// //Array to string
// val = String([1,2,3,4]);


// //toString 

// val = (20).toString();
// val = (false).toString();
// console.log(val);
// console.log(typeof val);
// console.log(val.length);


// ** Bir müşterinin aşağıdaki bilgileri için değişken oluşturunuz.

// ** Müşteri adı
// ** Müşteri soyadı
// .....

var customerName = 'Abdullah';
var customerSurname='Turgut';

var fullName ='Abdullah Turgut';
var customerID = '15123325123';

var total = 205.6;
var gender = true; // true erkek örneğin,false kadın
//typeof object 
var address={
    city : 'Kocaeli',
    district : 'Gebze',
    body : 'Güzeller Mahallesi'
};
//typeof array
var hobbies = ['Fitness','Listenin Music','Walking'];

// ** Aşağıdaki bilgilere göre bir sipariş toplamını hesaplayınız 

let order1 = '100';
let order2 = '150';
//Number yazmazsak 100150 olarak string birleştirip yazar
var totalOrder = Number(order1) + Number(order2);
//console.log(totalOrder);

var order3 = '100.2';
var order4='150.4';

var totalOrder2 = Number(order3) + Number(order4);
//bu şekilde ondalığın 2 basamağı yazdırılır
//console.log((totalOrder2).toFixed(2));

//bunu ondalıklı değilde tam sayı olarak toplamak istersek 

var totalOrder3 = parseInt(order3)+parseInt(order4);
//console.log(totalOrder3);

// ** Aşağıda verilen doğum yılına göre yaş hesabı yapınız

var yearOfBirth = 1986;
var currentAge = new Date().getFullYear() - yearOfBirth;
//console.log(new Date().getFullYear() - yearOfBirth);
//console.log(currentAge);

// ** Aşağıdaki string ifadenin karakter sayısını hesaplayınız.

var course = 'Modern Javascript Kursu';
console.log(course.length);

