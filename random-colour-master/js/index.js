/* APPROACHING TO PROBLEM SOLVING A CODE CHALLENGE

**Goal:** Design an interface with a button that when clicked, will randomly set a background colour to the document's body. Remember there are >16M colours available on the standard RGB scale, with each colour consisting of an R, G and B in 256 different shades (0 to 255, in decimal).

The best way to solve a challenge/goal like this is to think of this as a design challenge first. Remove the "code" from the equation. Code is the implementation of the solution; The problem must be analyzed, dissected, planned and proven/tested before becoming a viable solution. 

Start by determining the major (macro) steps that will work toward solving the goal. Then, break down the macro steps into smaller (micro) steps that are more manageable. The micro steps will be solved with code and will come together to solve the macro steps. 

Test each micro solution in isolation and independent of the macro solution when possible. The more often you test, the less likely something can break and be difficult to track down.

Let's start with one of the macro steps...
*/


// MACRO STEP: 
//   Generate a random RGB number
// MICRO STEPS:
//   1. Use the browser's "Inspect" tool to ensure that applying an rgb() style to the body will 
//   2. Randomize a number between 0-255 (this will be red)
//   3. Test by putting the number in the console and refreshing repeatedly
//   4. Randomize 2 more numbers for green and blue
//   5. Put them in the console to ensure they're not the same, refresh repeatedly
//   6. Format the number into a string and test in the console: rgb(#, #, #)

//let colourRed =   Math.floor(Math.random() * 256);
//let colourGreen = Math.floor(Math.random() * 256);
//let colourBlue =  Math.floor(Math.random() * 256);


//console.log(`r(${colourRed})`);
//console.log(`g(${colourGreen})`);
//console.log(`b(${colourBlue})`);


//let colourR = Math.floor(Math.random() * 256);
//let colourG = Math.floor(Math.random() * 256);
//let colourB = Math.floor(Math.random() * 256);

//console.log(`Your rgb value is: rgb(${colourRed}, ${colourGreen}, ${colourBlue})`);
//console.log(`rgb(${colourR}, ${colourG}, ${colourB})`);

/*  Breakdown of the random number code (the right side of = assignment):
- Math.random()
    Generates a random decimal number between 0 and 1 (aka, a percentage! 0.5 == 50%)
- Math.random() * 256
    Multiplies the random percentage by 256 (aka, a percent of 256 possible options)
- Math.floor(Math.random() * 256)
    Round the resulting number down (aka, floor! Note: "ceil" will round up) to create options 0-255
*/

//document.getElementById();



// NEXT STEPS
// - Determine the remaining macro steps, write them out!
// - Once determined, break each step down into micro steps
// - Test each macro solution in isolation (console output helps)
// - Begin to combine the steps together to create a final solution (test as you go!)


// make button click change the colour
// make text colour change based on button press
// get the 3 var values and assign them to a string which will be the RGB value

//1) generate a string of 3 random channels: rgb(#, #, #)

//2) modify the body's background colour


// reference to the location of the body within the doc

//text content vs innerHTML
// bodyElement.style

//let bodyElement =  document.querySelector('body');

//bodyElement.style.backgroundColor = `rgb(${colourR}, ${colourG}, ${colourB})`;




//3) capture button click

//document.getElementById(`btnnorth`).addEventListener(`click`, filterByNorth);

const changeColourFunction = (event) => {
   // const showNorthCountries = countries.filter (country => country.location == `North`);
   // printCountriesToList(showNorthCountries);

   let bodyElement =  document.querySelector('body');

    let colourR = Math.floor(Math.random() * 256);
    let colourG = Math.floor(Math.random() * 256);
    let colourB = Math.floor(Math.random() * 256);
    console.log(`background rgb(${colourR}, ${colourG}, ${colourB})`);

bodyElement.style.color = `rgb(${colourR}, ${colourG}, ${colourB})`;
bodyElement.style.backgroundColor = `rgb(${colourG}, ${colourR}, ${colourB})`;
    
  }


document.getElementById('colourChange').addEventListener(`click`, changeColourFunction);