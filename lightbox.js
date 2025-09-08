document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightboxClose');

  window.addEventListener('message', function(event) {
    if (event.data.type === 'openLightbox') {
      lightboxImg.src = event.data.src;
      lightbox.style.display = 'block';
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
