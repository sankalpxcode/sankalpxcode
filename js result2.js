// Create an "About Us" link dynamically
const aboutLink = document.createElement('a');
aboutLink.href = 'about.html';
aboutLink.innerText = 'About Us';
aboutLink.classList.add('about-link'); // You can style this in your CSS
citiesContainer.appendChild(aboutLink);

window.location.href = 'next.html';
