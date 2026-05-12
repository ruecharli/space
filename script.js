// Function to create multiple stars
function createStars() {
  const numberOfStars = 100; // Adjust for more or fewer stars
  let scwidth = screen.width;
  let scheight = screen.height;
  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    // Random size, position, and animation duration for each star
    const size = Math.random() * 3 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * scwidth}px`;
    star.style.top = `${Math.random() * scheight}px`;
    star.style.animationDuration = `${Math.random() * 2 + 1}s`;
    
    document.body.appendChild(star);
  }
}

createStars();
