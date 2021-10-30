// The Burger Constructor
function Burger(burgerType, id, image = "./assets/burger.png") {
  this.burgerType = burgerType;
  this.id = id;
  this.image = image;
  this.size = "medium";
  this.toppings = "bacon";
  this.price = 0;
  this.crust = "crispy";
}

const newBurgers = [
  new Burger("Beef Burger", 1),
  new Burger("Chicken Burger", 2),
  new Burger("Veggie Burger", 3),
  new Burger("Bison Burger", 4),
];

Burger.prototype.setSize = function (selectedSize = "medium") {
  // const selectedSize = document.getElementById("size").value;

  this.size = selectedSize;
  this.burgerPrice();
};

Burger.prototype.setCrust = function (selectedCrust = "crispy") {
  // const selectedCrust = document.getElementById("crust").value;
  this.crust = selectedCrust;
  this.burgerPrice();
};

Burger.prototype.setToppings = function (selectedTopping = "bacon") {
  // const selectedTopping = document.getElementById("toppings").value;
  this.toppings = selectedTopping;
  this.burgerPrice();
};

Burger.prototype.burgerPrice = function () {
  let price = 0;

  //size selection
  if (this.size === "small") {
    sizePrice = 250;
  } else if (this.size === "medium") {
    sizePrice = 350;
  } else {
    sizePrice = 500;
  }

  //crust selection
  if (this.crust === "crispy") {
    crustPrice = 100;
  } else if (this.crust === "stuffed") {
    crustPrice = 150;
  } else {
    crustPrice = 150;
  }

  //toppings selection
  if (this.toppings === "chillies") {
    toppingPrice = 50;
  } else if (this.toppings === "burger") {
    toppingPrice = 150;
  } else {
    toppingPrice = 100;
  }

  price = sizePrice + crustPrice + toppingPrice;

  this.price = price;
};

// creating a new list element

newBurgers.forEach(function (newBurger, index) {
  const cardContainer = document.querySelectorAll(".card-container");
  let newEl = document.createElement("div");

  newEl.innerHTML = ` 
  <div class="card">
  <div class="card-header">
      <img src="${newBurger.image}" height="180" width="180" alt="">

  </div>
  <div class="card-footer">
      <h4 class="card-title">${newBurger.burgerType}</h4>
      <div class="ratings">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <h4>4.5</h4>
      </div>
      <div class="card-price">
          <h4>Ksh 1000</h4>
          <div class="icon-cont" data-index = "${index}">
              <i class="fas fa-cart-plus"></i>
          </div>
      </div>

  </div>
  </div>

`;

  //Appending the newly created Item
  for (i = 0; i < cardContainer.length; i++) {
    cardContainer[i].appendChild(newEl);
  }
});

// Cart Constructor

function Cart() {
  this.items = [];
  this.total = 0;
}

Cart.prototype.addToCart = function (item) {
  this.items.push(item);
};

const cart = new Cart();

// const cartSizes = document.querySelectorAll("#size");

// for (i = 0; i < cartSizes.length; i++) {
//   cartSizes[i].addEventListener("change", function () {
//     console.log(this.value);
//   });
// }

//targetting DOM elements

const cartList = document.querySelector(".cart-list");
const cartIcon = document.querySelectorAll(".icon-cont");
let bagdeCounter = document.getElementById("badge");
let counter = 0;

for (i = 0; i < cartIcon.length; i++) {
  cartIcon[i].addEventListener("click", function (e) {
    e.preventDefault();
    counter++;
    bagdeCounter.textContent = counter;

    const clickedBurger = newBurgers[this.getAttribute("data-index")];
    // clickedBurger.burgerPrice();

    clickedBurger.setSize();
    clickedBurger.setCrust();
    clickedBurger.setToppings();
    cart.addToCart(clickedBurger);
    addOrders();
    handleSize();

    

    console.log(cart);

    console.log(clickedBurger);
  });
}

//Adding Orders to The newly created element

function addOrders() {
  cartList.innerHTML = ""
  cart.items.forEach(function (clickedBurger, index) {
    const newOrder = document.createElement("li");
    newOrder.innerHTML = `<div class="" id="cart-item">
    <img src="${clickedBurger.image}" height="70" width="70" alt="">
    <div>
        <p id="title">${clickedBurger.burgerType}</p>
        <div class="quantity">
            <label for="quantity">Quantity</label>
            <input type="text"  id="quantity"  value="1">
        </div>
  
  
    </div>
    <div>
        <label for="">Size</label>
        <select id="size" selected name="Size" data-index="${index}">
            <option value="medium" >Medium</option>
            <option value="large">Large</option>
            <option value="small">Small</option>
        </select>
    </div>
    <div>
        <label for="">Crust</label>
        <select  id="crust"name="Crust">
            <option value="crispy">Crispy</option>
            <option value="stuffed">Stuffed</option>
            <option value="glutenFree">Gluten Free</option>
        </select>
    </div>
    <div class="size">
        <label for="">Toppings</label>
        <select id="toppings" name="Toppings">
            <option value="bacon">Bacon</option>
            <option value="chillies">Chillies</option>
            <option value="pesto">Pesto</option>
        </select>
    </div>
    <div  class="price">
        <h4 id="price">${clickedBurger.price}</h4>
    </div>
    <div class="delete">
        <i class="far fa-trash-alt"></i>
    </div>
  
  </div>`;

    cartList.appendChild(newOrder);
  });
}

function handleSize() {
  const cartSizes = document.querySelectorAll("#size");

  for (i = 0; i < cartSizes.length; i++) {
    cartSizes[i].addEventListener("change", function () {
      console.log(this.value);
      cart.items[this.getAttribute("data-index")].setSize(this.value)
      console.log(cart.items);
    });
  }
}
