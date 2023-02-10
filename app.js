//declare variables/const
const cards = document.querySelectorAll('.card');
let duration = 60;
let timer;
let playAgain = document.getElementById(replay);
let lockBoard = true;
let interv = null;


let colorArray = ["red", "red", "blue", "blue", "greenyellow",  "greenyellow", "orange", "orange", "yellow", "yellow","brown", "brown","black", "black", "fuchsia", "fuchsia"] 

//Shuffle
function shuffle(colorArray) {
	let currentIndex = colorArray.length,  randomIndex;
  
	while (currentIndex != 0) {
	  randomIndex = Math.floor(Math.random() * currentIndex); 
	  currentIndex--;
  
	  
	  [colorArray[currentIndex], colorArray[randomIndex]] = 
	  [	colorArray[randomIndex], colorArray[currentIndex]];
	}
	return colorArray;
  }

 
  init();
  function init() {
    shuffle(colorArray);
 

cards.forEach((card, i) => {
    card.dataset.color = colorArray[i];
})
   }





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
    
    evt.target.classList.toggle(cardColor);
    
    console.log(counter)
    if (counter === 0) {
        cardIsFlipped = false; counter++;
        cardOne ={target:evt.target, cardId : cardId} 
        console.log(counter);
        cardOneColor = cardColor;
    } else {
        cardIsFlipped = false;
        cardTwo = {target:evt.target, cardId : cardId} 
        counter = 0
        
        
        if (cardOneColor === cardColor) {
            console.log('match');
            score++;
            cardOne  = {target: null, cardId: null}
            cardTwo = {target: null, cardId: null}

           
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
            
            console.log(cardOneColor, cardColor);
            console.log(cardOne.target.classList);

        }
        }
    }


cards.forEach(card => card.addEventListener('click', cardFlip));




const startBtn = document.getElementById('start');
const replayBtn = document.getElementById('replay');



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
