// document.addEventListener("DOMContentLoaded", function () {
//   let currentPizza = "cheese";
//   const pizzaPrices = {
//     cheese: 15.99,
//     pepperoni: 18.99,
//     veggie: 17.99,
//   };

//   let order = {};

//   function resetOrder() {
//     order = {};
//     updateCheckout();
//     localStorage.removeItem("order");
//   }

//   document
//     .querySelector(".resetOrderBtn")
//     .addEventListener("click", resetOrder);

//   const updateCheckout = () => {
//     const checkoutList = document.querySelector(".checkoutList");
//     checkoutList.innerHTML = "<div>Order Items:</div>";
//     let total = 0;

//     for (const [pizza, quantity] of Object.entries(order)) {
//       if (quantity > 0) {
//         const cost = pizzaPrices[pizza] * quantity;
//         total += cost;
//         checkoutList.innerHTML += `<li class="orderItem">${pizza.toUpperCase()}: ${quantity} x $${
//           pizzaPrices[pizza]
//         } = $${cost.toFixed(2)}</li>`;
//       }
//     }

//     checkoutList.innerHTML += `<li class="total">Total: $${total.toFixed(
//       2
//     )}</li>`;
//     localStorage.setItem("order", JSON.stringify(order));
//   };

//   const updateQuantityInAllMenus = (pizzaType, newQuantity) => {
//     document.querySelector(`#${pizzaType} .quantity`).textContent = newQuantity;
//     document.querySelector(`#${pizzaType}Modal .quantity`).textContent =
//       newQuantity;
//   };

//   const updateQuantity = (element, delta) => {
//     console.log("updateQuantity called");
//     let pizzaType = element.closest(".pizzaType").id;
//     let currentQuantity =
//       parseInt(document.querySelector(`#${pizzaType} .quantity`).textContent) ||
//       0;
//     let newQuantity = currentQuantity + delta;

//     if (newQuantity >= 0) {
//       updateQuantityInAllMenus(pizzaType, newQuantity);
//       order[pizzaType] = newQuantity;
//       updateCheckout();
//     }
//   };

//   const pizzas = ["cheese", "pepperoni", "veggie"];

//   const flipPizza = (nextPizza) => {
//     document.querySelectorAll(".pizzaType").forEach((pizzaElement) => {
//       pizzaElement.style.transform =
//         pizzaElement.id === nextPizza ? "rotateY(0deg)" : "rotateY(180deg)";
//     });
//   };

//   document
//     .getElementById("menuContainer")
//     .addEventListener("click", function (event) {
//       if (
//         event.target.classList.contains("plus") ||
//         event.target.classList.contains("minus")
//       ) {
//         event.stopPropagation();
//         updateQuantity(
//           event.target,
//           event.target.classList.contains("plus") ? 1 : -1
//         );
//       } else if (event.target.classList.contains("img-fluid")) {
//         let nextPizzaIndex = (pizzas.indexOf(currentPizza) + 1) % pizzas.length;
//         currentPizza = pizzas[nextPizzaIndex];
//         flipPizza(currentPizza);
//       }
//     });

//   document
//     .getElementById("menuModal")
//     .addEventListener("click", function (event) {
//       if (
//         event.target.classList.contains("modal-plus") ||
//         event.target.classList.contains("modal-minus")
//       ) {
//         let pizzaType = event.target.dataset.pizzaType;
//         updateQuantity(
//           document.querySelector(
//             `#${pizzaType} .${
//               event.target.classList.contains("modal-plus") ? "plus" : "minus"
//             }`
//           ),
//           event.target.classList.contains("modal-plus") ? 1 : -1
//         );
//       }
//     });

//   flipPizza(currentPizza);
// });

// function adjustForMobileView() {
//   const bodyElement = document.body;
//   const mobileViewBreakpoint = 768;

//   if (window.innerWidth < mobileViewBreakpoint) {
//     bodyElement.classList.add("mobile-view");
//   } else {
//     bodyElement.classList.remove("mobile-view");
//   }
// }

// window.addEventListener("resize", adjustForMobileView);

// adjustForMobileView();

// ! OG

// document.addEventListener("DOMContentLoaded", function () {
//   let currentPizza = "cheese";
//   const pizzaPrices = {
//     cheese: 15.99,
//     pepperoni: 18.99,
//     veggie: 17.99,
//   };

//   let order = {};

//   const updateCheckout = () => {
//     const checkoutList = document.querySelector(".checkoutList");
//     checkoutList.innerHTML = "<div>Order Items:</div>";
//     let total = 0;

