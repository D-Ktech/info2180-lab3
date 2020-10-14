"use strict";
window.onload = function(){
  var x = document.querySelectorAll("#board div");
  console.log(x.length);
  for (var n = 0; n < x.length; n++){
    x[n].className = "square";
  }

  var win_com = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  var X_CLASS = 'X';
  var O_CLASS = 'O';
  var squares = document.querySelectorAll('#board div');
  var board = document.getElementById('board');
  var winningMessageN = document.getElementById('status');
  var winningMessageText = document.querySelectorAll('#status div');
  var newgameButton = document.getElementById('new game');
  let circleTurn;

  startGame()

  newgameButton.addEventListener ('click', startGame)

  function startGame(){
    circleTurn = false
    squares.forEach(square=>{
    square.classList.remove(X_CLASS)
    square.classList.remove(O_CLASS)
    square.removeEventListener('click',handleClick)
    square.addEventListener('click',handleClick, {once: true})
    })
    setBoardHoverClass()
    winningMessageN.classList.remove('show')
  }
  

  function handleClick(s){
    var square = s.target;
    var currentClass = circleTurn ? O_CLASS : X_CLASS;
    placeMark(square,currentClass)
    if (checkWin(currentClass)){
      endGame(false)
    }
      else{
        endGame(true)
        swapTurns()
        setBoardHoverClass()
      }
  }

  function placeMark(square, currentClass){
   square.classList.add(currentClass)
  }

  function swapTurns(){
    circleTurn = !circleTurn
  }

  function setBoardHoverClass(){
    board.classList.remove(X_CLASS)
    board.classList.remove(O_CLASS)
    if (circleTurn) {
      board.classList.add(O_CLASS)
    }
      else{
        board.classList.add(X_CLASS)
    } 
  }

  function checkWin(currentClass){
    return win_com.some(combination => {
      return combination.every(index => {
         return squares[index].classList.contains(currentClass)
      })
    })
  }

  function endGame(draw){
    if (draw){ 
      winningMessageText.innerText = 'Draw!'
    }
      else{
        winningMessageText.innerText = '${circleTurn ? "Congratulations!" "O" "is the" : "Congratulations!" "X" "is the} Winner!'
      }
    }
    winningMessageN.classList.add('show')
  }  
