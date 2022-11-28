
// //dizi uygulamaları

// var arr = ['Bmw','Mercedes','Opel','Mazda'];

// console.log(arr.length);//dizi kaç elemanlı
// console.log(arr[0],'--',arr[arr.length-1]);//burdaki 3 arr.lenght-1 ile daha tatlı olur
// //dizide herzaman kaç elaman olucak bilemeyebiliriz.

// arr.push('Renault');//dizinin sonuna ekledik
// //arr[arr.lenght] = 'Renault'; buda bir yol

// arr.unshift('Toyota');//dizinin başına eleman eklemek için
// arr.pop();//diziden Renault'u çıkardık
// let val = arr.indexOf('Toyota');
// arr.shift();
// arr.reverse();//diziyi ters çevirdik
// arr.sort();//diziyi alfabetik olarak sıralar 
// //eğer ki dizimiz sayılardan oluşsaydı küçükten büyüğe sıralardı

// var num=[1,5,2,80];
// num.sort();

// let val2 = arr.includes('Opel');

// var str='Chevrolet,Dacia';
// var arr2=str.split(',');//bu şekilde str stringini (,)den ayırarak diziye dönüştürdük.

// var arr3= arr.concat(arr2);//iki diziyi birleştirdik

// //6 elemanlı dizi son 2 eleman silmek için
// arr3.splice(4,2);//son 2 elemanı sildik.


// console.log(arr3);
// console.log(arr2);
// console.log(val2);//Opal dizinin elemanımı --> evet
// console.log(num);
// console.log(val);
// console.log(arr);


// var studentA=['Abdullah','Turgut',1996];
// var studentB=['Asya','Turgut',2019];
// var studentC=['Eray','Turgut',2022];

// var students=[studentA,studentB,studentC];
// console.log(students);//dizi içinde dizi oluşturduk
// //students dizisinin 0.elamanının 0.elamanı için
// console.log(students[0][0]);//Abdullah olarak çıkar
// console.log(students[0][1]);//Turgut olarak çıkar