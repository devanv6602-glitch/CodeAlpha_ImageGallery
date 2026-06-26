/**
 * Image Gallery — Main Script
 * Handles rendering, filtering, search, lightbox, theme toggle, and lazy loading.
 */

/* --------------------------------------------------------------------------
   Gallery Data — 24 sample images across 5 categories
   Images are loaded from Unsplash (high quality, free to use).
   Thumbnail URLs use smaller dimensions for faster grid loading.
   -------------------------------------------------------------------------- */
const galleryImages = [
  {
    id: 1,
    title: "Mountain Lake at Sunrise",
    category: "nature",
    keywords: ["mountain", "lake", "sunrise", "landscape"],
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=70"
  },
  {
    id: 2,
    title: "Forest Path in Autumn",
    category: "nature",
    keywords: ["forest", "trees", "autumn", "path"],
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=70"
  },
  {
    id: 3,
    title: "Ocean Waves on Rocky Shore",
    category: "nature",
    keywords: ["ocean", "waves", "coast", "sea"],
    src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&q=70"
  },
  {
    id: 4,
    title: "Northern Lights Over Snow",
    category: "nature",
    keywords: ["aurora", "northern lights", "snow", "sky"],
    src: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=400&q=70"
  },
  {
    id: 5,
    title: "Desert Sand Dunes",
    category: "nature",
    keywords: ["desert", "sand", "dunes", "dry"],
    src: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400&q=70"
  },
  {
    id: 6,
    title: "Majestic Lion Portrait",
    category: "animals",
    keywords: ["lion", "wildlife", "safari", "predator"],
    src: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=400&q=70"
  },
  {
    id: 7,
    title: "Colorful Parrot Close-up",
    category: "animals",
    keywords: ["parrot", "bird", "tropical", "colorful"],
    src: "https://www.shutterstock.com/image-photo/closeup-colourful-parrot-600nw-2207869799.jpg",
    thumb: "https://www.shutterstock.com/image-photo/closeup-colourful-parrot-600nw-2207869799.jpg"
  },
  {
    id: 8,
    title: "Happy Dog Portrait",
    category: "animals",
    keywords: ["dog", "pet", "portrait", "friendly"],
    src: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=400&q=70"
  },
  {
    id: 9,
    title: "Red Fox in Winter",
    category: "animals",
    keywords: ["fox", "winter", "wildlife", "snow"],
    src: "https://i.pinimg.com/originals/48/a5/c0/48a5c07d54cd6e36a4bc87f4376fb696.jpg",
    thumb: "https://i.pinimg.com/originals/48/a5/c0/48a5c07d54cd6e36a4bc87f4376fb696.jpg"
  },
  {
    id: 10,
    title: "Elephant Herd at Sunset",
    category: "animals",
    keywords: ["elephant", "herd", "africa", "sunset"],
    src: "https://i.pinimg.com/originals/8d/91/97/8d91977fd35932ad191f7de5b5039145.jpg",
    thumb: "https://i.pinimg.com/originals/8d/91/97/8d91977fd35932ad191f7de5b5039145.jpg"
  },
  {
    id: 11,
    title: "Modern Laptop Workspace",
    category: "technology",
    keywords: ["laptop", "workspace", "coding", "desk"],
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=70"
  },
  {
    id: 12,
    title: "Circuit Board Macro",
    category: "technology",
    keywords: ["circuit", "electronics", "hardware", "chip"],
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=70"
  },
  {
    id: 13,
    title: "Smartphone and Coffee",
    category: "technology",
    keywords: ["smartphone", "mobile", "app", "device"],
    src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=70"
  },
  {
    id: 14,
    title: "Data Center Servers",
    category: "technology",
    keywords: ["server", "data center", "cloud", "network"],
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=70"
  },
  {
    id: 15,
    title: "Virtual Reality Headset",
    category: "technology",
    keywords: ["vr", "virtual reality", "gaming", "future"],
    src: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=400&q=70"
  },
  {
    id: 16,
    title: "Gourmet Burger Plate",
    category: "food",
    keywords: ["burger", "gourmet", "meal", "restaurant"],
    src: "https://img.magnific.com/premium-photo/gourmet-burger-white-plate-restaurant-quality-food-photography-generative-ai_804788-217626.jpg",
    thumb: "https://img.magnific.com/premium-photo/gourmet-burger-white-plate-restaurant-quality-food-photography-generative-ai_804788-217626.jpg"
  },
  {
    id: 17,
    title: "Fresh Fruit Bowl",
    category: "food",
    keywords: ["fruit", "healthy", "breakfast", "colorful"],
    src: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=400&q=70"
  },
  {
    id: 18,
    title: "Artisan Pizza Fresh from Oven",
    category: "food",
    keywords: ["pizza", "italian", "cheese", "oven"],
    src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=70"
  },
  {
    id: 19,
    title: "Sushi Platter Selection",
    category: "food",
    keywords: ["sushi", "japanese", "seafood", "rice"],
    src: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&q=70"
  },
  {
    id: 20,
    title: "Chocolate Dessert Stack",
    category: "food",
    keywords: ["chocolate", "dessert", "sweet", "cake"],
    src: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=70"
  },
  {
    id: 21,
    title: "Eiffel Tower at Dusk",
    category: "travel",
    keywords: ["paris", "eiffel tower", "france", "landmark"],
    src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=70"
  },
  {
    id: 22,
    title: "Santorini White Buildings",
    category: "travel",
    keywords: ["santorini", "greece", "island", "mediterranean"],
    src: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=400&q=70"
  },
  {
    id: 23,
    title: "Tokyo City Skyline at Night",
    category: "travel",
    keywords: ["tokyo", "japan", "city", "skyline"],
    src: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&q=70"
  },
  {
    id: 24,
    title: "Hot Air Balloons over Cappadocia",
    category: "travel",
    keywords: ["balloon", "turkey", "cappadocia", "adventure"],
    src: "https://tse1.mm.bing.net/th/id/OIP.NPFilexTRpeujVIbPjnvQgHaFP?pid=Api&P=0&h=180",
    thumb: "https://tse1.mm.bing.net/th/id/OIP.NPFilexTRpeujVIbPjnvQgHaFP?pid=Api&P=0&h=180"
  }
];

