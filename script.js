document.addEventListener("DOMContentLoaded", function() {
  const randomNumber = parseInt(Math.random() * 100) + 1;
  // Generates number between 1 - 100

  const userInput = document.querySelector("#Guess");
  const button = document.querySelector("#button");
  let previous = document.querySelector("#previous");
  let attempt = document.querySelector("#numberofattempts");
  let finalResult = document.querySelector("#result");
  let previousGuesses = 10;
  let playGame = true;
  
  

  if(playGame){
    button.addEventListener("click", function(e) {
     e.preventDefault()
      const guess = parseInt(userInput.value);
      // console.log("guess",guess);
      if (isNaN(guess) || guess <= 0 ) {
        finalResult.innerHTML = "Enter a valid value"
       
        
      }
      else if (randomNumber < guess) {
        finalResult.innerHTML = "Too High"
      }
     
      else if(randomNumber > guess){
        finalResult.innerHTML = "Too Low"
      }
      else {
        finalResult.innerHTML = "Correct"
       
      }
      
      previousGuesses--
      // decrease value by 1
     
     
      
    
    if (previousGuesses <= 0) {
      previous.innerHTML = `Number was : ${randomNumber}`
      attempt.innerHTML = "You dont have any attempts left";
      button.disabled = true;
      finalResult.innerHTML = "";
      // console.log(previousGuesses);
     
    } 
    else if(guess > 100){
      finalResult.innerHTML = "Number should be 1 - 100"
    }
    
    else{
     
      previous.innerHTML = `your guess :  ${guess}`
      attempt.innerHTML = `Attempts left : ${previousGuesses}`
    }

    
      
    });
  }
    
     
});
