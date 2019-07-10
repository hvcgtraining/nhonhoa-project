"use strict";

var clicka = document.getElementById("sidebar-toggle");
clicka.addEventListener("click", function () {
  var administrator = document.getElementById("administrator");
  administrator.classList.toggle("menu");
});

function setwidth() {
  var widthsidebar = $(".sidebar").width();
  console.log(widthsidebar);
  $("li#administrator").width(widthsidebar);
}