var m=document.querySelectorAll(".drum").length;

// Detecting clicking
for(var n=0;n<m;n++){
document.querySelectorAll(".drum")[n].addEventListener("click",function (){
  var writtenLetter = this.innerHTML;
  makeSound(writtenLetter);
  animation(writtenLetter);
}
);}

document.addEventListener("keydown", function(event){

  makeSound(event.key);
  animation(event.key);
});

// Detecting keyboard pressing
function makeSound(buttonLetter)
{
  switch (buttonLetter) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(buttonLetter);

  }
}

function animation(currentkey){
  var letter= document.querySelector("."+currentkey);
  letter.classList.add("pressed");
  setTimeout(function(){letter.classList.remove("pressed")},100);


}
