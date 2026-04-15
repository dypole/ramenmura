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

/*=======온라인 오더========*/
function doGet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Menu");
  const data = sheet.getDataRange().getValues();

  /*===let result = {}; ====*/
  let menus = {
  Ramen: [
    { name: "Tonkotsu Ramen", price: 14 },
    { name: "Spicy Miso Ramen", price: 15 }
  ],
  Sushi: [
    { name: "California Roll", price: 9 },
    { name: "Salmon Nigiri", price: 7 }
  ],
  Drinks: [
    { name: "Coke", price: 2 },
    { name: "Green Tea", price: 3 }
  ]
};

  for (let i = 1; i < data.length; i++) {
    let category = data[i][0];
    let name = data[i][1];
    let price = data[i][2];

    if (!result[category]) result[category] = [];

    result[category].push({ name, price });
  }

  return ContentService.createTextOutput(JSON.stringify(result));
}

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Orders");
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    JSON.stringify(data.cart),
    data.total
  ]);

  return ContentService.createTextOutput("success");
}

loadGallery();
