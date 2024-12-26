const header = document.getElementById("header");
const arrowUp = document.getElementById("arrowUp");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    header.classList.add("header-sticky");
    arrowUp.style.display = "block";
  } else {
    header.classList.remove("header-sticky");
    arrowUp.style.display = "none";
  }
});

const data = [
  {
    image:
      "https://i5.walmartimages.com/asr/c7a1d255-78ca-45db-8273-ce66964171d0.d65c2b8b753187032c7d148105ee017e.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    name: "Wine Bottle",
    price: "125.000",
    oldPrice: "140.000",
  },
  {
    image:
      "https://atlas-content-cdn.pixelsquid.com/stock-images/santa-s-bag-santa-ENoyWz9-600.jpg",
    name: "Santa Bag",
    price: "155.000",
    oldPrice: "188.000",
  },
  {
    image:
      "https://joyin.com/cdn/shop/products/image_4_9821c885-11ce-4c81-8545-28e7cc1a3542_800x.png?v=1669911298",
    name: "Santa Cap",
    price: "230.000",
    oldPrice: "235.000",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH62t8uCJHu-r2v93TCRYeuIl3zkvOBeBaxt3ABHOAOz4R8Kxp",
    name: "foot Gloves",
    price: "60.000",
    oldPrice: "70.000",
  },
  {
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQlwnvt8dP_1xosp0w-0k8JNGtHsMvo2WUUI3zvqBIqrwmTwBSC",
    name: "Door Decating",
    price: "115.000",
    oldPrice: "138.000",
  },
  {
    image:
      "https://atlas-content-cdn.pixelsquid.com/stock-images/tree-shaped-candle-K60ZKNB-600.jpg",
    name: "Tree Candle",
    price: "200.000",
    oldPrice: "210.000",
  },
  {
    image:
      "https://i5.walmartimages.com/asr/cfc41021-2cc5-4b08-8dcd-9bcc71fc0e6a.f274acc4ae7c8804a3c10761e775914d.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
    name: "Santa",
    price: "150.000",
    oldPrice: "155.000",
  },
  {
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTNuDEH1Sg58V2V4EIPTzno00sa1-kIvT1-llGapZQ4XNEZVdKi",
    name: "Decoration Light",
    price: "120.000",
    oldPrice: "130.000",
  },
];

const cardsContainer = document.getElementById("cards-container");

data.forEach((item) => {
  const card = document.createElement("div");
  const cardImage = document.createElement("img");
  const cardName = document.createElement("h2");
  const price = document.createElement("span");
  const oldPrice = document.createElement("span");

  card.classList.add("card");

  oldPrice.classList.add("oldPrice");

  card.appendChild(cardImage);
  card.appendChild(cardName);
  card.appendChild(price);
  card.appendChild(oldPrice);
  cardsContainer.appendChild(card);

  cardImage.src = item.image;
  cardName.textContent = item.name;
  price.textContent = item.price + " $";
  oldPrice.textContent = item.oldPrice + " $";
});

document.addEventListener("DOMContentLoaded", () => {
  const deadline = new Date("2024-12-31T23:59:59");

  const elDays = document.querySelector(".timer__days");
  const elHours = document.querySelector(".timer__hours");
  const elMinutes = document.querySelector(".timer__minutes");
  const elSeconds = document.querySelector(".timer__seconds");

  const declensionNum = (num, words) => {
    return words[
      num % 100 > 4 && num % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
    ];
  };

  const updateTimer = () => {
    const now = new Date();
    const diff = Math.max(0, deadline - now);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    elDays.textContent = String(days).padStart(2, "0");
    elHours.textContent = String(hours).padStart(2, "0");
    elMinutes.textContent = String(minutes).padStart(2, "0");
    elSeconds.textContent = String(seconds).padStart(2, "0");

    elDays.dataset.title = declensionNum(days, ["день", "дня", "дней"]);
    elHours.dataset.title = declensionNum(hours, ["час", "часа", "часов"]);
    elMinutes.dataset.title = declensionNum(minutes, [
      "минута",
      "минуты",
      "минут",
    ]);
    elSeconds.dataset.title = declensionNum(seconds, [
      "секунда",
      "секунды",
      "секунд",
    ]);

    if (diff === 0) {
      clearInterval(timerId);
    }
  };

  updateTimer();
  const timerId = setInterval(updateTimer, 1000);
});
