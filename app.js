//declare variables/const
const cards = document.querySelectorAll('.card');

let colorArray = ["red", "red", "blue", "blue", "greenyellow",  "greenyellow", "orange", "orange", "yellow", "yellow","brown", "brown","black", "black", "fuchsia", "fuchsia"] 

// let cardCount = colorArray.length;




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
let cardIsFlipped = false;
let cardOne, cardTwo;
let cardOneColor;

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
        cardOneColor = cardColor;
    } else {
        cardIsFlipped = false;
        cardTwo = evt.target;
        counter = 0
        console.log(cardOne, cardTwo); 
        //chack  match
        if (cardOneColor === cardColor) {
            console.log('match');
            cardOne.removeEventListener('click', cardFlip);
            cardTwo.removeEventListener('click', cardFlip);
            console.log(cardOneColor, cardColor);
        } else if (cardOneColor !== cardColor); {
            console.log("No Match");

            setTimeout(() => {evt.target.classList.toggle(cardColor)}, 1500);
            setTimeout(() => {cardOne.classList.toggle(cardOneColor)}, 1500);
            console.log(cardOneColor, cardColor);
            
            console.log(cardOne.classList);

        }
        }
    }
// }

cards.forEach(card => card.addEventListener('click', cardFlip));

//Game logic / point log

//start button
    //activate board, begin count
const startBtn = document.getElementById('start');


//timer
// const countdownTimer = setInterval('secondsPassed')
let start = document.querySelector('#start');
let Replay = document.querySelector('#replay');
let display = document.getElementById('timer');

startBtn.addEventListener('click', () => startTimer(60)); 

function startTimer(duration) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60);
        seconds = parseInt(timer % 60);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        console.log(display)

        display.innerHTML = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
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