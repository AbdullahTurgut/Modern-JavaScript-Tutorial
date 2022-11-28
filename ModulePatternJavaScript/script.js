//Module Pattern Examples

//1-Problem )
//Global variable naming conflicts  

//script.js 'den 
var name = 'Abdullah';

//app.js'den 

var name = 'Asya';//şeklinde olabilir bunu hatırlamakta zorluk çekiceğimiz durumlar olucak 

//2-Problem
//Encapsulation

// var Counter = {
//     number : 0,
//     increment : function(){
//         return ++this.number;
//     },
//     decrement : function(){
//         return --this.number;
//     }
// }
// console.log(Counter.increment());
// console.log(Counter.increment());
// Counter.number = 10;//burda objenin numberine ulaşıp değiştiriyoruz ama bunun yapılmasını istemediğimiz durumlar olabilir.

// //burda aslında Obje içinde numberin private ve fonksiyonlarn public olmasını istiyoruz

// console.log(Counter.decrement());

//IIFE (Immediately Invoked Function Expressions)

//script.js
(function(){
    //burda fonksiyonun kendine ait bir scope oluşturmuş oluyoruz aslında 
    var name = 'Abdullah';
    console.log(name);
})();
//app.js
(function(){
    var name = 'Asya';
    console.log(name);
})();
//bu yapıya IIFE yapısı denir.
//burda aslında olayı var name ile tanımladığımız iki aynı değişkeni birbirine ezdirtmedik ve çıktı olarak hem Abdullah hem de Asya'yı aldık.

//1. durumu yukarıdaki şekilde çözmüş olduk aslında

//bu fonksiyonu dışarı açmak için
//bu şekilde Module üzerinden işlem yapabiliriz
// var Module = (function(){

//     //bu yapıda burdaki tanımlanan elemanlar 
//     //private
//     let number = 0;

//     let increment = function(){
//         return ++number;
//     }
//     let decrement = function(){
//         return --number;
//     }
//     //console.log(increment());//Bu şekilde içindeyken ulaşabilirz
//     return {
//         //burdaki elemanlar 
//         //public
//         increment,//increment'i buraya aktardığımızda dışarıdan ulaşabiliriz
//         decrement
//     }

// })();

//console.log(number);//burda number yazdırmaya çalıştığımızda hata ile karşılaşırız.script.js:64 Uncaught ReferenceError: number is not defined gibi
//console.log(increment());//burayada ulaşamayız

//NOTE: Module ile dışarıya açmamıza rağmen private elemanlara ulaşamıyoruz.

// console.log(Module.increment());
// console.log(Module.decrement());

var Module =(function(){
    var privateMethod = function(){

    };

    return {
        publicMethod : function(){

        }

    }
})();

Module.publicMethod();//bu şekilde Module üzerinden public methoda ulaşabileceğiz