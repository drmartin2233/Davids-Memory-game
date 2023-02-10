//declare variables/const
const cards = document.querySelectorAll('.card');
let duration = 60;
let timer;
let playAgain = document.getElementById(replay);
let lockBoard = true;
let interv = null;




let colorArray = ["red", "red", "blue", "blue", "greenyellow",  "greenyellow", "orange", "orange", "yellow", "yellow","brown", "brown","black", "black", "fuchsia", "fuchsia"] 

// let cardCount = colorArray.length;




// function playAgain() {
//     shuffle(colorArray);
// }

//gamestate


//shuffle color array/ generate cards
//-----
// for (let i = 0; i < cardCount; i++) {
//     const randomIdx = Math.floor(Math.random() * colorArray.length);
//     const color = colorArray[randomIdx];
//     const newCard = genCard(color);

//     colorArray.splice(randomIdx, 1);
//     cards.appendChild(newCard)
// }
//-----
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

  
  init();
  function init() {
    shuffle(colorArray);
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
let display = document.getElementById('timer');
let cardIsFlipped = false;
let cardOne  = {target: null, cardId: null}
let cardTwo = {target: null, cardId: null}

let cardOneColor;
let score = 0;

let counter = 0;
//card=flip
function cardFlip(evt) {
    if (lockBoard) return;
   let cardId = evt.target.id;
   if (cardOne.cardId  && cardTwo.cardId ) return
   
    console.log(cardOne.cardId, cardId);
    console.log(cardTwo.cardId, cardId);
    let cardColor = evt.target.dataset.color;
    // console.log(cardColor)
    evt.target.classList.toggle(cardColor);
    // console.log(evt.target);
    // this.classList.toggle('card-front');
    console.log(counter)
    if (counter === 0) {
        cardIsFlipped = false; counter++;// counter +1 on click event
        cardOne ={target:evt.target, cardId : cardId} 
        console.log(counter);
        cardOneColor = cardColor;
    } else {
        cardIsFlipped = false;
        cardTwo = {target:evt.target, cardId : cardId} 
        counter = 0
        // console.log(cardOne, cardTwo); 
        //chack  match
        if (cardOneColor === cardColor) {
            console.log('match');
            score++;
            cardOne  = {target: null, cardId: null}
            cardTwo = {target: null, cardId: null}

            // cardOne.target.removeEventListener('click', cardFlip);
            // cardTwo.target.removeEventListener('click', cardFlip);
            // console.log(cardOneColor, cardColor);
         if (score === 8) {
            clearInterval(interv);
            lockBoard = true;
            display.innerHTML = "YOU WIN!!!"; 

         }
        } else {
            console.log("No Match");
            setTimeout(() => {
                evt.target.classList.toggle(cardColor)
                cardTwo = {target: null, cardId: null}
            }, 1000);
            setTimeout(() => {
                cardOne.target.classList.toggle(cardOneColor)
                cardOne  = {target: null, cardId: null}
            }, 1000);
            lockBoard = true;
            setTimeout(lockBoard = false , 1000);
            // lockBoard = false;
            console.log(cardOneColor, cardColor);
            console.log(cardOne.target.classList);

        }
        }
    }
// }

cards.forEach(card => card.addEventListener('click', cardFlip));

//Game logic / point log

//start button
    //activate board, begin count
const startBtn = document.getElementById('start');
const replayBtn = document.getElementById('replay');

//timer
// const countdownTimer = setInterval('secondsPassed')
// let start = document.querySelector('#start');
// let restart = document.querySelector('#replay');

startBtn.addEventListener('click', () => startTimer());
replayBtn.addEventListener('click', () =>  replay());

function startTimer() {
    lockBoard = false
     timer = duration
    let  minutes, seconds;
    interv = setInterval(function () {
        
        minutes = parseInt(timer / 60);
        seconds = parseInt(timer % 60);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        console.log(display)

        display.innerHTML = minutes + ":" + seconds;

        if (--timer < 1) {
            // timer = duration;
            display.innerHTML = "TIME'S UP!!! you lost";
        }
    }, 1000);

}
 function replay() {
    
    clearInterval(interv);
    shuffle(colorArray);
    cards.forEach((card, i) => {
        card.classList = "card"
    })
    init()
 }




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