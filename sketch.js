// Replace Svgs with smaller files
// Automatic Canvas resize when window changes size
// Smaller Canvas, Relative Position
// Fix Button and Change Landing Page
// Fix Grammar, rewrite part of story
// Test on phone (mobile accessibility)



let mySound;
let elemScrollHeight;

function preload() {
  mySound = loadSound('Masked Rider.mp3');
}


function setup() {
canvas = createCanvas(windowWidth, 4500)
canvas.position(0, 0);
canvas.style('z-index', -1)


}

function draw() {
  var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  console.log(scrollTop)
  redder = map(scrollTop, 0, 2300, 255, 0)
  background(redder);

}


function showDiv() {
document.getElementById('welcomeDiv').style.display = "block";
mySound.rate(4)
mySound.amp(0.2)
mySound.loop()
var element = document.getElementById("button");
    element.parentNode.removeChild(element);
var cheetos = document.getElementById("cheetos");
    element.parentNode.removeChild(cheetos);
}



let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  rater = map(scroll_pos, 0, 3500, 4, 0.001)
  volume = map(scroll_pos, 0, 3500,  0.1, 0.7)
  
  if(mySound.isPlaying()){
    mySound.rate(rater)
    mySound.amp(volume)
    console.log('rater' + rater)
  }
  
  // Do something with the scroll position
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});

