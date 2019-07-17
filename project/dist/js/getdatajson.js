"use strict";

$(function () {
  $(document).ready(function () {
    $.ajax({
      url: 'http://localhost:3000/dinhmucvattu',
      type: 'GET',
      success: function success(data, textStatus, jQxhr) {
        var _data = data;
        console.log(JSON.stringify(_data));
        var html = "";
        $.each(_data, function (i, val) {
          html += "<tr><td><div class=\"btn-control row\"><button class=\"col-6\"><i class=\"fas fa-edit\"></i></button><button class=\"col-6\"><i class=\"fas fa-trash-alt\"></td><td>".concat(val.sochungtu, "</td><td>").concat(val.ngaylap, "</td><td>").concat(val.mathanhpham, "</td><td>").concat(val.tenthanhpham, "</td><td>").concat(val.macapphat, "</td><td>").concat(val.loai, "</td><td>").concat(val.khoqt, "</td></tr>");
        });
        $("#taodinhmucvattu-ketiep__table table tbody").html(html);
        console.log(textStatus);
        console.log(jQxhr.responseJSON);
      },
      error: function error(jqXhr, textStatus, errorThrown) {
        console.log(errorThrown);
        console.log(jqXhr.responseJSON.message);
      }
    });
  });
});