/* ================================================
   NOOLZY — Premium Handmade Accessories
   script.js
   Vanilla JS for interactions, animations & navigation
   ================================================ */

"use strict";

// ==========================================
// BUSINESS CONFIGURATION & DETAILS
// ==========================================
const BUSINESS = Object.freeze({
  name: "Noolzy",
  tagline: "Handcrafted Elegance for Every Occasion",
  owner: "",
  whatsapp: "9789151510",
  phone: "9789151510",
  email: "noolzy64@gmail.com",
  instagram: "https://instagram.com/noolzzy",
  facebook: "",
  pinterest: "",
  location: "Tamil Nadu, India",
  workingHours: "Monday - Saturday | 9:00 AM - 7:00 PM",
  established: "2023",
  about:
    "Noolzy is a handmade accessories brand specializing in premium thread bangles, embroidered hair clips, scrunchies, and customized accessories. Every piece is handcrafted with love, creativity, and attention to detail.",
  shipping: "Delivery available inside Tamil Nadu.",
  customOrders:
    "Custom orders are accepted for weddings, birthdays, return gifts, and special occasions.",
  paymentMethods: [
    "Google Pay",
    "PhonePe",
    "Paytm",
    "UPI",
    "Bank Transfer"
  ]
});

const WA_NUMBER = BUSINESS.whatsapp;
const waLink = (msg) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

// ==========================================
// DOM ELEMENTS CACHE
// ==========================================
const DOM = {
  loader: document.getElementById("loader"),
  year: document.getElementById("year"),
  navbar: document.getElementById("navbar"),
  backTop: document.getElementById("backTop"),
  progress: document.getElementById("scroll-progress"),
  hamburger: document.getElementById("hamburger"),
  navLinks: document.getElementById("navLinks"),
  productGrid: document.getElementById("productGrid"),
  searchInput: document.getElementById("searchInput"),
  filterChips: document.querySelectorAll(".chip"),
  galleryGrid: document.getElementById("galleryGrid"),
  lightbox: document.getElementById("lightbox"),
  lbImg: document.getElementById("lbImg"),
  lbClose: document.getElementById("lbClose"),
  lbPrev: document.getElementById("lbPrev"),
  lbNext: document.getElementById("lbNext"),
  testiSlides: document.getElementById("testiSlides"),
  testiDots: document.getElementById("testiDots"),
  testiPrev: document.getElementById("testiPrev"),
  testiNext: document.getElementById("testiNext"),
  accItems: document.querySelectorAll(".acc-item"),
  instaGrid: document.getElementById("instaGrid"),
  newsForm: document.getElementById("newsForm"),
  enquiryPop: document.getElementById("enquiryPop"),
  sections: document.querySelectorAll("section[id], header[id]"),
  navAnchors: document.querySelectorAll(".nav-links a[href^='#']")
};

// ==========================================
// DATA SETS
// ==========================================
const products = [
  { name: "Heritage Thread Bangles", category: "bangles", price: "₹399", tag: "Bestseller", desc: "Handcrafted turquoise blue silk thread bangles with intricate gold and white stone detailing for a timeless traditional look.", img: "assets/products/product1.jpg" },
  { name: "Emerald Bloom Bangle Set", category: "bangles", price: "₹399", tag: "Premium", desc: "SHandcrafted emerald green silk thread bangles with elegant gold embellishments, perfect for festive and traditional wear.", img: "assets/products/product2.jpg" },
  { name: "Emerald Butterfly Bangle Set", category: "bangles", price: "₹399", desc: "A handcrafted emerald green silk thread bangle featuring a stunning butterfly centerpiece with premium stone embellishments. Designed to make a graceful statement for festive wear and special occasions.", img: "assets/products/product3.jpg" },
  { name: "Golden Wings Cuff", category: "bracelet", price: "₹399", tag: "New", desc: "A handcrafted antique gold cuff bracelet with a graceful wing-inspired design, perfect for parties, festive occasions, and statement styling.", img: "assets/products/product4.jpg" },
  { name: "Bow Clips", category: "hair", price: "₹249", desc: "Sweet fabric bows for a chic touch.", img: "assets/products/product5.jpg" },
  { name: "Blush Silk Bangle Set", category: "bangles", price: " ₹399", desc: "Handcrafted blush pink and ivory silk thread bangles with elegant stone detailing, ideal for festive celebrations and special occasions.", img: "assets/products/product6.jpg" },
  { name: "Golden Grace Bangle Set", category: "bangles", price: "₹399", tag: "Set of 3", desc: "Elegant handcrafted golden yellow silk thread bangles with premium embellishments for weddings and festive occasions.", img: "assets/products/product7.jpg" },
  { name: "Azure Thread BanglesAzure Thread Bangles", category: "bangles", price: "₹399", tag: "Custom", desc: "Beautiful handcrafted royal blue silk thread bangles with silver stone embellishments, adding elegance to any festive look.", img: "assets/products/product8.jpg" },
  { name: "Golden Grace Bangle Set", category: "bangles", price: "₹399", desc: "Handcrafted mustard yellow silk thread bangles with purple thread accents and elegant stone embellishments. A vibrant choice for festive celebrations and traditional occasions.", img: "assets/products/product9.jpg" },
  { name: "Bloom Stitch Hair Clips (Beige Floral)", category: "hair", price: "₹89", desc: "Handcrafted floral snap clips made with beige floral fabric. Comfortable, stylish, and ideal for daily wear.", img: "assets/products/product10.jpg" }
];

