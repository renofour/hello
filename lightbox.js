document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxClose = document.getElementById("lightboxClose");
  const lightboxImagesContainer = document.querySelector(".lightbox-images");

  // Open lightbox
  window.addEventListener("message", (event) => {
    if (event.data.type === "openLightbox") {
      const src = event.data.src;

      // Clear old images
      lightboxImagesContainer.innerHTML = "";

      // Find all images with the same src group
      const group = images.find((g) =>
        g.some((img) => img.src === src)
      );

      if (group) {
        group.forEach((img) => {
          const el = document.createElement("img");
          el.src = img.src;
          el.alt = img.alt || "";
          el.classList.add("lightbox-img");
          lightboxImagesContainer.appendChild(el);
        });
      } else {
        // fallback: just load the clicked one
        const el = document.createElement("img");
        el.src = src;
        el.classList.add("lightbox-img");
        lightboxImagesContainer.appendChild(el);
      }

      lightbox.style.display = "block";
    }
  });

  // Close lightbox
  lightboxClose.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  // Close on background click
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
});
