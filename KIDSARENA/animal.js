for(var i=0;i<document.querySelectorAll(".animal").length;i++)document.querySelectorAll(".animal")[i].addEventListener("click",function(){var n=this.innerHTML;makeSound(n),buttonAnimation(n)});function makeSound(n){switch(n){case"c":new Audio("sound/animal-sound/cow.wav").play();break;case"d":new Audio("sound/animal-sound/dog.mp3").play();break;case"e":new Audio("sound/animal-sound/elephant.mp3").play();break;case"f":new Audio("sound/animal-sound/frog.mp3").play();break;case"g":new Audio("sound/animal-sound/goat.m4a").play();break;case"l":new Audio("sound/animal-sound/lion.mp3").play();break;case"m":new Audio("sound/animal-sound/monkey.wav").play();break;case"p":new Audio("sound/animal-sound/panther.mp3").play();break;case"w":new Audio("sound/animal-sound/wolf.mp3").play();break;default:console.log(buttonInnerHTML)}}function buttonAnimation(n){var a=document.querySelector("."+n);a.classList.add("pressed"),setTimeout(function(){a.classList.remove("pressed")},150)}document.addEventListener("keydown",function(n){makeSound(n.key),buttonAnimation(n.key)});