// The Burger Constructor
function Burger(burgerType, id, image = "./assets/burger.png") {
  this.burgerType = burgerType;
  this.id = id;
  this.image = image;
  this.size = {};
  this.toppings = [];
  this.price = 0;
  this.crust = {};
}

const newBurgers = [
  new Burger("Beef Burger", 1),
  new Burger("Chicken Burger", 2),
  new Burger("Veggie Burger", 3),
  new Burger("Bison Burger", 4),
];

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

//targetting DOM elements

const cartList = document.querySelector(".cart-list");
const cartIcon = document.querySelectorAll(".icon-cont");
let bagdeCounter = document.getElementById("badge");
let counter = 0;

for (i = 0; i < cartIcon.length; i++) {
  cartIcon[i].addEventListener("click", function (e) {
    counter++;
    bagdeCounter.textContent = counter;

    const clickedBurger = newBurgers[this.getAttribute("data-index")];

    addOrders(clickedBurger);
  });
}

//Adding Orders to The newly created element

function addOrders(clickedBurger) {
  const newOrder = document.createElement("li");
  newOrder.innerHTML = `<div class="" id="cart-item">
  <img src="${clickedBurger.image}" height="70" width="70" alt="">
  <div>
      <p id="title">${clickedBurger.burgerType}</p>
      <div class="quantity">
          <label for="quantity">Quantity</label>
          <input type="text" value="1">
      </div>


  </div>
  <div>
      <label for="">Size</label>
      <select name="Size">
          <option value="" selected>Medium</option>
          <option value="">Large</option>
          <option value="">Small</option>
      </select>
  </div>
  <div>
      <label for="">Crust</label>
      <select name="Size">
          <option value="" selected>Crispy</option>
          <option value="">Stuffed</option>
          <option value="">Gluten Free</option>
      </select>
  </div>
  <div class="size">
      <label for="">Toppings</label>
      <select name="Size">
          <option value="" selected>Medium</option>
          <option value="">Large</option>
          <option value="">Small</option>
      </select>
  </div>
  <div class="price">
      <h4>Ksh 1000</h4>
  </div>
  <div class="delete">
      <i class="far fa-trash-alt"></i>
  </div>

</div>`;

  cartList.appendChild(newOrder);
}
