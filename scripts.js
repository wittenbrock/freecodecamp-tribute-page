let carousel = () => {

  let images = document.getElementsByClassName('slide-image');

  for (let i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
  }

  slideIndex++;

  if (slideIndex > images.length) { slideIndex = 1; }

  images[slideIndex - 1].style.display = 'block';
  setTimeout(carousel, 3000);
};

let slideIndex = 0;
carousel();
