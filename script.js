/* ===== 슬라이드 ===== */
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 3000);


/* ===== 갤러리 로드 ===== */
function loadGallery() {
  let images = JSON.parse(localStorage.getItem("gallery")) || [];
  let container = document.getElementById("gallery");

  images.slice(0, 8).forEach(img => {
    let el = document.createElement("img");
    el.src = img;
    container.appendChild(el);
  });
}

loadGallery();
