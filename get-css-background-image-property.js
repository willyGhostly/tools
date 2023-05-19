// Create an object to store the results
let results = [];
let classToGets = 'swiper-slide-bg';
let message = 'Henry, las imágenes de aquí hacia abajo son las que debes descargar.';

// Get all elements with the class ".swiper-slide-bg"
let elements = document.querySelectorAll(`.${classToGets}`);

// Loop through the elements and extract the background image URLs
for (let i = 0; i < elements.length; i++) {
  let element = elements[i];
  let style = window.getComputedStyle(element);
  let backgroundImage = style.getPropertyValue('background-image');

  // Extract the URL of the background image
  let url = backgroundImage.replace(/url\(['"]?(.*?)['"]?\)/i, '$1');

  // Store the URL in the results object
  results.push(url);
}

// Remove duplicates from the results object
let uniqueResults = [...new Set(results)];

// Create the container <div>
let container = document.createElement('div');

// Create the title
let title = document.createElement('h2');
title.textContent = message;

// Add the title and images to the container
container.appendChild(title);

// Loop through the unique URLs and create <img> elements
uniqueResults.forEach(function(url) {
  let image = document.createElement('img');
  image.src = url;
  container.appendChild(image);
});

// Move the container to the end of the <body>
document.body.appendChild(container);

// Scroll the body to the container (title position)
title.scrollIntoView();
