// get the total number of buttons
var numOfButtons = document.querySelectorAll(".drum").length;

// function that will switch through varoius keys pressed and play sound associated to that key
function switchStatement (key) {

        switch (key) {
            case 'w':
                var audio = new Audio("sounds/crash.mp3");
                audio.play();    
                break;
            case 'a':
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();    
                break;
            case 's':
                var audio = new Audio("sounds/snare.mp3");
                audio.play();    
                break;
            case 'd':
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();    
                break;
            case 'j':
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();    
                break;
            case 'k':
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();    
                break;
            case 'l':
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();    
                break;
        
            default:
                break;
        }
}

// loop through every button adding event listener
for(var i = 0; i < numOfButtons; i++){

    // adding event listener for click
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // get the specific button
        var buttonInnerHTML = this.innerHTML;
        // call the function to play the sound depending on mouse click.
        switchStatement(buttonInnerHTML);
        // call the function that adds animation to the button
        addingAnimation(buttonInnerHTML);
       
    });
   
}
// adding keydown event listener for keyboard press
document.addEventListener("keydown", function (event) {
    // call the function to play sound depending on keyboard key pressed.
    switchStatement(event.key);
    // call the function that adds animation to the button
    addingAnimation(event.key);
});

// function to add animation to the buttons
function addingAnimation(currentButton){
    // get the specific button
    var activeButton = document.querySelector("." + currentButton);
    // add class to the button
    activeButton.classList.add("pressed");
    // adding timeout to remove the annimation effect
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 200);
}