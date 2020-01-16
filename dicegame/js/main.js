/*const diceRoll = Math.floor( Math.random() * 6 ) + 1;  // Randomize a decimal number between 0...5.9999, round down to the nearest whole (0-5), then add 1 (1-6)
console.log(`You rolled: ${diceRoll}`);  // Output the number to the browser's console
// ^^^ IGNORE EVERYTHING ABOVE HERE, START BELOW ^^^


/*** DOM OUTPUT LAB ***
A variable stored as "diceRoll" has been defined as a Number between 1 and 6.
Use Javscript to manipulate your static HTML/CSS prototype to display the
random dice roll to the user every time the page is refreshed. Specifically:

   - The diceRoll number is shown to the user each time
   - The image is built using the diceRoll number so it matches the number


//let testRoll = 500;


// Get html
const diceValue = document.getElementById(`rollOutput`);  
// edit the html
diceValue.innerHTML = `You rolled: ${diceRoll}`;

// Change image

// get html
const changeDiceImg = document.getElementById(`diceImg`);

//edit html
changeDiceImg.innerHTML = `<img src="img/dice${diceRoll}.svg" alt=""></img>`


if (diceRoll > 5) {
   let outputMessage = "You Win!!";
   const diceValue = document.getElementById(`rollOutput`);  
   diceValue.innerHTML = `You rolled: ${diceRoll}. ${outputMessage}`;
 }

*/

 const diceRoll = (event) => {
   const diceRoll = Math.floor( Math.random() * 6 ) + 1;  // Randomize a decimal number between 0...5.9999, round down to the nearest whole (0-5), then add 1 (1-6)
   console.log(`You rolled: ${diceRoll}`);
   const diceValue = document.getElementById(`rollOutput`);  
   // edit the html
   diceValue.innerHTML = `You rolled: ${diceRoll}`;
   
   // Change image
   
   // get html
   const changeDiceImg = document.getElementById(`diceImg`);
   
   //edit html
   changeDiceImg.innerHTML = `<img src="img/dice${diceRoll}.svg" alt=""></img>`
   
   
   if (diceRoll === 6) {
      let outputMessage = "You Win!!";
      const diceValue = document.getElementById(`rollOutput`);  
      diceValue.innerHTML = `You rolled: ${diceRoll}. ${outputMessage}`;
    }
    const changeButtonText = document.getElementById(`reRoll`);
    changeButtonText.innerHTML = 'Reroll';
    
   }


  document.getElementById('reRoll').addEventListener(`click`, diceRoll);


