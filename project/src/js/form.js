
var radioBtn = document.getElementsByName("radio1");
var radioBtn1 = document.getElementsByName("radio2");
var radioBtn2 = document.getElementsByName("radio3");
var radioBtn3 = document.getElementsByName("radio4");
var radioBtn4 = document.getElementsByName("radio5");
var btncontrol = document.querySelector('#btnradio');

btncontrol.addEventListener('click', function(){
    for(var i = 0; i < radioBtn.length; i++){
        if(radioBtn[i].checked === true){
            if(radioBtn[i].value === "1"){
                window.location="../../html/pages/BC_bangcandoitatcacackho.html";
            }
            else if(radioBtn[i].value === "2"){
                window.location="../../html/pages/BC_bangcandoitheokho.html";
            }
            else if(radioBtn[i].value === "3"){
                window.location="../../html/pages/BC_tonghoptolegiacong.html";
            }
            else if(radioBtn[i].value === "4"){
                window.location="../../html/pages/BC_bangcandoidieuchuyen.html";
            }
        }
    }

    for(var i = 0; i < radioBtn1.length; i++){
        if(radioBtn1[i].checked === true){
            if(radioBtn1[i].value === "1"){
                window.location="../../html/pages/BC-bangkechitiet-xemchitietvattutatcacackho.html";
            }
            else if(radioBtn1[i].value === "2"){
                window.location="../../html/pages/BC-bangkechitiet-chontheochitietvattutheokho.html";
            }
        }
    }

    for(var i = 0; i < radioBtn2.length; i++){
        if(radioBtn2[i].checked === true){
            if(radioBtn2[i].value === "1"){
                window.location="../../html/pages/BC_tonghopquyettoank14-intatca.html";
            }
            else if(radioBtn2[i].value === "2"){
                window.location="../../html/pages/BC_tonghopphelieu-in1kho.html";
            }
        }
    }


    for(var i = 0; i < radioBtn3.length; i++){
        if(radioBtn3[i].checked === true){
            if(radioBtn3[i].value === "1"){
                window.location="../../html/pages/BC-tonghopphelieu-intatca.html";
            }
            else if(radioBtn3[i].value === "2"){
                window.location="../../html/pages/BC_tonghopphelieu-in1kho.html";
            }
            else if(radioBtn3[i].value === "3"){
                window.location="../../html/pages/BC_tonghoptolegiacong-intonghop.html";
            }
        }
    }

    for(var i = 0; i < radioBtn4.length; i++){
        if(radioBtn4[i].checked === true){
            if(radioBtn4[i].value === "1"){
                window.location="../../html/pages/BC_tonghoptolegiacong-intonghop.html";
            }
            else if(radioBtn4[i].value === "2"){
                window.location="../../html/pages/BC_tonghoptolegiacong-inchitiet.html";
            }
            else if(radioBtn4[i].value === "3"){
                window.location="../../html/pages/BC_tonghoptolegiacong_inchitiet.html";
            }
        }
    }
})

