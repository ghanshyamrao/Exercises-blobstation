// Array of image filenames
const images = ['./img1.jfif','./img2.jfif','./img3.jfif','./img4.jfif'];

// Array of image text
const imageText = ["Image 1", "Image 2", "Image 3"];

let currentImage = 0;

// Show previous picture function
function show_previous_picture() {
  currentImage--;
  if (currentImage < 0) {
    currentImage = images.length - 1;
  }
  update_picture();
}

// Show next picture function
function show_next_picture() {
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  }
  update_picture();
}

// Shrink picture function
function shrink_picture() {
  let image = document.getElementById("image");
  let width = image.width;
  if (width > 100) {
    image.width = width - 100;
  }
}

// Enlarge picture function
function enlarge_picture() {
  let image = document.getElementById("image");
  let width = image.width;
  image.width = width + 100;
}

// Update picture function
function update_picture() {
  let image = document.getElementById("image");
  let imageTextElement = document.getElementById("image-text");
  image.src = images[currentImage];
  imageTextElement.innerText = imageText[currentImage];
}

// Advance to next picture on image click
document.getElementById("image").addEventListener("click", show_next_picture);
