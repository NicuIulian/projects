let randomNumber = Math.floor(Math.random() * 100) + 1;   // assigning a random number between 1 and 100  using a math function

const guesses = document.querySelector('.guesses');  // first 3 constants are made to store a reference to the results paragraphs in html
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit'); //store references to the form text input and submit button
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

function checkGuess() {  //declares a var called userGuess and sets its value to the current value entered
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {  //testing if the guessCount variable is equal to 1 (player's first try or not)
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += `${userGuess} `; //appends the current userGuess value to guesses paragraph plus a space between each guess.

  if (userGuess === randomNumber) { //checks whether the user's guess is equal to the randomNumber set at the top -ends game
    lastResult.textContent = 'Congratulations! You got it right!'; //displays the "Congratulations message"
    lastResult.style.backgroundColor = 'green'; 
    lowOrHi.textContent = ''; 
    setGameOver();
  } else if (guessCount === 10) {  //if the player has used all 10 "lifes" it displays game over 
    lastResult.textContent = '!!!GAME OVER!!!';
    lowOrHi.textContent = '';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if (userGuess < randomNumber) {   //if the player's guess is smaller than the randomNumber set at the top it displays a message.
      lowOrHi.textContent = 'Last guess was too low!';  //message displayed for too low number 
    } else if (userGuess > randomNumber) {     //if the player's guess is bigger than the randomNumber set at the top it displays a message.
      lowOrHi.textContent = 'Last guess was too high!'; //message displayed for too big number 
    }
  }

  guessCount++;   //it increments 1 to the guess count variable  (ex: 5 ++ = 5+1 tries to guess)
  guessField.value = '';  //empty the value out of the form text 
  guessField.focus(); // focus the value again, ready for the next guess to be entered
}
guessSubmit.addEventListener('click', checkGuess);  //the checkGuess() function is called when the Submit guess button is pressed

function setGameOver() {    //line 45 and 46 disable the form text input and button 
  guessField.disabled = true;
  guessSubmit.disabled = true; // line 47,48 and 49 create a new button element and add it to the html page
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.append(resetButton);
  resetButton.addEventListener('click', resetGame); //sets an event listener to the new button and call the resetGame() function
}
 
function resetGame() { //resets the game so the player can start all over again fresh
  guessCount = 1; //puts the guess count back to 1

  const resetParas = document.querySelectorAll('.resultParas p');
  for (const resetPara of resetParas) {
    resetPara.textContent = ''; //line 57,58,59 empties all the text out of the information paragraphs
  }

  resetButton.parentNode.removeChild(resetButton);  //removes the reset button 

  guessField.disabled = false;  //line 64,65,66,67 enables the form elementes and focuses the text field 
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white'; // removes the background color from the lastResult <p>

  randomNumber = Math.floor(Math.random() * 100) + 1; //generates a new number different from the last one
}