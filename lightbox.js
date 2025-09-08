document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxContainer = document.querySelector('.lightbox-container');

  window.addEventListener('message', function(event) {
    if (event.data.type === 'openLightbox') {
      lightboxImg.src = event.data.src;
      lightbox.style.display = 'block';

      // Reset classes
      lightboxContainer.classList.remove('landscape', 'portrait');

      // Wait for the image to load
      lightboxImg.onload = function() {
        const isLandscape = this.naturalWidth > this.naturalHeight;
        if (isLandscape) {
          lightboxContainer.classList.add('landscape');
        } else {
          lightboxContainer.classList.add('portrait');
        }
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
