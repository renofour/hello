document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('lightbox');
  const imagesWrapper = document.querySelector('.lightbox-images');
  const closeBtn = document.getElementById('lightboxClose');
  const imagesContainer = document.querySelector('.lightbox-images-container');
  const lightboxContainer = document.querySelector('.lightbox-container');
  const textPanel = document.querySelector('.lightbox-text');

  // helpers
  function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }

  // Compute and set the white-box width based on the first image natural size
  function setBoxWidthFromFirstImage(img) {
    if (!img || !imagesContainer || !lightboxContainer) return;
    const containerMax = Math.min(1400, window.innerWidth * 0.9); // matches .lightbox-container css
    const styleContainer = window.getComputedStyle(imagesContainer);
    const paddingLeft = parseFloat(styleContainer.paddingLeft) || 30;
    const paddingRight = parseFloat(styleContainer.paddingRight) || paddingLeft;
    const gap = parseFloat(window.getComputedStyle(lightboxContainer).gap) || 20;
    const textWidth = parseFloat(window.getComputedStyle(textPanel).width) || 250;

    // maximum total width available for images box (including its padding)
    const maxBoxTotal = Math.max(200, containerMax - textWidth - gap);

    // desired width for the image display area (inside padding)
    let desiredImageDisplayWidth = img.naturalWidth || img.width || (maxBoxTotal - paddingLeft - paddingRight);
    desiredImageDisplayWidth = Math.min(desiredImageDisplayWidth, maxBoxTotal - paddingLeft - paddingRight);

    // ensure a sensible minimum (so tiny images don't create a tiny box)
    const minContentWidth = 200 - paddingLeft - paddingRight;
    if (desiredImageDisplayWidth < minContentWidth) desiredImageDisplayWidth = Math.max(desiredImageDisplayWidth, minContentWidth);

    const finalBoxTotal = clamp(desiredImageDisplayWidth + paddingLeft + paddingRight, 200, maxBoxTotal);

    imagesContainer.style.width = finalBoxTotal + 'px';
  }

  // Open lightbox with list (group) of image URLs
  function openLightboxWithGroup(group) {
    if (!Array.isArray(group) || group.length === 0) return;
    // clear previous
    imagesWrapper.innerHTML = '';
    imagesContainer.style.width = ''; // reset to auto while images load

    // create image elements
    group.forEach((src, idx) => {
      const img = document.createElement('img');
      img.className = 'lightbox-img';
      img.src = src;
      img.alt = '';
      if (idx !== 0) img.loading = 'lazy';
      imagesWrapper.appendChild(img);

      if (idx === 0) {
        // when first image loads, set the box width based on its natural size
        img.addEventListener('load', () => {
          setBoxWidthFromFirstImage(img);
        }, { once: true });

        // fallback if image already loaded from cache
        if (img.complete && img.naturalWidth) {
          setBoxWidthFromFirstImage(img);
        }
      }
    });

    // show lightbox
    lightbox.style.display = 'block';
    // reset scroll top of images container to ensure first image visible
    imagesContainer.scrollTop = 0;
    // disable background scroll
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.style.display = 'none';
    imagesWrapper.innerHTML = '';
    imagesContainer.style.width = '';
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
  }

  // Listen for messages from iframe (work gallery)
  window.addEventListener('message', (ev) => {
    if (!ev.data) return;
    const msg = ev.data;
    if (msg.type === 'openLightbox') {
      const clickedSrc = msg.src;
      // Find the matching image object in the global images array (images.js)
      let imgObj = null;
      if (window.images && Array.isArray(window.images)) {
        imgObj = window.images.find(i => i.src === clickedSrc || (i.group && i.group.includes(clickedSrc)));
      }

      // Prefer the explicit group defined on the clicked image.
      let groupToShow = null;
      if (imgObj && Array.isArray(imgObj.group) && imgObj.group.length > 0) {
        groupToShow = imgObj.group.slice(); // use group's order
      } else {
        // fallback: show the clickedSrc only
        groupToShow = [clickedSrc];
      }

      openLightboxWithGroup(groupToShow);
    }
  });

  // close handlers
  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.style.display === 'block') closeLightbox();
  });

  // recompute box width on resize if lightbox open (use first image)
  window.addEventListener('resize', () => {
    if (lightbox.style.display !== 'block') return;
    const firstImg = imagesWrapper.querySelector('.lightbox-img');
    if (firstImg) {
      // if the image is loaded, adjust immediately; otherwise wait a bit
      if (firstImg.naturalWidth) {
        setBoxWidthFromFirstImage(firstImg);
      } else {
        // small timeout to allow image decode
        setTimeout(() => {
          if (firstImg.naturalWidth) setBoxWidthFromFirstImage(firstImg);
        }, 150);
      }
    }
  });
});
