/* 
Demo Loops: Sayı Tahmin Oyunu

1-10 arası rastgele sayı üretilen bir sayıyı aşağı yukarı ifadeleri ile buldurmaya çalışın.


*/


//1 -10 arasında bir sayı üretmek için
//0 işin içinde olmasın istediğimiz için +1 ekledik

var hak;
var tahmin,sayac = 0;
var sayi = Math.floor((Math.random()*10)+1);
var can = Number(prompt("Kaç kerede bileceksiniz ? "));
hak = can;

console.log(sayi);
while (hak >0){
    hak--;
    sayac++;
    tahmin = Number(prompt("Bir sayı giriniz :"));

    if(sayi == tahmin){
        console.log(`Tebrikler! ${sayac} defada bildiniz.`);
        console.log(`puan : ${100 - (100 / can)*(sayac -1 )}`);
        //sayac -1 yaptık çünkü doğru bildiğimizi bu işe katmak istemedik.
        break;
    }else if(sayi>tahmin){
        console.log("Düşük bir değer girdiniz!");
    }else {
        console.log("Yukarı bir değer girdiniz!");
    }
    if(hak == 0){
        console.log("Hakkınız Bitti! Sayı :" + sayi);
    }
}