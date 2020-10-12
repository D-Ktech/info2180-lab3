"use strict";
window.onload = function(){
  var x = document.querySelectorAll("#board div");
  console.log(x.length);
  for (var n = 0; n < x.length; n++){
    x[n].className = "square";
  }
}