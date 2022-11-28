// //Arrays

// let names = ['abdullah','asya','eray'];
// let years = [1996,2019,2022];

// //---------------Get array item...
// // console.log(names[0]);
// // console.log(names[2]);

// //----------------set array item....
// //names[5] ='yaren';
// //bu şekilde değilde şöyle yaparsak boş eleman olmadan kaydeder
// // names[names.length]='yaren';

// // //----------------add items
// // years.push(1998);//bu şekilde dizinin sonuna atar başına atamak için
// // years.unshift(1999);

// // //----------remove items
// // years.pop();//sondaki elemanı sileriz
// // //en baştakini silmek için
// // years.shift();

// // //------------indexof('eleman')
// // let index = names.indexOf('abdullah');
// // console.log(index);//0. eleman diye gösterdi
// // //olmayan bir şey olursa
// // let index2 = names.indexOf('şevval');
// // console.log(index2);//-1 döndürür

// // //----------reverse (ters çevirmek için )
// // names.reverse();

// // //----------sort metodu
// // years.sort();//sıralama bir nevi

// // //----------concat metodu
// // let val = years.concat(names);
// // console.log(val);

// //----------splice
// //belli bir başlangıc arada silme ve eklemek istediğimiz eleman
// // names.splice(2,0,'lina');
// // //Eleman silmek içinde kullanılabilir
// // names.splice(0,1);//0.indexten itibaren bir elemanı sildi.

// //filter


// function over18(year){
//     let age = 2022-year;
//     return age>18;
// }
// //console.log(over18(1990));
// //--------------find 
// // let val = years.find(over18);//ilk bulduğu değeri
// // console.log(val);

// //-------------filter
// //burdada dizi olarak getirir 1 den fazla true varsa dizi olarak gösterir.
// let val = years.filter(over18);
// console.log(val);


// console.log(names);
// console.log(names.length);
// console.log(typeof names);
// console.log(years);