//declare variables

 
const cards = document.querySelectorAll('.card');
// const card2 = document.querySelectorAll('.card');
// const card3 = document.querySelectorAll('.card');
// const card4 = document.querySelectorAll('.card');
// const card5 = document.querySelectorAll('.card');
// const card6 = document.querySelectorAll('.card');
// const card7 = document.querySelectorAll('.card');
// const card8 = document.querySelectorAll('.card');
// const card9 = document.querySelectorAll('.card');
// const card10 = document.querySelectorAll('.card');
// const card11 = document.querySelectorAll('.card');
// const card12 = document.querySelectorAll('.card');
// const card13 = document.querySelectorAll('.card');
// const card14 = document.querySelectorAll('.card');
// const card15 = document.querySelectorAll('.card');
// const card16 = document.querySelectorAll('.card');


//card array

// let cardArray = [card1, card2, card3, card4,
//                  card5, card6, card7, card8, 
//                  card9, card10, card11, card12, 
//                  card13, card14, card15, card16];




//stored variables

const boardEl = document.getElementsByClassName("board");
const startBtn = document.getElementById("start"); const replayBtn = document.getElementById("replay");


function flipCard() {
    console.log('click!', cards);
    console.log(this);
    this.classList.toggle('card-front');
}

cards.forEach(card => card.addEventListener('click', flipCard));