
"use strick"
// var control = document.querySelectorAll('.btn-show');
// var show = document.querySelectorAll('.btn-group-func');
// popup
var lock = document.querySelector('.btn-lock');
var popup = document.querySelector('.popup-lock');
var block = document.querySelector('.btn-lock-open');
var passin = document.querySelector('.pass-in');
var error = document.querySelector('.text-vali');
// add
var showBtnadd = document.querySelector('.form-add-show');
var formShow = document.querySelector('.form-hide');





//table
var tableDefault = document.querySelector('#table-defaults');
var tbody = tableDefault.querySelector('tbody');
var trTable = tbody.getElementsByTagName("tr");

trTable.addEventListener('click', function(){
    console.log('hi')
})

for(var i = 0; i< trTable.length; i++){
    trTable[i].addEventListener('click', function(){
        console.log('hi')
        window.location="../../html/pages/danhsachchitietdinhmucvattu.html";
    })
}



showBtnadd.addEventListener('click', function () {
    formShow.classList.toggle('dpl-block');
})

document.addEventListener('DOMContentLoaded', function () {


    

    // window.onclick = function(event) {
    //     for(var i = 0; i< control.length; i++){
    //         if (event.target == control[i]) {
    //             show[i].classList.remove('dpl-none');
    //         }else{
    //             // show[i].css({"opacity": "0", "pointer-event": "none"});
    //             show[i].style.opacity = '0';
    //             show[i].style.pointerEvents = 'none';
    //             control[i].classList.remove('content-down');
    //         }
    //     }
    // }

    // for (var i = 0; i < control.length; i++) {
    //     control[i].addEventListener('click', function () {
    //         this.classList.toggle('content-down');
    //         var index = this.nextSibling;
    //         if (index.style.opacity === "1") {
    //             // index.css({"opacity": "0", "pointer-event": "none"});
    //             index.style.pointerEvents = "none";
    //             index.style.opacity = "0";
    //         } else {
    //             index.style.opacity = "1";
    //             index.style.pointerEvents = "auto";
                
    //             // index.css({"opacity": "1", "pointer-event": "auto"});

    //         }
    //     });
    // }

    

    lock.addEventListener('click', function () {
        popup.classList.add('toggleMenu');
    })

    passin.addEventListener('keyup', function () {
        if (this.value === '123') {
            popup.classList.remove('toggleMenu');
            this.value = "";
            block.classList.remove('hide-in');
            passin.classList.remove('show-in');
            error.classList.remove('toggleMenu');
            return;
        } else {
            error.classList.add('toggleMenu');
        }

    })

    block.addEventListener('click', function () {
        this.classList.add('hide-in');
        passin.classList.add('show-in');
    })
    

});








// $(function () {
//     $('#mytbl tr').click(function (e) {
//         var taikhoan = $(this).closest('.tr').find('td:nth-child(2)').text();
//         var matkhau = $(this).closest('.tr').find('td:nth-child(3)').text();
//         var hoten = $(this).closest('.tr').find('td:nth-child(4)').text();
//         var chucdanh = $(this).closest('.tr').find('td:nth-child(5)').text();
//         var quyen = $(this).closest('.tr').find('td:nth-child(6)').text();
//         $('.tr').click(function (e) {
//             /*e.preventDefault();*/
//             $('#user').val(taikhoan);
//             $('#password').val(matkhau);
//             $('#hovaten').val(hoten);
//             $('#chucdanh').val(chucdanh);
//             $('#quyen').val(quyen);
//         });

//     });
    
// });

