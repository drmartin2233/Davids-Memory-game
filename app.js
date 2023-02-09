//declare variables

 
const cards = document.querySelectorAll('.card');


let colorArray = ["red", "red", "blue", "blue", "greenyellow",  "greenyellow", "orange", "orange", "yellow", "yellow","brown", "brown","black", "black", "fuchsia", "fuchsia"] //style for 16 colors

//shuffle color array
function shuffle(colorArray) {
	let currentIndex = colorArray.length,  randomIndex;
  
	while (currentIndex != 0) {
	  randomIndex = Math.floor(Math.random() * currentIndex); //math.floor and math.random from w3
	  currentIndex--;
  
	  //swap it with the current element.
	  [colorArray[currentIndex], colorArray[randomIndex]] = 
	  [	colorArray[randomIndex], colorArray[currentIndex]];
	}
	return colorArray;
  }

	shuffle(colorArray);
    
init();
function init() {
//    for ( let i = 0; i < 16; i++) {
//        cards[i].dataset.color = colorArray[i];
//     }
cards.forEach((card, i) => {
    card.dataset.color = colorArray[i];
})
   }

//card array

// let cardArray = [card1, card2, card3, card4,
//                  card5, card6, card7, card8, 
//                  card9, card10, card11, card12, 
//                  card13, card14, card15, card16];

//stored variables

// const boardEl = document.getElementsByClassName("board");
// const startBtn = document.getElementById("start"); const replayBtn = document.getElementById("replay");


//start button / timer
let cardIsFlipped = false;
let cardOne, cardTwo;

let counter = 0;
//card=flip
function cardFlip(evt) {
    // console.log('click!', cards);
    console.log(evt.target);
    let cardColor = evt.target.dataset.color;
    console.log(cardColor)
    evt.target.classList.toggle(cardColor);
    console.log(evt.target);
    // this.classList.toggle('card-front');
    console.log(counter)
    if (counter === 0) {
        cardIsFlipped = false; counter++;// counter +1 on click event
        cardOne = evt.target;
        console.log(counter);
    } else {
        cardIsFlipped = false;
        cardTwo = evt.target;
        counter = 0
        console.log(cardOne, cardTwo); 
        if (cardOne.dataset.color === cardTwo.dataset.color) {
            console.log('match');
            cardOne.removeEventListener('click', cardFlip);
            cardTwo.removeEventListener('click', cardFlip);
        } else {
            console.log("No Match")
        }
    }
}

cards.forEach(card => card.addEventListener('click', cardFlip));

//Game logic / point log

//start button
    //activate board, begin count
// const startBtn = document.getElementById('start');
// startBtn.addEventListener('click', function() {
//     setInterval('secondsPassed()', 1000);
// });

//timer
// const countdownTimer = setInterval('secondsPassed')
let start = document.querySelector('#start');
let Replay = document.querySelector('#replay');

start.addEventListener('click', function() {
    let i = 0;

    let timerId = setInterval(function() {
        console.log('!')
    }, 1000)
});



//msg: "Time's Up!"
// let timer;
// let timeLeft = 60; //seconds (timer function in milliseconds)


// function gameOver() {
//     cancelInterval(timer);
// }

// function updateTimer() {
//     timeLeft = timeLeft - 1;
//     if(timeLeft >= 0)
//         $('#timer').html(timeLeft);
//         else {
//             gameOver();
//         }
// }





//shuffle

//reset