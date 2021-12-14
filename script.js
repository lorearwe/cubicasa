
/* The script wroks as follows:
Line drawing is on top of colored picture,
using CSS clip, the line drawing will only show a portion.
To keep things in place, the offset adjusts the circle position
even if the window is resized
Inspiration from @kathykato
Modified by @lorearwe */

const circleClip = document.querySelector('#blueprint');

/* Setting dynamic window resize */
let offsetX =  document.querySelector('.wrapper').offsetLeft;

function updateOffset(){
  offsetX =  document.querySelector('.wrapper').offsetLeft;
}
window.onresize = updateOffset;


/* Magic circle */
function circleMove(e) {
  circleClip.classList.add('active');
  circleClip.style.setProperty('--x', (e.clientX - offsetX)  + 'px');
  circleClip.style.setProperty('--y', (e.clientY - 45) + 'px');
}

document.addEventListener('mousemove', circleMove);
circleClip.addEventListener('touchmove', (e) => {
  let touch = e.touches[0];
  e.preventDefault();
  circleClip.style.setProperty('--x', touch.clientX + 'px');
  circleClip.style.setProperty('--y', touch.clientY + 'px');
});

/* Spicing up lightbox animation */
function animationTrigger(){
  let logo = document.getElementById('logo');
  let brand = document.getElementById('brand');
  if (logo.style.display === "none") {
    logo.style.display = "block";
    window.setTimeout(function(){
      logo.style.opacity = 1;})
    } else {
      logo.style.display = "none";
      logo.style.opacity = 0;
      window.setTimeout(function(){
        logo.style.display = 'none';
      },700)
    }
    if (brand.style.display === "block") {
      brand.style.display = "none";
      brand.style.opacity = 0;
      window.setTimeout(function(){
        brand.style.display = 'none';
      },700)
    } else {
      brand.style.display = "block";
      brand.style.display = "block";
      window.setTimeout(function(){
        brand.style.opacity = 1;})
      }
    }
    window.addEventListener('click',() => {
      animationTrigger();
    });
