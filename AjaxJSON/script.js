//bir click olayı 
document.querySelector('#getEmployee').addEventListener('click',loadEmployee);

function loadEmployee(){

    var loadImage = document.querySelector('#loading');
    loadImage.style.display = 'block';
    const xhr = new XMLHttpRequest();
    //serverdan bir tane dosya almak için
    xhr.open('GET','employees.json',true);

    
    //burda mesela çok hızlı geçtiği için olay görünür olup hemen görünmez olur liste gelince 

    setTimeout(() => {
        //bu sayede araya 1500 yani 1.5 saniye koyduk ki görebilelim.
          
    //responds geri döndükten sonra başarılımı değil mi diye bir kontrol gerçekleştirmek için 
    xhr.onload = function(){
        //burda işlem bitince tekrar dolma ikonunu görünmez kısma getirelim
        loadImage.style.display = "none";

        if(this.status === 200){

            let employees = JSON.parse(this.responseText);
            //örneğin bu dizi olsaydı aşağıda ki gibi
            // let html = 
            //         `<tr>
            //             <td>${employees.firstName}</td>
            //             <td>${employees.lastName}</td>
            //             <td>${employees.age}</td>
            //             <td>${employees.retired}</td>
            //         </tr>`;

            //undefined olarak gelmemesi için html="" ; yapıcaz
            let html="";
            employees.forEach(employee => {
                html+=`<tr>
                        <td>${employee.firstName}</td>
                        <td>${employee.lastName}</td>
                        <td>${employee.age}</td>
                        <td>${employee.retired}</td>
                       </tr>`;
            });

            document.querySelector('#employees').innerHTML = html;
            
            //status 200 olursa başarılı olduğunu gösterir
            // console.log(this.responseText);//bu şekilde gelen bilgiler text olarak geliyor

            //console.log(JSON.parse(this.responseText));
            //böylece bilgileri object olarak getiriyoruz type'nı
        }
    }

    xhr.send();

    }, 1500);
    


   
}