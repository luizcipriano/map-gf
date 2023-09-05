// for desktop
function animateDesk(){
  // Select the SVG elements and the animated element
const startPoint = document.getElementById('France');
const endPoint = document.getElementById('Brazil');
const animatedElement = document.getElementById('plane');
const animationDurationInSeconds = 104 * 24 * 60 * 60;
// Calculate the coordinates of the start and end points
const startRect = startPoint.getBoundingClientRect();
const endRect = endPoint.getBoundingClientRect();


console.log(startRect, endRect);
// Create a GSAP timeline for the animation
const tl = gsap.timeline();

// Define the animation
tl.to(animatedElement, {
  duration: 20, // Animation duration in seconds
  x: 200 + endRect.left - startRect.left, // Change in X position
  y: 50 +endRect.top - startRect.top, // Change in Y position
  ease: 'linear',
  repeat: -1, // Set to -1 for infinite loop
});

  tl.play();
}
function animateMinor(){
  // Select the SVG elements and the animated element
const startPoint = document.getElementById('France');
const endPoint = document.getElementById('Brazil');
const animatedElement = document.getElementById('plane');
const animationDurationInSeconds = 104 * 24 * 60 * 60;
// Calculate the coordinates of the start and end points
const startRect = startPoint.getBoundingClientRect();
const endRect = endPoint.getBoundingClientRect();


console.log(startRect, endRect);
// Create a GSAP timeline for the animation
const tl = gsap.timeline();

// Define the animation
tl.to(animatedElement, {
  duration: 20, // Animation duration in seconds
  x:  50 + endRect.left - startRect.left , // Change in X position
  y:  200+ endRect.top - startRect.top, // Change in Y position
  ease: 'linear',
  repeat: -1, // Set to -1 for infinite loop
});

  tl.play();
}


// Function to check if the screen size matches the media query condition
function checkScreenSize() {
  const mediaQuery = window.matchMedia('(max-width: 1400px)');

  if (mediaQuery.matches) {
      // The screen size matches the media query (small screen)
      // Execute code specific to small screens
      animateMinor();
  } else {
      // The screen size does not match the media query (large screen)
      // You can add code for large screens here if needed
     animateDesk()
  }
}

// Run the checkScreenSize function when the page loads
window.addEventListener('load', checkScreenSize);

// Listen for changes in screen size and re-run checkScreenSize when necessary
window.addEventListener('resize', checkScreenSize);


// Function to calculate and update the countdown
function updateCountdown() {
  // Set the target date (December 17)
  const targetDate = new Date('December 17, 2023 00:00:00').getTime();
  
  // Get the current date and time
  const currentDate = new Date().getTime();
  
  // Calculate the remaining time in milliseconds
  const timeRemaining = targetDate - currentDate;
  
  if (timeRemaining > 0) {
      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
      
      // Update the HTML element with the countdown
      const countdownElement = document.getElementById('countdown');
      countdownElement.innerHTML = `
          <p>Contagem regressiva até 17 de dezembro:</p>
          <p>${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos</p>
      `;
  } else {
      // Display a message when the countdown is complete
      const countdownElement = document.getElementById('countdown');
      countdownElement.innerHTML = "Countdown is over!";
  }
}

// Call the updateCountdown function to start the countdown
updateCountdown();

// Update the countdown every second
setInterval(updateCountdown, 1000);