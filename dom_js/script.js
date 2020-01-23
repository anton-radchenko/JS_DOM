var phones_db = [
  {
    ratingRevievs: "264 отзыва",
    price: { oldUan: "4333 грн", newUan: "3799 грн" },
    name: "Motorola MOTO G4 (XT1622) Black"
  },
  {
    ratingRevievs: "1355 отзывов",
    price: "4999 грн",
    name:
      "Samsung Galaxy J7 J700H/DS Black + карта памяти 16гб + чехол + защитное стекло!"
  },
  {
    ratingRevievs: "426 отзывов",
    price: "5199 грн",
    name: "Samsung Galaxy J5 (2016) J510H/DS Black + защитное стекло + чехол!"
  },
  {
    ratingRevievs: "403 отзыва",
    price: "4349 грн",
    name: "Xiaomi Redmi Note 4X 3/32GB Black"
  },
  {
    ratingRevievs: "488 отзывов",
    price: "6199 грн",
    name: "Samsung Galaxy J7 (2016) J710F/DS Gold + защитное стекло + чехол!"
  },
  {
    ratingRevievs: "198 отзывов",
    price: { oldUan: "3495 грн", newUan: "2995 грн" },
    name: "Lenovo K5 (A6020a40) Silver"
  },
  {
    ratingRevievs: "352 отзыва",
    price: { oldUan: "9799 грн", newUan: "7999 грн" },
    name: "Apple iPhone 5s 16GB Space Gray"
  },
  {
    ratingRevievs: "59 отзывов",
    price: "5999 грн",
    name: "Nokia 5 Dual Sim Tempered Blue"
  },
  {
    ratingRevievs: "119 отзывов",
    price: "11999 грн",
    name: "Samsung Galaxy A5 2017 Duos SM-A520 Black + карта памяти 128гб!"
  },
  {
    ratingRevievs: "1106 отзывов",
    price: "3999 грн",
    name: "Samsung Galaxy J5 J500H/DS Black + чехол + защитное стекло!"
  },
  {
    ratingRevievs: "380 отзывов",
    price: "2199 грн",
    name: "Huawei Y3 II Tiffany (White-Blue) + чехол + защитное стекло!"
  },
  {
    ratingRevievs: "86 отзывов",
    price: { oldUan: "24999 грн", newUan: "22999 грн" },
    name:
      "Samsung Galaxy S8 64GB Midnight Black + карта памяти 64гб + оригинальный чехол!"
  },
  {
    ratingRevievs: "177 отзывов",
    price: "6499 грн",
    name:
      "Huawei P8 Lite 2017 White + УМБ Huawei AP08Q + защитное стекло + чехол!"
  },
  {
    ratingRevievs: "347 отзывов",
    price: "4299 грн",
    name: "Xiaomi Redmi 4X 3/32GB Black (Международная версия)"
  },
  {
    ratingRevievs: "709 отзывов",
    price: "2799 грн",
    name: "Samsung Galaxy J1 2016 SM-J120H Black + защитное стекло + чехол!"
  },
  {
    ratingRevievs: "527 отзывов",
    price: "3999 грн",
    name: "Huawei Y6 Pro Gold + чехол + защитное стекло!"
  },
  {
    ratingRevievs: "66 отзывов",
    price: "16499 грн",
    name: "Apple iPhone 6s 32GB Gold"
  },
  {
    ratingRevievs: "14 отзывов",
    price: "11499 грн",
    name: "Apple iPhone 6 32GB Space Gray"
  },
  {
    ratingRevievs: "70 отзывов",
    price: { oldUan: "7399 грн", newUan: "5999 грн" },
    name: "Asus ZenFone 2 32GB (ZE551ML) Black"
  },
  {
    ratingRevievs: "45 отзывов",
    price: "4299 грн",
    name: "Nokia 3 Dual Sim Silver White + сертификаты 500 грн!"
  },
  {
    ratingRevievs: "376 отзывов",
    price: "3899 грн",
    name: "Meizu M3 Note 32GB Grey (Международная версия)"
  },
  {
    ratingRevievs: "111 отзывов",
    price: { oldUan: "9999 грн", newUan: "7999 грн" },
    name: "Sony Xperia X Dual (F5122) White"
  },
  {
    ratingRevievs: "40 отзывов",
    price: "2222 грн",
    name: "Lenovo Vibe C (A2020) Black + УМБ PowerPlant 5200 mAh в подарок!"
  },
  {
    ratingRevievs: "93 отзыва",
    price: "18999 грн",
    name: "Apple iPhone 7 32GB Black"
  },
  {
    ratingRevievs: "33 отзыва",
    price: "16999 грн",
    name:
      "Huawei P10 4/32GB Black + сертификат 2500грн + чехол Huawei Smart View Cover!"
  },
  {
    ratingRevievs: "71 отзыв",
    price: { oldUan: "2399 грн", newUan: "1999 грн" },
    name: "LG K5 X220ds Gold"
  },
  {
    ratingRevievs: "39 отзывов",
    price: "2995 грн",
    name: "Lenovo C2 Power (K10a40) Black"
  },
  {
    ratingRevievs: "156 отзывов",
    price: "2599 грн",
    name: "Nous NS 5006 Gold"
  },
  {
    ratingRevievs: "40 отзывов",
    price: "19689 грн",
    name: "LG G6 Mystic White"
  },
  {
    ratingRevievs: "24 отзыва",
    price: "5995 грн",
    name: "Motorola MOTO G5 (XT1676) Grey"
  },
  {
    ratingRevievs: "7 отзывов",
    price: { oldUan: "10999 грн", newUan: "9999 грн" },
    name: "HTC One X10 Dual Sim Silver"
  },
  {
    ratingRevievs: "18 отзывов",
    price: { oldUan: "5999 грн", newUan: "4999 грн" },
    name: "Sony Xperia L1 Dual Black"
  }
];

var phones = document.getElementById("products");

function phoneToString(phone) {
  let priceString;
  if (typeof phone.price === "string") {
    priceString = phone.price;
  } else {
    priceString =
      phone.price.newUan + " " + "<s>" + phone.price.oldUan + "</s>";
  }
  return phone.ratingRevievs + "<br>" + priceString + "<br>" + phone.name;
}

function getPrice(phone) {
  if (typeof phone.price === "string") {
    return parseInt(phone.price);
  } else {
    return parseInt(phone.price.newUan);
  }
}

phones_db.sort(function(lhs, rhs) {
  let leftPrice = getPrice(lhs);
  let rightPrice = getPrice(rhs);
  return leftPrice - rightPrice;
});

function pushElements() {
  phones_db.forEach(function(item, i, arr) {
    var element = document.createElement("div");
    var div = document.createElement("div");
    var div_img = document.createElement("div");
    var img = document.createElement("img");
    img.src = "./img.jpg";
    element.className = "phone";
    div.innerHTML = phoneToString(item);
    element.appendChild(div_img);
    div_img.appendChild(img);
    element.appendChild(div);
    products.appendChild(element);
  });
}

pushElements();
