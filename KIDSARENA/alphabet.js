for(var i=0;i<document.querySelectorAll(".alphabet").length;i++)document.querySelectorAll(".alphabet")[i].addEventListener("click",function(){var a=this.innerHTML;makeSound(a),buttonAnimation(a)});function makeSound(a){switch(a){case"a":new Audio("sound/alphabet-sound/a.mp3").play();break;case"b":new Audio("sound/alphabet-sound/b.mp3").play();break;case"c":new Audio("sound/alphabet-sound/c.mp3").play();break;case"d":new Audio("sound/alphabet-sound/d.mp3").play();break;case"e":new Audio("sound/alphabet-sound/e.mp3").play();break;case"f":new Audio("sound/alphabet-sound/f.mp3").play();break;case"g":new Audio("sound/alphabet-sound/g.mp3").play();break;case"h":new Audio("sound/alphabet-sound/h.mp3").play();break;case"i":new Audio("sound/alphabet-sound/i.mp3").play();break;case"j":new Audio("sound/alphabet-sound/j.mp3").play();break;case"k":new Audio("sound/alphabet-sound/k.mp3").play();break;case"l":new Audio("sound/alphabet-sound/l.mp3").play();break;case"m":new Audio("sound/alphabet-sound/m.mp3").play();break;case"n":new Audio("sound/alphabet-sound/n.mp3").play();break;case"o":new Audio("sound/alphabet-sound/o.mp3").play();break;case"p":new Audio("sound/alphabet-sound/p.mp3").play();break;case"q":new Audio("sound/alphabet-sound/q.mp3").play();break;case"r":new Audio("sound/alphabet-sound/r.mp3").play();break;case"s":new Audio("sound/alphabet-sound/s.mp3").play();break;case"t":new Audio("sound/alphabet-sound/t.mp3").play();break;case"u":new Audio("sound/alphabet-sound/u.mp3").play();break;case"v":new Audio("sound/alphabet-sound/v.mp3").play();break;case"w":new Audio("sound/alphabet-sound/w.mp3").play();break;case"x":new Audio("sound/alphabet-sound/x.mp3").play();break;case"y":new Audio("sound/alphabet-sound/y.mp3").play();break;case"z":new Audio("sound/alphabet-sound/z.mp3").play();break;default:console.log(buttonInnerHTML)}}function buttonAnimation(a){var e=document.querySelector("."+a);e.classList.add("pressed"),setTimeout(function(){e.classList.remove("pressed")},150)}document.addEventListener("keydown",function(a){makeSound(a.key),buttonAnimation(a.key)});