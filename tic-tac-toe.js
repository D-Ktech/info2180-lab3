"use strict";
window.onload = function(){
  var x = document.querySelectorAll("#board div");
  console.log(x.length);
  for (var n = 0; n < x.length; n++){
    x[n].className = "square";
  }

  let circleTurn;
  var X_CLASS = 'X';
  var O_CLASS = 'O';
  
  var squares = document.querySelectorAll('#board div');


  squares.forEach(square=>{
    square.addEventListener('click',handleClick, {once: true})
  })

  function handleClick(s){
    var square = s.target;
    var currentClass = circleTurn ? O_CLASS : X_CLASS;
    placeMark(square,currentClass)
    swapTurns()
    console.log('clicked')
  }

  function placeMark(square, currentClass){
   square.classList.add(currentClass)
   console.log(square, currentClass)
  }

  function swapTurns(){
    circleTurn = !circleTurn
  }

}

