var typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer", "Software Developer", "Backend Developer", "Java Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");
let isMouseInside = false;

circles.forEach(function(circle) {
  circle.x = 0;
  circle.y = 0;
  circle.style.opacity = 0; // hidden initially
});

// track mouse position
window.addEventListener("mousemove", function(e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
  isMouseInside = true; // mouse inside
});

// hide when mouse leaves window
window.addEventListener("mouseleave", function() {
  isMouseInside = false; // mouse outside
});

// animation loop
function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function(circle, index) {
    circle.style.left = (x - 12) + "px";
    circle.style.top = (y - 12) + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    // show/hide circles depending on mouse
    circle.style.opacity = isMouseInside ? 1 : 0;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

// start animation loop
animateCircles();




//Skill Animation 

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach(el => observer.observe(el));


