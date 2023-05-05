
// Detecting Button Press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
       var buttonHTML = this.textContent;

       makeSound(buttonHTML);

       buttonAnimation(buttonHTML)

    });
}

// Detecting Keyboard Press
document,addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;

        case "a":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;
        case "s":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break; 
        case "d":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;
        case "j":
            var kick = new Audio("sounds/kick.mp3");
            kick.play();
        break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;
        case "l":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        default: console.log(buttonHTML);
       }
}

// alternative solution
// var buttons = document.querySelectorAll(".drum");

// for (var i = 0; i < buttons.length; ++i)
//   buttons[i].addEventListener("click",handleClick);

// var sounds = {
//   w: "sounds/tom-1.mp3",
//   a: "sounds/tom-4.mp3",
//   s: "sounds/tom-3.mp3",
//   d: "sounds/tom-2.mp3",
//   j: "sounds/snare.mp3",
//   k: "sounds/kick-bass.mp3",
//   l: "sounds/crash.mp3"
// };

// function handleClick(Event){
//   if (sounds.hasOwnProperty(this.innerText))
//     (new Audio(sounds[this.innerText])).play();
// }

// animating the buttons
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}