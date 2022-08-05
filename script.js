var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;

function jump() {
  if(character.classList == "animate") {return}
    character.classList.add("animate");
  setTimeout(function(){
    character.classList.remove("animate");
  }, 300);
}

var checkDead = setInterval(function() {
  let charTop = parseInt(window.getComputedStyle(character).getPropertyValue("top")); // return top position of character.
  let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left")); // return top position of character.


  if (blockLeft < 20 && blockLeft > -20 && charTop >= 130) {
    block.style.animation = "none";
    // block.style.display = "none";
    alert("L..... Do better. Score: " + Math.floor(counter/100));
    counter = 0;
    block.style.animation = "block 1s infinite linear";
    location.reload();
  } else {
    counter++;
    document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
  }
}, 10);
        
    
  