//     for (const [pizza, quantity] of Object.entries(order)) {
//       if (quantity > 0) {
//         const cost = pizzaPrices[pizza] * quantity;
//         total += cost;
//         checkoutList.innerHTML += `<li class="orderItem">${pizza.toUpperCase()}: ${quantity} x $${
//           pizzaPrices[pizza]
//         } = $${cost.toFixed(2)}</li>`;
//       }
//     }

//     checkoutList.innerHTML += `<li class="total">Total: $${total.toFixed(
//       2
//     )}</li>`;
//     localStorage.setItem("order", JSON.stringify(order));
//   };

//   const updateQuantityInAllMenus = (pizzaType, newQuantity) => {
//     document.querySelector(`#${pizzaType} .quantity`).textContent = newQuantity;
//     document.querySelector(`#${pizzaType}Modal .quantity`).textContent =
//       newQuantity;
//   };

//   const updateQuantity = (element, delta) => {
//     let pizzaType = element.closest(".pizzaType").id;
//     let currentQuantity =
//       parseInt(document.querySelector(`#${pizzaType} .quantity`).textContent) ||
//       0;
//     let newQuantity = currentQuantity + delta;

//     if (newQuantity >= 0) {
//       updateQuantityInAllMenus(pizzaType, newQuantity);
//       order[pizzaType] = newQuantity;
//       updateCheckout();
//     }
//   };

//   const pizzas = ["cheese", "pepperoni", "veggie"];

//   const flipPizza = (nextPizza) => {
//     document.querySelectorAll(".pizzaType").forEach((pizzaElement) => {
//       pizzaElement.style.transform =
//         pizzaElement.id === nextPizza ? "rotateY(0deg)" : "rotateY(180deg)";
//     });
//   };

//   document
//     .getElementById("menuContainer")
//     .addEventListener("click", function (event) {
//       if (
//         event.target.classList.contains("plus") ||
//         event.target.classList.contains("minus")
//       ) {
//         event.stopPropagation();
//         updateQuantity(
//           event.target,
//           event.target.classList.contains("plus") ? 1 : -1
//         );
//       } else if (event.target.classList.contains("img-fluid")) {
//         let nextPizzaIndex = (pizzas.indexOf(currentPizza) + 1) % pizzas.length;
//         currentPizza = pizzas[nextPizzaIndex];
//         flipPizza(currentPizza);
//       }
//     });

//   document
//     .getElementById("menuModal")
//     .addEventListener("click", function (event) {
//       if (
//         event.target.classList.contains("modal-plus") ||
//         event.target.classList.contains("modal-minus")
//       ) {
//         let pizzaType = event.target.dataset.pizzaType;
//         updateQuantity(
//           document.querySelector(
//             `#${pizzaType} .${
//               event.target.classList.contains("modal-plus") ? "plus" : "minus"
//             }`
//           ),
//           event.target.classList.contains("modal-plus") ? 1 : -1
//         );
//       }
//     });

//   flipPizza(currentPizza);
// });

// function adjustForMobileView() {
//   const bodyElement = document.body;
//   const mobileViewBreakpoint = 768;

//   if (window.innerWidth < mobileViewBreakpoint) {
//     bodyElement.classList.add("mobile-view");
//   } else {
//     bodyElement.classList.remove("mobile-view");
//   }
// }

// window.addEventListener("resize", adjustForMobileView);

// adjustForMobileView();

// TODO: almost
// let pizzaOrder = JSON.parse(localStorage.getItem("pizzaOrder")) || {
//   cheese: 0,
//   pepperoni: 0,
//   veggie: 0,
// };

// function updateOrderDisplay() {
//   document.querySelectorAll(".pizzaType").forEach((pizza) => {
//     const pizzaType = pizza.id;
//     const quantityDisplay = pizza.querySelector(".quantity");
//     if (quantityDisplay) {
//       quantityDisplay.textContent = pizzaOrder[pizzaType];
//     }
//   });

//   document.querySelectorAll(".modal-body .quantity").forEach((element) => {
//     const pizzaType =
//       element.previousElementSibling.getAttribute("data-pizza-type");
//     if (pizzaOrder[pizzaType] !== undefined) {
//       element.textContent = pizzaOrder[pizzaType];
//     }
//   });

//   const orderList = document.querySelector(".checkoutList .orderItem");
//   if (orderList) {
//     orderList.innerHTML = Object.entries(pizzaOrder)
//       .filter(([_, quantity]) => quantity > 0)
//       .map(
//         ([pizza, quantity]) =>
//           `<li>${
//             pizza.charAt(0).toUpperCase() + pizza.slice(1)
//           } Pizza: ${quantity}</li>`
//       )
//       .join("");
//     const totalElement = document.querySelector(".checkoutList .total");
//     if (totalElement) {
//       const prices = { cheese: 15.99, pepperoni: 18.99, veggie: 17.99 };
//       const total = Object.entries(pizzaOrder).reduce(
//         (acc, [pizza, quantity]) => acc + prices[pizza] * quantity,
//         0
//       );
//       totalElement.textContent = `Total: $${total.toFixed(2)}`;
//     }
//   }
// }

