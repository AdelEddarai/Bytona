const images = document.querySelectorAll('.slider-images img');
const thumbnails = document.querySelectorAll('.slider-thumbnails img');

function showImage(index) {
  images.forEach(image => image.classList.remove('active'));
  thumbnails.forEach(thumbnail => thumbnail.classList.remove('active'));
  images[index].classList.add('active');
  thumbnails[index].classList.add('active');
}

showImage(0); // Show the first image by default
