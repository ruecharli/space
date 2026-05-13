// Function to create multiple stars
function createStars() {
  const numberOfStars = 200; // Adjust for more or fewer stars
  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    // Random size, position, and animation duration for each star
    const size = Math.random() * 3;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.animationDuration = `${Math.random() * 2 + 8}s`;
    
    document.body.appendChild(star);
  }
}

createStars();
