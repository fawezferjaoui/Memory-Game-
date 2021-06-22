let cardArray = [ 
{ name: "fries", img: "./image/fries.png", }, 
{ name: "fries", img: "./image/fries.png", },
{ name: "pizza", img: "./image/pizza.png", },
{ name: "pizza", img: "./image/pizza.png", }, 
{ name: "milkshake", img: "./image/milkshake.png", },
{ name: "milkshake", img: "./image/milkshake.png", }, 
{ name: "ice-cream", img: "./image/ice-cream.png", },
{ name: "ice-cream", img: "./image/ice-cream.png", },
{ name: "hotdog", img: "./image/hotdog.png", },
{ name: "hotdog", img: "./image/hotdog.png", },
{ name: "cheeseburger", img: "./image/cheeseburger.png", },
{ name: "cheeseburger", img: "./image/cheeseburger.png", }, 
]; 

//define variables and get DOM element

let grid = document.querySelector(".grid");
let source = document.querySelector("#source")
let scoreBoard = document.querySelector(".scoreBoard"); 
let popup = document.querySelector(".popup"); 
let playAgain = document.querySelector(".playAgain"); 
let clickBoard = document.querySelector(".clickBoard"); 
let imgs; 
let cardsId = []; 
let cardsSelected = []; 
let cardsWon = 0; 
let clicks = 0;
document.addEventListener("DOMContentLoaded", function () {
//define functions 

createBoard(grid, cardArray); 
arrangeCard();
playAgain.addEventListener("click", replay); 

//add a click functions for images 

imgs = document.querySelectorAll("img");
Array.from(imgs).forEach(img => 
img.addEventListener("click", flipCard)
) 
});
//createBoard function

function createBoard(grid, array) { 
popup.style.display = "none"; 
array.forEach((arr, index) => { 
let img = document.createElement("img"); 
img.setAttribute("src", "./image/blank.png");
img.setAttribute("data-id", index); 
grid.appendChild(img); 
})
}

// arrangeCard function

function arrangeCard() { 
cardArray.sort(() => 0.5 - Math.random())
}

// flip Card function

function flipCard() { 
let selected = this.dataset.id;
  let clicked =cardArray[selected].name
cardsSelected.push(clicked); 
  
  
  
cardsId.push(selected); 
this.classList.add("flip"); 
this.setAttribute("src", cardArray[selected].img); 
if (cardsId.length === 2) { 
setTimeout(checkForMatch, 500);
} 
}
// checkForMatch function

function checkForMatch() { 
let imgs = document.querySelectorAll("img"); 
let firstCard = cardsId[0];
let secondCard = cardsId[1];
if (cardsSelected[0] === cardsSelected[1] && firstCard !== secondCard) { 
alert("you have found a match"); 
 
 
cardsWon += 1; 
scoreBoard.innerHTML = cardsWon; 
setTimeout(checkWon,500) 
} else { 
imgs[firstCard].setAttribute("src", "./image/blank.png");
imgs[secondCard].setAttribute("src", "./image/blank.png"); 
alert("wrong, please try again"); 
  
  imgs[firstCard].classList.remove("flip"); imgs[secondCard].classList.remove("flip"); 
} 
cardsSelected = []; 
cardsId = []; 
clicks += 1; 
clickBoard.innerHTML = clicks; 
}

function checkWon() {
if (cardsWon == cardArray.length / 2) {
alert("You won") 
setTimeout(()=> popup.style.display = "flex" ,300); 
}
}
// The replay function

function replay() { 
arrangeCard(); 
grid.innerHTML = "";
createBoard(grid, cardArray);
cardsWon = 0;
clicks = 0; 
clickBoard.innerHTML = 0; 
scoreBoard.innerHTML = 0; 
popup.style.display = "none"; 
}