// function modifyOrder(pizzaType, increment) {
//   const currentQuantity = pizzaOrder[pizzaType] || 0;
//   const newQuantity = currentQuantity + increment;

//   if (newQuantity >= 0) {
//     pizzaOrder[pizzaType] = newQuantity;
//     localStorage.setItem("pizzaOrder", JSON.stringify(pizzaOrder));
//     updateOrderDisplay();
//   }
// }

// document.addEventListener("DOMContentLoaded", () => {
//   updateOrderDisplay();

//   document.querySelectorAll(".plus, .modal-plus").forEach((button) => {
//     button.addEventListener("click", () => {
//       const pizzaType =
//         button.getAttribute("data-pizza-type") ||
//         button.closest(".pizzaType").id;
//       modifyOrder(pizzaType, 1);
//     });
//   });

//   document.querySelectorAll(".minus, .modal-minus").forEach((button) => {
//     button.addEventListener("click", () => {
//       const pizzaType =
//         button.getAttribute("data-pizza-type") ||
//         button.closest(".pizzaType").id;
//       modifyOrder(pizzaType, -1);
//     });
//   });

//   const resetOrderBtn = document.querySelector(".resetOrderBtn");
//   if (resetOrderBtn) {
//     resetOrderBtn.addEventListener("click", () => {
//       pizzaOrder = { cheese: 0, pepperoni: 0, veggie: 0 };
//       localStorage.setItem("pizzaOrder", JSON.stringify(pizzaOrder));
//       updateOrderDisplay();
//     });
//   }
// });

// TODO: first attempt

// document.addEventListener("DOMContentLoaded", function () {
//   let currentPizza = "cheese";
//   const pizzaPrices = {
//     cheese: 15.99,
//     pepperoni: 18.99,
//     veggie: 17.99,
//   };

//   let order = JSON.parse(localStorage.getItem("order")) || {};

//   function resetOrder() {
//     order = {};
//     updateCheckout();
//     localStorage.removeItem("order");
//   }

//   document
//     .querySelector(".resetOrderBtn")
//     .addEventListener("click", resetOrder);

//   const updateCheckout = () => {
//     const checkoutList = document.querySelector(".checkoutList");
//     checkoutList.innerHTML = "<div>Order Items:</div>";
//     let total = 0;

//     for (const [pizza, quantity] of Object.entries(order)) {
//       if (quantity > 0) {
//         const cost = pizzaPrices[pizza] * quantity;
//         total += cost;
//         checkoutList.innerHTML += `<li class="orderItem">${pizza.toUpperCase()}: ${quantity} x ${
//           pizzaPrices[pizza]
//         } = $${cost.toFixed(2)}</li>`;
//       }
//     }

//     checkoutList.innerHTML += `<li class="total">Total: $${total.toFixed(
//       2
//     )}</li>`;
//     localStorage.setItem("order", JSON.stringify(order));
//   };

//   const updateQuantityInAllMenus = (pizzaType, newQuantity) => {
//     document.querySelectorAll(`#${pizzaType} .quantity`).forEach((elem) => {
//       elem.textContent = newQuantity;
//     });
//     if (document.querySelector(`#${pizzaType}Modal .quantity`)) {
//       document.querySelector(`#${pizzaType}Modal .quantity`).textContent =
//         newQuantity;
//     }
//   };

//   const updateQuantity = (element, delta) => {
//     let pizzaType = element.closest(".pizzaType").id;
//     let currentQuantity =
//       parseInt(document.querySelector(`#${pizzaType} .quantity`).textContent) ||
//       0;
//     let newQuantity = currentQuantity + delta;

//     if (newQuantity >= 0) {
//       updateQuantityInAllMenus(pizzaType, newQuantity);
//       order[pizzaType] = newQuantity;
//       updateCheckout();
//     }
//   };

//   document
//     .getElementById("menuContainer")
//     .addEventListener("click", function (event) {
//       if (
//         event.target.classList.contains("plus") ||
//         event.target.classList.contains("minus")
//       ) {
//         event.stopPropagation();
//         updateQuantity(
//           event.target,
//           event.target.classList.contains("plus") ? 1 : -1
//         );
//       } else if (event.target.classList.contains("img-fluid")) {
//         let nextPizzaIndex = (pizzas.indexOf(currentPizza) + 1) % pizzas.length;
//         currentPizza = pizzas[nextPizzaIndex];
//         flipPizza(currentPizza);
//       }
//     });

