let ul = document.getElementById("addToList");

document.getElementById("open").addEventListener("click", function () {
  document.querySelector(".main-modal").style.display = "flex";
});

document.getElementById("btnClose").addEventListener("click", function () {
  document.querySelector(".main-modal").style.display = "none";
});

const products = [
  {
    name: "Last Supper",
    price: 1000,
    description: "A replica painting of Last Supper",
  },
  {
    name: "Birth of Venus",
    price: 1100,
    description: "A replica painting of Birth of Venus",
  },
  {
    name: "Starry Night",
    price: 1200,
    description: "A replica painting of Starry Night",
  },
  {
    name: "Mona Lisa",
    price: 1300,
    description: "A replica painting of Mona Lisa",
  },
  {
    name: "Great Wave",
    price: 1400,
    description: "A replica painting of Great Wave",
  },
  {
    name: "Cubism",
    price: 1500,
    description: "A replica painting of Cubism",
  },
];

let insertPName = () => {
  document.getElementById("pName1").innerHTML = products[0].name;
  document.getElementById("pName2").innerHTML = products[1].name;
  document.getElementById("pName3").innerHTML = products[2].name;
  document.getElementById("pName4").innerHTML = products[3].name;
  document.getElementById("pName5").innerHTML = products[4].name;
  document.getElementById("pName6").innerHTML = products[5].name;
};

let insertPPrice = () => {
  document.getElementById("pPrice1").innerHTML = "$" + products[0].price;
  document.getElementById("pPrice2").innerHTML = "$" + products[1].price;
  document.getElementById("pPrice3").innerHTML = "$" + products[2].price;
  document.getElementById("pPrice4").innerHTML = "$" + products[3].price;
  document.getElementById("pPrice5").innerHTML = "$" + products[4].price;
  document.getElementById("pPrice6").innerHTML = "$" + products[5].price;
};

document.getElementById("p1Button").addEventListener("click", function (evt) {
  alert("Last Supper is added to cart.");
  addToCart(evt.path[0].dataset.id);
});

document.getElementById("p2Button").addEventListener("click", function (evt) {
  alert("Birth of Venus is added to cart.");
  addToCart(evt.path[0].dataset.id);
});

document.getElementById("p3Button").addEventListener("click", function (evt) {
  alert("Starry Night is added to cart.");
  addToCart(evt.path[0].dataset.id);
});

document.getElementById("p4Button").addEventListener("click", function (evt) {
  alert("Mona Lisa is added to cart.");
  addToCart(evt.path[0].dataset.id);
});

document.getElementById("p5Button").addEventListener("click", function (evt) {
  alert("Great Wave is added to cart.");
  addToCart(evt.path[0].dataset.id);
});

document.getElementById("p6Button").addEventListener("click", function (evt) {
  alert("Cubism is added to cart.");
  addToCart(evt.path[0].dataset.id);
});

function isTrue() {
  if (document.getElementById("p1Button") == true) {
    return 1;
  }
}

function addToCart(index) {
  var li = document.createElement("li");
  let i = index - 1;
  li.appendChild(document.createTextNode(products[i].name + "  -----  "));
  li.appendChild(
    document.createTextNode(products[i].description + "  -----  ")
  );
  li.appendChild(document.createTextNode("$" + products[i].price));
  ul.appendChild(li);
}

console.log(addToCart);
insertPName();
insertPPrice();
