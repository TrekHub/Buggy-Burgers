// The Burger Constructor
function Burger(burgerType, id, image = './assets/burger.png') {

  this.burgerType = burgerType;
  this.id = id;
  this.image = image;
  this.size = {};
  this.toppings = [];
  this.price = 0;
  this.crust = {};
}


const newBurgers = [new Burger('james', 1), new Burger('Ted', 2), new Burger('Bob', 3), new Burger('Brown', 4)];
  
console.log(newBurgers);

// console.log(cardContainer.innerHTML)


newBurgers.forEach(function(newBurger, index) {

  const cardContainer = document.querySelectorAll('.card-container')
  let newEl = document.createElement('div');
  

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
for( i = 0; i < cardContainer.length; i++) {
  cardContainer[i].appendChild(newEl)

};



})

// Sizes array of objects

const sizes = [
  {
    size: "small",
    price: 200,
  },
  {
    size: "medium",
    price: 400,
  },
  {
    size: "large",
    price: 600,
  },
];

// Toppings array of objects

const toppings = [
  {
    id: 1,
    toppingName: "chiles",
    price: 300,
  },
  {
    id: 2,
    toppingName: "Bacon",
    price: 600,
  },
  {
    id: 3,
    toppingName: "pickles",
    price: 100,
  },
  {
    id: 4,
    toppingName: "lettuce",
    price: 200,
  },
];

// The crust array of objects

const crusts = [
  {
    id: 1,
    crustName: "Crispy",
    price: 300,
  },
  {
    id: 2,
    crustName: "Stuffed",
    price: 300,
  },
  {
    id: 3,
    crustName: "Gluten Free",
    price: 300,
  },
];

Burger.prototype.calculateBurgerPrice = function () {};

const cartList = document.querySelector(".cart-list");
const cartIcon = document.querySelectorAll(".icon-cont");


for (i = 0; i < cartIcon.length; i++) {
  cartIcon[i].addEventListener("click", function (e) {
    // console.log(this.getAttribute("data-index"))


  const clickedBurger = newBurgers[this.getAttribute("data-index")]
  console.log(clickedBurger)
    // cartList.appendChild(item);
    
  });
}
