//   document
//     .getElementById("menuModal")
//     .addEventListener("click", function (event) {
//       if (
//         event.target.classList.contains("modal-plus") ||
//         event.target.classList.contains("modal-minus")
//       ) {
//         event.stopPropagation();
//         let pizzaType = event.target.dataset.pizzaType;
//         updateQuantity(
//           document.querySelector(
//             `#${pizzaType} .${
//               event.target.classList.contains("modal-plus") ? "plus" : "minus"
//             }`
//           ),
//           event.target.classList.contains("modal-plus") ? 1 : -1
//         );
//       }
//     });

//   const pizzas = ["cheese", "pepperoni", "veggie"];

//   const flipPizza = (nextPizza) => {
//     document.querySelectorAll(".pizzaType").forEach((pizzaElement) => {
//       pizzaElement.style.transform =
//         pizzaElement.id === nextPizza ? "rotateY(0deg)" : "rotateY(180deg)";
//     });
//   };

//   flipPizza(currentPizza);
//   updateCheckout(); // Ensure the checkout is updated on page load with current order

//   function adjustForMobileView() {
//     const bodyElement = document.body;
//     const mobileViewBreakpoint = 768;

//     if (window.innerWidth < mobileViewBreakpoint) {
//       bodyElement.classList.add("mobile-view");
//     } else {
//       bodyElement.classList.remove("mobile-view");
//     }
//   }

//   window.addEventListener("resize", adjustForMobileView);
//   adjustForMobileView();
// });

// ! working
document.addEventListener("DOMContentLoaded", function () {
  let currentPizza = "cheese";
  const pizzaPrices = {
    cheese: 15.99,
    pepperoni: 18.99,
    veggie: 17.99,
  };

  let order = JSON.parse(localStorage.getItem("order")) || {};

  function resetOrder() {
    order = {};
    localStorage.setItem("order", JSON.stringify(order));
    updateUI();
  }

  document
    .querySelector(".resetOrderBtn")
    ?.addEventListener("click", resetOrder);

  function updateUI() {
    const checkoutList = document.querySelector(".checkoutList");
    if (checkoutList) {
      checkoutList.innerHTML = "<div>Order Items:</div>";
      let total = 0;

      for (const [pizza, quantity] of Object.entries(order)) {
        if (quantity > 0) {
          const cost = pizzaPrices[pizza] * quantity;
          total += cost;
          checkoutList.innerHTML += `<li class="orderItem">${pizza.toUpperCase()}: ${quantity} x ${
            pizzaPrices[pizza]
          } = $${cost.toFixed(2)}</li>`;
        }
      }

      checkoutList.innerHTML += `<li class="total">Total: $${total.toFixed(
        2
      )}</li>`;
    }

    document
      .querySelectorAll(
        ".pizzaType, .pizzaFull, .cheesePizzaFull, .pepperoniPizzaFull, .veggiePizzaFull"
      )
      .forEach((element) => {
        const type = element.id.replace("Modal", "");
        const quantityElement = element.querySelector(".quantity");
        if (quantityElement) {
          quantityElement.textContent = order[type] || 0;
        }
      });
  }

  function modifyOrder(pizzaType, increment) {
    const currentQuantity = order[pizzaType] || 0;
    const newQuantity = Math.max(currentQuantity + increment, 0);
    order[pizzaType] = newQuantity;
    localStorage.setItem("order", JSON.stringify(order));
    updateUI();
  }

  document
    .querySelectorAll(".plus, .minus, .modal-plus, .modal-minus")
    .forEach((button) => {
      button.addEventListener("click", function () {
        const pizzaType =
          this.dataset.pizzaType ||
          this.closest(
            ".pizzaType, .pizzaFull, .cheesePizzaFull, .pepperoniPizzaFull, .veggiePizzaFull"
          ).id.replace("Modal", "");
        const increment =
          this.classList.contains("plus") ||
          this.classList.contains("modal-plus")
            ? 1
            : -1;
        modifyOrder(pizzaType, increment);
      });
    });

  const pizzas = ["cheese", "pepperoni", "veggie"];

  const flipPizza = (nextPizza) => {
    document.querySelectorAll(".pizzaType").forEach((pizzaElement) => {
      pizzaElement.style.transform =
        pizzaElement.id === nextPizza ? "rotateY(0deg)" : "rotateY(180deg)";
    });
  };

  document
    .getElementById("menuContainer")
    ?.addEventListener("click", function (event) {
      if (event.target.classList.contains("img-fluid")) {
        let nextPizzaIndex = (pizzas.indexOf(currentPizza) + 1) % pizzas.length;
        currentPizza = pizzas[nextPizzaIndex];
        flipPizza(currentPizza);
      }
    });

  updateUI();
});
