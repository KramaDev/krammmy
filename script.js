const hero = document.querySelector(".hero");

const heroImages = [
  "images/bg1.jpg",
  "images/bg2.jpeg",
  "images/bg3.jpeg",
  "images/bg4.jpeg",
  "images/bg5.jpg"
];

let currentIndex = 0;

function changeHeroBackground() {
  currentIndex = (currentIndex + 1) % heroImages.length;
  hero.style.backgroundImage = `url(${heroImages[currentIndex]})`;
}

// ✅ Zoom on click
document.getElementById("modalImage").addEventListener("click", function () {
  this.classList.toggle("zoomed");
});

// ✅ Global function so HTML onclick can find it
function enlargeImage(src, alt) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const caption = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = src;
  caption.textContent = alt || "";

  // Ensure zoom is reset on open
  modalImg.classList.remove("zoomed");
}

// Close modal
function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

// Close on outside click
function outsideClick(event) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");

  if (!modalImg.contains(event.target) && event.target.id !== "caption") {
    closeModal();
  }
}

// Close on ESC key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});

// Auto-change hero background every 15s
setInterval(changeHeroBackground, 15000);

// Navbar transparency toggle
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.remove("transparent");
  } else {
    navbar.classList.add("transparent");
  }
});
