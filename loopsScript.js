//loops

//-------------for

// for (let i=0;i<10;i++){
//     if(i==3){
        
//         console.log("En sevdiğim rakam " + i);
//         continue;//bunu yaptığımızda 3 yazdıktan sonra devam eder tekrar 3 yazmaz
//     }
//     if(i==6){
//         console.log("En sevmediğim rakam " + i);
//         //continue;
//         //burda continue değilde break dersek 6 da durur ve fordan çıkar
//         break;
//     }
//     console.log(i);
// }


//-------while loop



// while(i<10){
//     console.log(i);
//     i++;
// }

//-------do-While

// do{
//     console.log(i);
//     i++;

// }while(i<10)

// let toplam = 0;
// let sonuc = 1;
// for(i=10;i>0;i--){
//     if(i%2 == 0){
//         sonuc *= i;
//         console.log(sonuc);
//     }
// }


for(let i=0; i<10;i++){
    for(let j=0;j<10;j++){
        console.log(i , j);
    }
}