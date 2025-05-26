const hero = document.querySelector(".hero");

const heroImages = [
  "https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1605142859862-978be7eba909?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1612814621951-b24b753ca716?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

let currentIndex = 0;

function changeHeroBackground() {
  currentIndex = (currentIndex + 1) % heroImages.length;
  hero.style.backgroundImage = `url(${heroImages[currentIndex]})`;
}

function enlargeImage(src, alt) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const caption = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = src;
  caption.innerText = alt || "";
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

setInterval(changeHeroBackground, 15000); // every 15 seconds

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.remove("transparent");
  } else {
    navbar.classList.add("transparent");
  }
});
