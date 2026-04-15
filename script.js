// 온라인 주문 버튼
function orderNow() {
  window.location.href = "https://ubereats.com"; // 원하는 링크로 변경
}

// 갤러리 저장
function addImage() {
  const url = document.getElementById("imgUrl").value;
  let images = JSON.parse(localStorage.getItem("gallery")) || [];
  images.push(url);
  localStorage.setItem("gallery", JSON.stringify(images));
  alert("추가됨!");
}

// 갤러리 출력
function loadGallery() {
  let images = JSON.parse(localStorage.getItem("gallery")) || [];
  const container = document.getElementById("gallery");

  images.forEach(img => {
    const el = document.createElement("img");
    el.src = img;
    el.style.width = "200px";
    el.style.margin = "10px";
    container.appendChild(el);
  });
}