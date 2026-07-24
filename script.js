/* ================================================
   NOOLZY — script.js
   Vanilla JS for interactions & animations
   ================================================ */

// ==========================================
// NOOLZY BUSINESS DETAILS
// Update these details only
// ==========================================

const BUSINESS = {
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

    shipping:
        "Delivery available inside Tamil Nade.",

    customOrders:
        "Custom orders are accepted for weddings, birthdays, return gifts, and special occasions.",

    paymentMethods: [
        "Google Pay",
        "PhonePe",
        "Paytm",
        "UPI",
        "Bank Transfer"
    ]
};

const WA_NUMBER = BUSINESS.whatsapp;

const waLink = (msg) =>
    `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

/* ---------- LOADER ---------- */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => {
      loader.classList.add("hide");
    }, 500);
  }
});

/* ---------- YEAR ---------- */
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- NAVBAR SCROLL + BACK TO TOP + PROGRESS ---------- */
const navbar = document.getElementById("navbar");
const backTop = document.getElementById("backTop");
const progress = document.getElementById("scroll-progress");

window.addEventListener("scroll", () => {
  const y = window.scrollY;
  navbar.classList.toggle("scrolled", y > 20);
  backTop.classList.toggle("show", y > 500);

  const h = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${(y / h) * 100}%`;
});
backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

/* ---------- MOBILE MENU ---------- */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("open");
});
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("open");
  })
);

