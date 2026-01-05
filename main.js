document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menu');
  const menuToggle = document.getElementById('menuToggle');
  const contentArea = document.getElementById('contentArea');
  const homeBtn = document.getElementById('homeBtn');
  const workItem = document.getElementById('workItem');
  const workBtn = workItem.querySelector('.menu-btn');
  const headerWorkMenu = document.getElementById('headerWorkMenu');
  const sidebarWorkDropdown = workItem.querySelector('.dropdown');

  // The video shown on the "hello" page
  const initialVideoURL = "https://stream.mux.com/q00jL1eCze5gsW3wRIBqDkP4x2xPGlcacZc1FUULt7Jo.m3u8";

  // 1. Populate the Sidebar Work Submenu
  function renderWorkSubmenus() {
    const categories = ["all", "print", "digital", "product design"];
    sidebarWorkDropdown.innerHTML = categories.map(cat => `
      <span class="submenu-row">
        <button type="button" class="submenu-btn" data-filter="${cat.toLowerCase().replace(/\s/g, '')}">${cat}</button>
      </span>
    `).join('');
  }
  renderWorkSubmenus();

  // 2. Sidebar Toggle Logic
  function syncSidebar() {
    const isOpen = !menu.classList.contains('collapsed');
    menuToggle.classList.toggle('active', isOpen);
    
    // Show 'about' and 'contact' content ONLY when menu is open
    document.getElementById('aboutItem').classList.toggle('open', isOpen);
    document.getElementById('contactItem').classList.toggle('open', isOpen);
    
    // If collapsing, close the work dropdown too
    if (!isOpen) workItem.classList.remove('open');
  }

  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('collapsed');
    syncSidebar();
  });

  // 3. Navigation Logic
  function loadHomeContent() {
    contentArea.innerHTML = `
      <div class="align-wrapper">
        <div class="video-wrapper">
          <video autoplay muted loop playsinline>
            <source src="${initialVideoURL}" type="video/mp4">
          </video>
        </div>
      </div>
    `;
    headerWorkMenu.classList.remove('is-active');
    workItem.classList.remove('open');
    contentArea.scrollTop = 0;
  }

  function loadWorkContent(filter = 'all') {
    // getFilteredImages is defined in your images.js
    const filteredImages = getFilteredImages(filter);

    const imagesHTML = filteredImages.map(img => {
      // NEW: Check if there is actual content for the lightbox
      const hasGroup = img.group && img.group.length > 0;
      const hasText = img.text && img.text.trim() !== "";
      const isClickable = hasGroup || hasText;
      const clickableClass = isClickable ? 'is-clickable' : '';

      return `<img src="${img.src}" 
                   alt="${img.alt}" 
                   class="${clickableClass}" 
                   data-group='${JSON.stringify(img.group || [])}' 
                   data-text='${(img.text || "").replace(/'/g, '’')}' 
                   data-src="${img.src}">`;
    }).join('');

    // Internal Iframe Script
    const iframeScript = `
      <script>
        document.addEventListener('DOMContentLoaded', function() {
          // ONLY attach listeners to images with the is-clickable class
          const images = document.querySelectorAll('.work-gallery img.is-clickable');
          images.forEach((img) => {
            img.addEventListener('click', function() {
              window.parent.postMessage({
                type: 'openLightbox',
                src: this.dataset.src,
                group: JSON.parse(this.dataset.group),
                text: this.dataset.text
              }, '*');
            });
          });
        });
      <\/script>
    `;

    const workHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { margin: 0; padding: 20px 20px 10px 0; font-family: 'Open Sans', sans-serif; background: white; }
          .work-gallery { column-count: 3; column-gap: 5px; }
          .work-gallery img { width: 100%; height: auto; display: block; margin-bottom: 5px; break-inside: avoid; cursor: default; }
          /* ONLY show pointer if it has content */
          .work-gallery img.is-clickable { cursor: pointer; }
          @media (max-width: 1024px) { .work-gallery { column-count: 2; } }
          @media (max-width: 768px) { .work-gallery { column-count: 1; } }
        </style>
      </head>
      <body>
        <div class="work-gallery">${imagesHTML}</div>
        ${iframeScript}
      </body>
      </html>
    `;

    const workDataURL = "data:text/html;charset=utf-8," + encodeURIComponent(workHTML);
    contentArea.innerHTML = `
      <div class="align-wrapper">
        <div class="work-iframe-wrapper">
          <iframe src="${workDataURL}" frameborder="0"></iframe>
        </div>
      </div>
    `;
    headerWorkMenu.classList.add('is-active');
    contentArea.scrollTop = 0;
  }

  // 4. Event Listeners
  homeBtn.addEventListener('click', loadHomeContent);
  document.getElementById('logoLink').addEventListener('click', (e) => { e.preventDefault(); loadHomeContent(); });

  // Sidebar Work Main Button
  workBtn.addEventListener('click', () => {
    if (menu.classList.contains('collapsed')) {
      menu.classList.remove('collapsed');
      syncSidebar();
    }
    workItem.classList.toggle('open');
    loadWorkContent('all');
  });

  // Category Buttons (Sidebar & Header)
  document.addEventListener('click', (e) => {
    const subBtn = e.target.closest('.submenu-btn');
    if (subBtn) {
      loadWorkContent(subBtn.dataset.filter);
    }
  });

  loadHomeContent(); // Default landing state
});