/* --------------------------------------------------------------------------
   DOM References
   -------------------------------------------------------------------------- */
const galleryEl = document.getElementById("gallery");
const searchInput = document.getElementById("searchInput");
const resultsCount = document.getElementById("resultsCount");
const emptyState = document.getElementById("emptyState");
const filterButtons = document.querySelectorAll(".filter-btn");
const themeToggle = document.getElementById("themeToggle");

// Lightbox elements
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxCounter = document.getElementById("lightboxCounter");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

/* --------------------------------------------------------------------------
   Application State
   -------------------------------------------------------------------------- */
let activeCategory = "all";
let searchQuery = "";
let filteredImages = [...galleryImages];
let currentLightboxIndex = 0;

/* --------------------------------------------------------------------------
   Theme — Dark / Light Mode
   Reads saved preference from localStorage, falls back to system preference.
   -------------------------------------------------------------------------- */
function initTheme() {
  const savedTheme = localStorage.getItem("gallery-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = savedTheme || (prefersDark ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("gallery-theme", next);
}

/* --------------------------------------------------------------------------
   Filtering & Search
   Returns images matching the active category and search query.
   -------------------------------------------------------------------------- */
function getFilteredImages() {
  const query = searchQuery.trim().toLowerCase();

  return galleryImages.filter((image) => {
    const matchesCategory =
      activeCategory === "all" || image.category === activeCategory;

    const matchesSearch =
      !query ||
      image.title.toLowerCase().includes(query) ||
      image.category.toLowerCase().includes(query) ||
      image.keywords.some((kw) => kw.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });
}

/* --------------------------------------------------------------------------
   Render Gallery Grid
   Builds HTML for each visible image card with lazy-loaded thumbnails.
   -------------------------------------------------------------------------- */
function renderGallery() {
  filteredImages = getFilteredImages();

  // Update results count text
  const count = filteredImages.length;
  resultsCount.textContent =
    count === 1 ? "Showing 1 image" : `Showing ${count} images`;

  // Show or hide empty state
  if (count === 0) {
    galleryEl.innerHTML = "";
    galleryEl.classList.add("hidden");
    emptyState.classList.remove("hidden");
    return;
  }

  galleryEl.classList.remove("hidden");
  emptyState.classList.add("hidden");

  galleryEl.innerHTML = filteredImages
    .map((image, index) => {
      const categoryLabel =
        image.category.charAt(0).toUpperCase() + image.category.slice(1);

      return `
        <article
          class="gallery-card"
          data-index="${index}"
          tabindex="0"
          role="button"
          aria-label="View ${image.title}"
          style="animation-delay: ${index * 0.05}s"
        >
          <div class="gallery-card__image-wrap">
            <img
              class="gallery-card__image"
              src="${image.thumb}"
              alt="${image.title}"
              loading="lazy"
              decoding="async"
              width="400"
              height="300"
            >
            <div class="gallery-card__overlay">
              <h2 class="gallery-card__title">${image.title}</h2>
            </div>
          </div>
          <span class="gallery-card__category">${categoryLabel}</span>
        </article>
      `;
    })
    .join("");

  // Attach click and keyboard handlers to each card
  galleryEl.querySelectorAll(".gallery-card").forEach((card) => {
    card.addEventListener("click", () => openLightbox(Number(card.dataset.index)));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(Number(card.dataset.index));
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Lightbox
   Opens full-size image with caption and navigation controls.
   -------------------------------------------------------------------------- */
function openLightbox(index) {
  currentLightboxIndex = index;
  updateLightboxContent();

  lightbox.classList.remove("hidden");
  document.body.style.overflow = "hidden"; // Prevent background scroll
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.classList.add("hidden");
  document.body.style.overflow = "";
  lightboxImage.src = ""; // Free memory from large image
}

function updateLightboxContent() {
  const image = filteredImages[currentLightboxIndex];
  if (!image) return;

  lightboxImage.src = image.src;
  lightboxImage.alt = image.title;
  lightboxCaption.textContent = image.title;
  lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${filteredImages.length}`;
}

function showPreviousImage() {
  currentLightboxIndex =
    (currentLightboxIndex - 1 + filteredImages.length) % filteredImages.length;
  updateLightboxContent();
}

function showNextImage() {
  currentLightboxIndex = (currentLightboxIndex + 1) % filteredImages.length;
  updateLightboxContent();
}

/* --------------------------------------------------------------------------
   Event Listeners
   -------------------------------------------------------------------------- */
function initEventListeners() {
  // Search — filter as the user types
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderGallery();
  });

  // Category filter buttons
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("filter-btn--active"));
      btn.classList.add("filter-btn--active");
      activeCategory = btn.dataset.category;
      renderGallery();
    });
  });

  // Theme toggle
  themeToggle.addEventListener("click", toggleTheme);

  // Lightbox controls
  lightboxClose.addEventListener("click", closeLightbox);
  lightboxPrev.addEventListener("click", showPreviousImage);
  lightboxNext.addEventListener("click", showNextImage);

  // Close lightbox when clicking the dark backdrop (not the image)
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    const isLightboxOpen = !lightbox.classList.contains("hidden");

    if (!isLightboxOpen) return;

    switch (e.key) {
      case "Escape":
        closeLightbox();
        break;
      case "ArrowLeft":
        showPreviousImage();
        break;
      case "ArrowRight":
        showNextImage();
        break;
    }
  });
}

/* --------------------------------------------------------------------------
   Initialize App
   -------------------------------------------------------------------------- */
function init() {
  initTheme();
  initEventListeners();
  renderGallery();
}

// Start the gallery when the DOM is ready
document.addEventListener("DOMContentLoaded", init);
