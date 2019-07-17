

$(function(){
    $(document).ready(function(){
        $.ajax({
            url: 'http://localhost:3000/dinhmucvattu',
            type: 'GET',
            success: function (data, textStatus, jQxhr) {
                var _data = data;
                console.log(JSON.stringify(_data));
                var html = "";
                $.each(_data,function(i,val){
                    html += `<tr><td><div class="btn-control row"><button class="col-6"><i class="fas fa-edit"></i></button><button class="col-6"><i class="fas fa-trash-alt"></td><td>${val.sochungtu}</td><td>${val.ngaylap}</td><td>${val.mathanhpham}</td><td>${val.tenthanhpham}</td><td>${val.macapphat}</td><td>${val.loai}</td><td>${val.khoqt}</td></tr>`
                })
                $("#taodinhmucvattu-ketiep__table table tbody").html(html);
                console.log(textStatus);
                console.log(jQxhr.responseJSON);
            },
            error: function (jqXhr, textStatus, errorThrown) {
                console.log(errorThrown);
                console.log(jqXhr.responseJSON.message);
            }
        })
    })
})