/* ---------- PRODUCTS DATA ---------- */
const products = [
  { name: "Silk Thread Bangles", category: "bangles", price: "₹499", tag: "Bestseller",
    desc: "Vibrant silk-wound bangles for everyday elegance.",
    img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600" },
  { name: "Bridal Bangles", category: "bangles", price: "₹1,499", tag: "Premium",
    desc: "Statement bridal set with gold detailing.",
    img: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600" },
  { name: "Kids Bangles", category: "bangles", price: "₹299",
    desc: "Playful, tiny bangles designed for little wrists.",
    img: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600" },
  { name: "Embroidered Clips", category: "clips", price: "₹349", tag: "New",
    desc: "Hand-embroidered clips in floral motifs.",
    img: "https://images.unsplash.com/photo-1596944924591-a99b8e83f2b3?w=600" },
  { name: "Bow Clips", category: "clips", price: "₹249",
    desc: "Sweet fabric bows for a chic touch.",
    img: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600" },
  { name: "Hair Bands", category: "hair", price: "₹199",
    desc: "Soft-stretch bands in curated shades.",
    img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600" },
  { name: "Scrunchies", category: "hair", price: "₹149", tag: "Set of 3",
    desc: "Silky scrunchies that hug your hair gently.",
    img: "https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?w=600" },
  { name: "Customized Gift Sets", category: "gifts", price: "₹1,299", tag: "Custom",
    desc: "Curated gifting box, personalized just for you.",
    img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600" },
  { name: "Festive Bangle Stack", category: "bangles", price: "₹899",
    desc: "Layered bangle set for festive celebrations.",
    img: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=600" },
];

/* ---------- RENDER PRODUCTS ---------- */
const grid = document.getElementById("productGrid");
function renderProducts(list) {
  if (!list.length) {
    grid.innerHTML = `<div class="no-results">No products match your search.</div>`;
    return;
  }
  grid.innerHTML = list.map((p) => `
    <article class="product-card reveal fade-up" data-category="${p.category}">
      <div class="product-img">
        ${p.tag ? `<span class="product-tag">${p.tag}</span>` : ""}
        <!-- IMAGE PLACEHOLDER: Replace with real product image -->
        <img loading="lazy" src="${p.img}" alt="${p.name}" />
      </div>
      <div class="product-info">
        <h3>${p.name}</h3>
        <p class="desc">${p.desc}</p>
        <p class="price">${p.price}</p>
        <a class="enquire-btn ripple" target="_blank" rel="noopener"
           href="${waLink(`Hi Noolzy! I'm interested in ${p.name}.`)}">
          Enquire on WhatsApp
        </a>
      </div>
    </article>
  `).join("");
  observeReveals();
  attachRipples();
}
renderProducts(products);

/* ---------- SEARCH + FILTER ---------- */
const search = document.getElementById("searchInput");
const chips = document.querySelectorAll(".chip");
let activeFilter = "all";

function applyFilters() {
  const q = search.value.trim().toLowerCase();
  const filtered = products.filter((p) => {
    const matchCat = activeFilter === "all" || p.category === activeFilter;
    const matchQ = !q || p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
    return matchCat && matchQ;
  });
  renderProducts(filtered);
}
search.addEventListener("input", applyFilters);
chips.forEach((c) =>
  c.addEventListener("click", () => {
    chips.forEach((x) => x.classList.remove("active"));
    c.classList.add("active");
    activeFilter = c.dataset.filter;
    applyFilters();
  })
);

/* ---------- GALLERY ---------- */
const galleryImages = [
  "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800",
  "https://images.unsplash.com/photo-1596944924591-a99b8e83f2b3?w=800",
  "https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?w=800",
  "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800",
  "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800",
  "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800",
  "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=800",
];
const galleryGrid = document.getElementById("galleryGrid");
galleryGrid.innerHTML = galleryImages.map((src, i) => `
  <div class="gallery-item reveal fade-up" data-index="${i}">
    <img loading="lazy" src="${src}" alt="Noolzy handmade accessory ${i + 1}" />
  </div>
`).join("");

/* ---------- LIGHTBOX ---------- */
const lb = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
let lbIndex = 0;
function openLB(i) {
  lbIndex = i;
  lbImg.src = galleryImages[i];
  lb.classList.add("open");
}
function closeLB() { lb.classList.remove("open"); }
function navLB(dir) {
  lbIndex = (lbIndex + dir + galleryImages.length) % galleryImages.length;
  lbImg.src = galleryImages[lbIndex];
}
galleryGrid.addEventListener("click", (e) => {
  const item = e.target.closest(".gallery-item");
  if (item) openLB(+item.dataset.index);
});
document.getElementById("lbClose").addEventListener("click", closeLB);
document.getElementById("lbPrev").addEventListener("click", () => navLB(-1));
document.getElementById("lbNext").addEventListener("click", () => navLB(1));
lb.addEventListener("click", (e) => { if (e.target === lb) closeLB(); });
document.addEventListener("keydown", (e) => {
  if (!lb.classList.contains("open")) return;
  if (e.key === "Escape") closeLB();
  if (e.key === "ArrowRight") navLB(1);
  if (e.key === "ArrowLeft") navLB(-1);
});

/* ---------- TESTIMONIALS SLIDER ---------- */
const testimonials = [
  {
    name: "Kaniha R",
    role: "Repeat Customer",
    initials: "KR",
    stars: 5,
    text: "The thread bangles are beautifully handcrafted and exactly as shown. Highly recommended!"
  },
  {
    name: "Maha Shree",
    role: "Happy Customer",
    initials: "MS",
    stars: 5,
    text: "Akka Parcel sema packing uhm sema full satisfied bangle na open pani pathapo pakkaw super!"
  },
  {
    name: "Gayathri",
    role: "Happy Customer",
    initials: "G",
    stars: 5,
    text: "Just loved the bangles worth for the money and happy for the awesome product."
  },
  {
    name: "Selva jothi",
    role: "Happy Customer",
    initials: "SJ",
    stars: 5,
    text: "Alaga iruku da Thank you for u r wonderful work."
  }
];
const slides = document.getElementById("testiSlides");
const dots = document.getElementById("testiDots");
slides.innerHTML = testimonials.map((t) => `
  <div class="slide">
    <div class="slide-card">
      <div class="slide-stars">${"★".repeat(t.stars)}</div>
      <p>"${t.text}"</p>
      <div class="slide-avatar">${t.initials}</div>
      <p class="slide-name">${t.name}</p>
      <p class="slide-role">${t.role}</p>
    </div>
  </div>
`).join("");
dots.innerHTML = testimonials.map((_, i) => `<span class="dot ${i === 0 ? "active" : ""}" data-i="${i}"></span>`).join("");

let tIndex = 0;
function goTesti(i) {
  tIndex = (i + testimonials.length) % testimonials.length;
  slides.style.transform = `translateX(-${tIndex * 100}%)`;
  dots.querySelectorAll(".dot").forEach((d, di) => d.classList.toggle("active", di === tIndex));
}
document.getElementById("testiPrev").addEventListener("click", () => goTesti(tIndex - 1));
document.getElementById("testiNext").addEventListener("click", () => goTesti(tIndex + 1));
dots.addEventListener("click", (e) => {
  if (e.target.classList.contains("dot")) goTesti(+e.target.dataset.i);
});
setInterval(() => goTesti(tIndex + 1), 6000);

/* ---------- FAQ ACCORDION ---------- */
document.querySelectorAll(".acc-item").forEach((item) => {
  const q = item.querySelector(".acc-q");
  const a = item.querySelector(".acc-a");
  q.addEventListener("click", () => {
    const open = item.classList.toggle("open");
    a.style.maxHeight = open ? a.scrollHeight + "px" : 0;
  });
});

/* ---------- INSTAGRAM PLACEHOLDER ---------- */
const insta = document.getElementById("instaGrid");
const instaImgs = [
  "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400",
  "https://images.unsplash.com/photo-1596944924591-a99b8e83f2b3?w=400",
  "https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?w=400",
  "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400",
  "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400",
  "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400",
];
insta.innerHTML = instaImgs.map((src, i) => `
  <a class="insta-item" href="https://instagram.com" target="_blank" rel="noopener">
    <img loading="lazy" src="${src}" alt="Instagram post ${i + 1}" />
  </a>
`).join("");

/* ---------- NEWSLETTER ---------- */
document.getElementById("newsForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const btn = e.target.querySelector("button");
  const original = btn.textContent;
  btn.textContent = "✓ Subscribed";
  btn.disabled = true;
  e.target.reset();
  setTimeout(() => { btn.textContent = original; btn.disabled = false; }, 2500);
});

/* ---------- RIPPLE EFFECT ---------- */
function attachRipples() {
  document.querySelectorAll(".ripple").forEach((el) => {
    if (el.dataset.ripple) return;
    el.dataset.ripple = "1";
    el.addEventListener("click", (e) => {
      const rect = el.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const circle = document.createElement("span");
      circle.className = "ripple-circle";
      circle.style.width = circle.style.height = size + "px";
      circle.style.left = e.clientX - rect.left - size / 2 + "px";
      circle.style.top = e.clientY - rect.top - size / 2 + "px";
      el.appendChild(circle);
      setTimeout(() => circle.remove(), 600);
    });
  });
}
attachRipples();

/* ---------- INTERSECTION OBSERVER (REVEAL + COUNTERS) ---------- */
function observeReveals() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal:not(.visible)").forEach((el) => io.observe(el));
}
observeReveals();

/* Counters */
const counters = document.querySelectorAll(".counter");
const cio = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = +el.dataset.target;
    let n = 0;
    const step = Math.max(1, Math.floor(target / 60));
    const tick = () => {
      n += step;
      if (n >= target) { el.textContent = target; return; }
      el.textContent = n;
      requestAnimationFrame(tick);
    };
    tick();
    cio.unobserve(el);
  });
}, { threshold: 0.5 });
counters.forEach((c) => cio.observe(c));

/* ---------- FLOATING ENQUIRY POPUP ---------- */
setTimeout(() => {
  document.getElementById("enquiryPop").classList.add("show");
}, 12000);
