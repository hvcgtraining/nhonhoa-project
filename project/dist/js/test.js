"use strict";
"use strick";

$("#sidebar-toggle").click(function () {
  // var widthsidebar = $(".navigation").width();
  // console.log(widthsidebar);
  $("#administrator").toggleClass("setwidthadmin");
});
"use strick";
$("#sidebar-toggle1").click(function () {
  // var widthsidebar = $(".navigation").width();
  // console.log(widthsidebar);
  $("#administrator").toggleClass("setwidthadmin");
});
"use strick";
$("#sidebar-toggle2").click(function () {
  // var widthsidebar = $(".navigation").width();
  // console.log(widthsidebar);
  $("#administrator").toggleClass("setwidthadmin");
});
var tableDs = document.querySelector('#table-defaults-2');
var trTableDs = tableDs.getElementsByTagName('tr');
document.addEventListener('DOMContentLoaded', function () {
  for (var i = 0; i < trTableDs.length; i++) {
    trTableDs[i].addEventListener('click', function () {
      window.location = "../../html/pages/chitietvattu.html";
    });
  }
});