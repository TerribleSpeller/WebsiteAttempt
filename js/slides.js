document.addEventListener('DOMContentLoaded', () => {
  const charCarousel = document.querySelector('.charCarousel');
  let carouselIndex = 0;
  
  document.querySelector('#coolButtonsRight').addEventListener('click', () => {
    if (carouselIndex >= charCarousel.children.length - 1) {
      return;
    }  
    carouselIndex++;
    charCarousel.style.transform = `translateX(-${100 * carouselIndex}%)`;
  });

  document.querySelector('#coolButtonsLeft').addEventListener('click', () => {
    if (carouselIndex >= charCarousel.children.length - 1) {
      return;
    }
    carouselIndex--;
    charCarousel.style.transform = `translateX(-${100 * carouselIndex}%)`;
  });
});