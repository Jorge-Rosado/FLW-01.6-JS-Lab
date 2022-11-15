
// task 1: declare your selector variables for tiles 1-9. There should be 9 variables total.
let tileOne = document.querySelector(".tile1")
let tileTwo = document.querySelector(".tile2")
let tile2Button = document.querySelector(".tile2Button")
let tileThree = document.querySelector(".tile3")
let tileFour = document.querySelector(".tile4")
let tileFive = document.querySelector(".tile5")
let tileSix = document.querySelector(".tile6")
let tileSeven = document.querySelector(".tile7")
let tileEight = document.querySelector(".tile8")
let tileNine = document.querySelector(".tile9")


/********* NOTE: unsure which tile is which? Be sure to reference the HTML when you need to double-check! ************/


// task 2: tile 1 feels a little sad. Update the inner HTML to show an encouraging message! Something like "YOU GOT THIS!" or even a "You're a beautiful person!" 
tileOne.innerHTML = ("YOU GOT THIS!")

// task 3: tile 2 has a button. Create a click event and have the background color of tile 2 change to a shade of green.BE SURE TO SAVE THE BUTTON FIRST AS A VARIABLE.Can you see if there's a way to toggle it???
tile2Button.onclick = function(){
  tileTwo.style = "background-color: green"
}

// task 4: what's this? A totoro? Where's his friends? Using either appendChild or insertAdjacentHTML, add a friend to tile 3. Need some inspiration? Go to giphy.com, search a character and choose the "stickers".

tileThree.insertAdjacentHTML("beforeend", "https://media.giphy.com/media/rkFQ8LrdXcP5e/giphy.gif"

// task 5: Oh no! A broken image! We need to fix this - update the src for tile 4 to have an image of your favorite TV show.




/*******These following tasks may require a little bit of digging. Unsure how to complete the task? Use your resources! Code Nation reference table might help. Can't find it there? Google search the keywords of what you're trying to do and use web dev documentation! W3schools, MDN Web Docs, and Stack Overflow all super reliable 😊*********/


// task 6: Hmm. Looks like the font is too small. Update the font-size of tile 5 to 35 pixels.


// task 7: Another sad box! Let make this tile 6 feel special and add a gradient background! What kind of gradient? What color? YOU CHOOSE!

// task 8: Too many squares. Let's change tile 7 to have rounded edges - be sure to search for which CSS property does this :)

// task 9: task 9: Replace the image with your favorite emoji. Try going to this site to search: https://emojipedia.org/

// task 10: Display a random number in the tile when the button is clicked.BE SURE TO SAVE THE BUTTON FIRST AS A VARIABLE.