const galleryImages = [
  "assets/products/product1.jpg",
  "assets/products/product4.jpg",
  "assets/products/product3.jpg",
  "assets/products/product2.jpg",
  "assets/products/product5.jpg",
  "assets/products/product8.jpg",
  "assets/products/product7.jpg",
  "assets/products/product9.jpg",
  "assets/products/product10.jpg",
  "assets/products/product6.jpg"
];

const testimonials = [
  { name: "Kaniha R", role: "Repeat Customer", initials: "KR", stars: 5, text: "The thread bangles are beautifully handcrafted and exactly as shown. Highly recommended!" },
  { name: "Maha Shree", role: "Happy Customer", initials: "MS", stars: 5, text: "Akka Parcel sema packing uhm sema full satisfied bangle na open pani pathapo pakkaw super!" },
  { name: "Gayathri", role: "Happy Customer", initials: "G", stars: 5, text: "Just loved the bangles worth for the money and happy for the awesome product." },
  { name: "Selva jothi", role: "Happy Customer", initials: "SJ", stars: 5, text: "Alaga iruku da Thank you for u r wonderful work." }
];

const instaImgs = [
  "assets/products/product1.jpg",
  "assets/products/product10.jpg",
  "assets/products/product3.jpg",
  "assets/products/product4.jpg",
  "assets/products/product5.jpg",
  "assets/products/product6.jpg"
];

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  initYear();
  initMobileMenu();
  initScrollHandler();
  initProducts();
  initSearchAndFilter();
  initGallery();
  initTestimonials();
  initFAQ();
  initInstagram();
  initNewsletter();
  initCounters();
  initEnquiryPopup();
  observeReveals();
  attachRipples();
});

// ==========================================
// LOADER & UTILS
// ==========================================
function initLoader() {
  if (DOM.loader) {
    window.addEventListener("load", () => {
      setTimeout(() => {
        DOM.loader.classList.add("hide");
      }, 500);
    });
  }
}

function initYear() {
  if (DOM.year) {
    DOM.year.textContent = new Date().getFullYear();
  }
}

// ==========================================
// MOBILE MENU & OVERLAY (NO PAGE SHIFT)
// ==========================================
let navOverlay = null;

function createNavOverlay() {
  navOverlay = document.createElement("div");
  navOverlay.className = "nav-overlay";
  navOverlay.setAttribute("aria-hidden", "true");
  document.body.appendChild(navOverlay);

  navOverlay.addEventListener("click", closeMobileMenu);
}

function openMobileMenu() {
  if (!DOM.hamburger || !DOM.navLinks) return;

  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  
  DOM.hamburger.classList.add("active");
  DOM.navLinks.classList.add("open");
  
  DOM.hamburger.setAttribute("aria-expanded", "true");
  DOM.navLinks.setAttribute("aria-hidden", "false");

  if (navOverlay) {
    navOverlay.classList.add("active");
    navOverlay.setAttribute("aria-hidden", "false");
  }

  document.body.style.overflow = "hidden";
  if (scrollbarWidth > 0) {
    document.body.style.paddingRight = `${scrollbarWidth}px`;
  }
  document.body.classList.add("nav-open");
}

