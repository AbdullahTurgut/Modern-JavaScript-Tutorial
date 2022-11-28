

// // var goTraffic= new Date('04/20/2016');
// // goTraffic.setHours(0,0,0,0);//saati dakkayı msyi falan 0'ladık.Sadece günle işimiz olsun diye
// // var msOnTraffic= Date.now() - goTraffic.getTime();
// // //gün bulmak için
// // var dayOnTraffic = Math.floor(msOnTraffic / (1000 * 60 * 60 * 24));//çıkan değeri bir alta yuvarladık tam sayı yaptık.


// // if(dayOnTraffic <=365){
// //     console.log("You have to do your first maintance(1.yıl bakımı)");
// // }else if(dayOnTraffic > 365 && dayOnTraffic <= 365*2){
// //     console.log("You have to do your second maintance(2.yıl bakımı)");
// // }else if(dayOnTraffic > 365*2 && dayOnTraffic <= 365*3){
// //     console.log("You have to do your third maintance(3.yıl bakımı)");
// // }else {
// //     console.log("Do your maintance bitch!!");
// // }


// // console.log(dayOnTraffic);
// // console.log(msOnTraffic);


// var result = prompt("Who's there?");//diyalog kutusu kullandırır bize.

// if(result == 'cancel'){
//     console.log("Cancelled!");
// }else if(result == 'Admin'){
//     console.log("Welcome Admin!");
//     var password = prompt("Enter your password : ");
//     if(password == "cancel"){
//         console.log("Cancelled!");
//     }else if(password == "1234"){
//         console.log("Welcome Admin!");
//     }else {
//         console.log("Wrong Password");
//     }
// }else{
//     console.log("I do not know you man get the fuck out of here!");
// }
// console.log(result);