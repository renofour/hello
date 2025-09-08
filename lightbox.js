document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxContainer = document.querySelector('.lightbox-container');
  const lightboxImagesContainer = document.querySelector('.lightbox-images-container');

  window.addEventListener('message', function(event) {
    if (event.data.type === 'openLightbox') {
      lightboxImg.src = event.data.src;
      lightbox.style.display = 'block';

      // Reset classes and padding
      lightboxContainer.classList.remove('landscape', 'portrait');
      lightboxImagesContainer.style.padding = '0';

      // Wait for the image to load
      lightboxImg.onload = function() {
        const isLandscape = this.naturalWidth > this.naturalHeight;
        if (isLandscape) {
          lightboxContainer.classList.add('landscape');
        } else {
          lightboxContainer.classList.add('portrait');
        }

        // Calculate and set dynamic padding
        const paddingPercentage = 10; // Adjust this value to control the amount of white space
        const containerWidth = lightboxImagesContainer.clientWidth;
        const containerHeight = lightboxImagesContainer.clientHeight;

        // Calculate padding to center the image with consistent white space
        const paddingHorizontal = containerWidth * (paddingPercentage / 100);
        const paddingVertical = containerHeight * (paddingPercentage / 100);

        lightboxImagesContainer.style.padding =
          `${paddingVertical}px ${paddingHorizontal}px`;
      };

      const imagesContainer = document.querySelector('.lightbox-images-container');
      if (imagesContainer) {
        imagesContainer.scrollTop = 0;
      }
    }
  });

  lightboxClose.onclick = function() {
    lightbox.style.display = 'none';
  };

  window.onclick = function(event) {
    if (event.target === lightbox) {
      lightbox.style.display = 'none';
    }
  };
});