function closeMobileMenu() {
  if (!DOM.hamburger || !DOM.navLinks) return;

  DOM.hamburger.classList.remove("active");
  DOM.navLinks.classList.remove("open");

  DOM.hamburger.setAttribute("aria-expanded", "false");
  DOM.navLinks.setAttribute("aria-hidden", "true");

  if (navOverlay) {
    navOverlay.classList.remove("active");
    navOverlay.setAttribute("aria-hidden", "true");
  }

  document.body.style.overflow = "";
  document.body.style.paddingRight = "";
  document.body.classList.remove("nav-open");
}

function initMobileMenu() {
  if (!DOM.hamburger || !DOM.navLinks) return;

  createNavOverlay();

  DOM.hamburger.setAttribute("aria-expanded", "false");
  DOM.hamburger.setAttribute("aria-label", "Toggle navigation menu");
  DOM.navLinks.setAttribute("aria-hidden", "true");

  DOM.hamburger.addEventListener("click", () => {
    const isOpen = DOM.navLinks.classList.contains("open");
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  DOM.navLinks.querySelectorAll("a").forEach((anchor) => {
    anchor.addEventListener("click", closeMobileMenu);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && DOM.navLinks.classList.contains("open")) {
      closeMobileMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && DOM.navLinks.classList.contains("open")) {
      closeMobileMenu();
    }
  }, { passive: true });
}

// ==========================================
// SCROLL EVENTS (HEADER, BACK TO TOP, ACTIVE NAV)
// ==========================================
function initScrollHandler() {
  let ticking = false;

  const handleScroll = () => {
    const y = window.scrollY;

    if (DOM.navbar) {
      DOM.navbar.classList.toggle("scrolled", y > 20);
    }

    if (DOM.backTop) {
      DOM.backTop.classList.toggle("show", y > 500);
    }

    if (DOM.progress) {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progressPercent = scrollHeight > 0 ? (y / scrollHeight) * 100 : 0;
      DOM.progress.style.width = `${progressPercent}%`;
    }

    updateActiveNav();
    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(handleScroll);
      ticking = true;
    }
  }, { passive: true });

  if (DOM.backTop) {
    DOM.backTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

function updateActiveNav() {
  if (!DOM.sections.length || !DOM.navAnchors.length) return;

  let currentSectionId = "";
  const scrollPosition = window.scrollY + 120;

  DOM.sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    if (scrollPosition >= top && scrollPosition < top + height) {
      currentSectionId = section.getAttribute("id");
    }
  });

  DOM.navAnchors.forEach((a) => {
    const href = a.getAttribute("href");
    if (href === `#${currentSectionId}`) {
      a.classList.add("active");
    } else {
      a.classList.remove("active");
    }
  });
}

