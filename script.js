function spinWheel() {
  const wheel = document.querySelector('.wheel');
  const sections = document.querySelectorAll('.section');
  const resultTextbox = document.getElementById('result');

  // Generate a random degree for the wheel to spin
  const randomDegree = Math.floor(Math.random() * 360);

  // Set the rotation for each section
  sections.forEach((section, index) => {
    const rotateValue = randomDegree + index * (360 / sections.length);
    section.style.transform = `rotate(${rotateValue}deg)`;
  });

  // Disable the button during the spin
  document.querySelector('button').disabled = true;

  // Add a transition end event listener to reset the button and remove the transition effect
  wheel.addEventListener('transitionend', () => {
    document.querySelector('button').disabled = false;
    wheel.style.transition = 'none';
    setTimeout(() => {
      wheel.style.transition = 'transform 2s cubic-bezier(0.17, 0.67, 0.83, 0.67)';
    });
    // Calculate and display the result section number
    const resultSection = Math.floor(((randomDegree + 1800) % 360) / (360 / sections.length)) + 1;
    resultTextbox.value = `Result: ${resultSection}`;
  });

  // Start the spin (twice as fast for 5 seconds)
  wheel.style.transition = 'transform 5s cubic-bezier(0.17, 0.67, 0.83, 0.67)';
  wheel.style.transform = `rotate(${randomDegree + 3600}deg)`;
}
