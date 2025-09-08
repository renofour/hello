let currentLightboxImages = [];
let currentImageIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxContainer = document.querySelector('.lightbox-container');
  const lightboxImagesContainer = document.querySelector('.lightbox-images-container');
  const lightboxText = document.querySelector('.lightbox-text-inner');
  const lightboxNavPrev = document.createElement('button');
  const lightboxNavNext = document.createElement('button');

  // Add navigation buttons for the lightbox
  lightboxNavPrev.className = 'lightbox-nav-prev';
  lightboxNavPrev.innerHTML = '&#10094;';
  lightboxNavNext.className = 'lightbox-nav-next';
  lightboxNavNext.innerHTML = '&#10095;';

  lightboxContainer.appendChild(lightboxNavPrev);
  lightboxContainer.appendChild(lightboxNavNext);

  window.addEventListener('message', function(event) {
    if (event.data.type === 'openLightbox') {
      currentLightboxImages = getLightboxImages(event.data.src);
      currentImageIndex = 0;

      if (currentLightboxImages.length > 0) {
        lightboxImg.src = currentLightboxImages[currentImageIndex].src;
        lightboxText.textContent = currentLightboxImages[currentImageIndex].text;
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
          const paddingPercentage = 2.5;
          const containerWidth = lightboxImagesContainer.clientWidth;
          const containerHeight = lightboxImagesContainer.clientHeight;

          const paddingHorizontal = containerWidth * (paddingPercentage / 100);
          const paddingVertical = containerHeight * (paddingPercentage / 100);

          lightboxImagesContainer.style.padding =
            `${paddingVertical}px ${paddingHorizontal}px`;
        };
      }

      const imagesContainer = document.querySelector('.lightbox-images-container');
      if (imagesContainer) {
        imagesContainer.scrollTop = 0;
      }
    }
  });

  lightboxClose.onclick = function() {
    lightbox.style.display = 'none';
  };

  lightboxNavPrev.onclick = function() {
    if (currentLightboxImages.length > 0) {
      currentImageIndex = (currentImageIndex - 1 + currentLightboxImages.length) % currentLightboxImages.length;
      lightboxImg.src = currentLightboxImages[currentImageIndex].src;
      lightboxText.textContent = currentLightboxImages[currentImageIndex].text;
    }
  };

  lightboxNavNext.onclick = function() {
    if (currentLightboxImages.length > 0) {
      currentImageIndex = (currentImageIndex + 1) % currentLightboxImages.length;
      lightboxImg.src = currentLightboxImages[currentImageIndex].src;
      lightboxText.textContent = currentLightboxImages[currentImageIndex].text;
    }
  };

  window.onclick = function(event) {
    if (event.target === lightbox) {
      lightbox.style.display = 'none';
    }
  };
});