// ==========================================
// PRODUCTS RENDER
// ==========================================
function renderProducts(list) {
  if (!DOM.productGrid) return;

  if (!list.length) {
    DOM.productGrid.innerHTML = `<div class="no-results">No products match your search.</div>`;
    return;
  }

  DOM.productGrid.innerHTML = list.map((p) => `
    <article class="product-card reveal fade-up" data-category="${p.category}">
      <div class="product-img">
        ${p.tag ? `<span class="product-tag">${p.tag}</span>` : ""}
        <img loading="lazy" src="${p.img}" alt="${p.name}" width="600" height="600" />
      </div>
      <div class="product-info">
        <h3>${p.name}</h3>
        <p class="desc">${p.desc}</p>
        <p class="price">${p.price}</p>
        <a class="enquire-btn ripple" target="_blank" rel="noopener noreferrer"
           href="${waLink(`Hi Noolzy! I'm interested in ${p.name}.`)}">
          Enquire on WhatsApp
        </a>
      </div>
    </article>
  `).join("");

  observeReveals();
  attachRipples();
}

function initProducts() {
  renderProducts(products);
}

// ==========================================
// SEARCH & FILTER
// ==========================================
let activeFilter = "all";

function applyFilters() {
  if (!DOM.searchInput) return;

  const query = DOM.searchInput.value.trim().toLowerCase();
  const filtered = products.filter((p) => {
    const matchCat = activeFilter === "all" || p.category === activeFilter;
    const matchQuery = !query || p.name.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query);
    return matchCat && matchQuery;
  });

  renderProducts(filtered);
}

function initSearchAndFilter() {
  if (DOM.searchInput) {
    DOM.searchInput.addEventListener("input", applyFilters);
  }

  if (DOM.filterChips.length) {
    DOM.filterChips.forEach((chip) => {
      chip.addEventListener("click", () => {
        DOM.filterChips.forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");
        activeFilter = chip.dataset.filter || "all";
        applyFilters();
      });
    });
  }
}

// ==========================================
// GALLERY & LIGHTBOX
// ==========================================
let lbIndex = 0;

function openLB(index) {
  if (!DOM.lightbox || !DOM.lbImg) return;
  lbIndex = index;
  DOM.lbImg.src = galleryImages[lbIndex];
  DOM.lightbox.classList.add("open");
  DOM.lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLB() {
  if (!DOM.lightbox) return;
  DOM.lightbox.classList.remove("open");
  DOM.lightbox.setAttribute("aria-hidden", "true");
  if (!DOM.navLinks || !DOM.navLinks.classList.contains("open")) {
    document.body.style.overflow = "";
  }
}

function navLB(dir) {
  if (!DOM.lbImg) return;
  lbIndex = (lbIndex + dir + galleryImages.length) % galleryImages.length;
  DOM.lbImg.src = galleryImages[lbIndex];
}

function initGallery() {
  if (!DOM.galleryGrid) return;

  DOM.galleryGrid.innerHTML = galleryImages.map((src, i) => `
    <div class="gallery-item reveal fade-up" data-index="${i}" role="button" tabindex="0" aria-label="View gallery image ${i + 1}">
      <img loading="lazy" src="${src}" alt="Noolzy handmade accessory ${i + 1}" width="800" height="800" />
    </div>
  `).join("");

  DOM.galleryGrid.addEventListener("click", (e) => {
    const item = e.target.closest(".gallery-item");
    if (item && item.dataset.index !== undefined) {
      openLB(parseInt(item.dataset.index, 10));
    }
  });

  DOM.galleryGrid.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      const item = e.target.closest(".gallery-item");
      if (item && item.dataset.index !== undefined) {
        e.preventDefault();
        openLB(parseInt(item.dataset.index, 10));
      }
    }
  });

  if (DOM.lbClose) DOM.lbClose.addEventListener("click", closeLB);
  if (DOM.lbPrev) DOM.lbPrev.addEventListener("click", () => navLB(-1));
  if (DOM.lbNext) DOM.lbNext.addEventListener("click", () => navLB(1));

  if (DOM.lightbox) {
    DOM.lightbox.addEventListener("click", (e) => {
      if (e.target === DOM.lightbox) closeLB();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (!DOM.lightbox || !DOM.lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLB();
    if (e.key === "ArrowRight") navLB(1);
    if (e.key === "ArrowLeft") navLB(-1);
  });
}

// ==========================================
// TESTIMONIALS SLIDER
// ==========================================
let tIndex = 0;
let testiInterval = null;

function goTesti(index) {
  if (!DOM.testiSlides || !DOM.testiDots) return;
  tIndex = (index + testimonials.length) % testimonials.length;
  DOM.testiSlides.style.transform = `translateX(-${tIndex * 100}%)`;
  
  const dots = DOM.testiDots.querySelectorAll(".dot");
  dots.forEach((dot, di) => {
    dot.classList.toggle("active", di === tIndex);
  });
}

function startTestiAuto() {
  stopTestiAuto();
  testiInterval = setInterval(() => goTesti(tIndex + 1), 6000);
}

function stopTestiAuto() {
  if (testiInterval) {
    clearInterval(testiInterval);
    testiInterval = null;
  }
}

function initTestimonials() {
  if (!DOM.testiSlides || !DOM.testiDots) return;

  DOM.testiSlides.innerHTML = testimonials.map((t) => `
    <div class="slide">
      <div class="slide-card">
        <div class="slide-stars" aria-label="Rating: ${t.stars} stars">${"★".repeat(t.stars)}</div>
        <p>"${t.text}"</p>
        <div class="slide-avatar">${t.initials}</div>
        <p class="slide-name">${t.name}</p>
        <p class="slide-role">${t.role}</p>
      </div>
    </div>
  `).join("");

  DOM.testiDots.innerHTML = testimonials.map((_, i) => `
    <span class="dot ${i === 0 ? "active" : ""}" data-i="${i}" role="button" aria-label="Go to slide ${i + 1}"></span>
  `).join("");

  if (DOM.testiPrev) {
    DOM.testiPrev.addEventListener("click", () => {
      goTesti(tIndex - 1);
      startTestiAuto();
    });
  }

  if (DOM.testiNext) {
    DOM.testiNext.addEventListener("click", () => {
      goTesti(tIndex + 1);
      startTestiAuto();
    });
  }

  DOM.testiDots.addEventListener("click", (e) => {
    if (e.target.classList.contains("dot") && e.target.dataset.i !== undefined) {
      goTesti(parseInt(e.target.dataset.i, 10));
      startTestiAuto();
    }
  });

  const sliderContainer = DOM.testiSlides.parentElement;
  if (sliderContainer) {
    sliderContainer.addEventListener("mouseenter", stopTestiAuto);
    sliderContainer.addEventListener("mouseleave", startTestiAuto);
    sliderContainer.addEventListener("touchstart", stopTestiAuto, { passive: true });
    sliderContainer.addEventListener("touchend", startTestiAuto, { passive: true });
  }

  startTestiAuto();
}

// ==========================================
// FAQ ACCORDION
// ==========================================
function initFAQ() {
  if (!DOM.accItems.length) return;

  DOM.accItems.forEach((item) => {
    const q = item.querySelector(".acc-q");
    const a = item.querySelector(".acc-a");
    if (!q || !a) return;

    q.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");

      DOM.accItems.forEach((other) => {
        if (other !== item && other.classList.contains("open")) {
          other.classList.remove("open");
          const otherAns = other.querySelector(".acc-a");
          if (otherAns) otherAns.style.maxHeight = "0px";
        }
      });

      item.classList.toggle("open", !isOpen);
      a.style.maxHeight = !isOpen ? `${a.scrollHeight}px` : "0px";
    });
  });
}

// ==========================================
// INSTAGRAM GRID
// ==========================================
function initInstagram() {
  if (!DOM.instaGrid) return;

  DOM.instaGrid.innerHTML = instaImgs.map((src, i) => `
    <a class="insta-item" href="${BUSINESS.instagram}" target="_blank" rel="noopener noreferrer" aria-label="View Instagram post ${i + 1}">
      <img loading="lazy" src="${src}" alt="Instagram post ${i + 1}" width="400" height="400" />
    </a>
  `).join("");
}

// ==========================================
// NEWSLETTER
// ==========================================
function initNewsletter() {
  if (!DOM.newsForm) return;

  DOM.newsForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = DOM.newsForm.querySelector("button");
    const input = DOM.newsForm.querySelector("input[type='email']");
    
    if (!input || !input.checkValidity()) return;

    const originalText = btn.textContent;
    btn.textContent = "✓ Subscribed";
    btn.disabled = true;
    DOM.newsForm.reset();

    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
    }, 2500);
  });
}

// ==========================================
// RIPPLE EFFECT
// ==========================================
function attachRipples() {
  document.querySelectorAll(".ripple").forEach((el) => {
    if (el.dataset.rippleAttached) return;
    el.dataset.rippleAttached = "true";

    el.addEventListener("click", (e) => {
      const rect = el.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const circle = document.createElement("span");
      circle.className = "ripple-circle";
      circle.style.width = circle.style.height = `${size}px`;
      circle.style.left = `${e.clientX - rect.left - size / 2}px`;
      circle.style.top = `${e.clientY - rect.top - size / 2}px`;

      el.appendChild(circle);
      setTimeout(() => circle.remove(), 600);
    });
  });
}

// ==========================================
// INTERSECTION OBSERVERS (REVEALS & COUNTERS)
// ==========================================
let revealObserver = null;

function observeReveals() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
  }

  document.querySelectorAll(".reveal:not(.visible)").forEach((el) => {
    revealObserver.observe(el);
  });
}

function initCounters() {
  const counters = document.querySelectorAll(".counter");
  if (!counters.length) return;

  if (!("IntersectionObserver" in window)) {
    counters.forEach((c) => { c.textContent = c.dataset.target || "0"; });
    return;
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10) || 0;
      let count = 0;
      const step = Math.max(1, Math.floor(target / 60));

      const tick = () => {
        count += step;
        if (count >= target) {
          el.textContent = target;
          return;
        }
        el.textContent = count;
        requestAnimationFrame(tick);
      };

      tick();
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach((c) => counterObserver.observe(c));
}

// ==========================================
// FLOATING ENQUIRY POPUP
// ==========================================
function initEnquiryPopup() {
  if (!DOM.enquiryPop) return;

  const timer = setTimeout(() => {
    DOM.enquiryPop.classList.add("show");
  }, 12000);

  const closeBtn = DOM.enquiryPop.querySelector(".ep-close");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      clearTimeout(timer);
      DOM.enquiryPop.classList.remove("show");
    });
  }
}
