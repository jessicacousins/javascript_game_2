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
//   };

//   const updateQuantity = (element, delta) => {
//     let pizzaType = element.closest(".pizzaType").id;
//     let quantitySpan = element.parentNode.querySelector(".quantity");
//     let currentQuantity = parseInt(quantitySpan.textContent) || 0;
//     let newQuantity = currentQuantity + delta;

//     if (newQuantity >= 0) {
//       quantitySpan.textContent = newQuantity;
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
//         return;
//       }

//       const pizzas = ["cheese", "pepperoni", "veggie"];
//       let nextPizzaIndex = (pizzas.indexOf(currentPizza) + 1) % pizzas.length;
//       currentPizza = pizzas[nextPizzaIndex];

//       document.querySelectorAll(".pizzaType").forEach(function (pizza) {
//         pizza.style.transform =
//           pizza.id === currentPizza ? "rotateY(0deg)" : "rotateY(180deg)";
//       });
//     });

//   document.querySelectorAll(".plus").forEach((button) => {
//     button.addEventListener("click", (event) => {
//       event.stopPropagation();
//       updateQuantity(button, 1);
//     });
//   });

//   document.querySelectorAll(".minus").forEach((button) => {
//     button.addEventListener("click", (event) => {
//       event.stopPropagation();
//       updateQuantity(button, -1);
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  let currentPizza = "cheese";
  const pizzaPrices = {
    cheese: 15.99,
    pepperoni: 18.99,
    veggie: 17.99,
  };

  let order = {};

  const updateCheckout = () => {
    const checkoutList = document.querySelector(".checkoutList");
    checkoutList.innerHTML = "<div>Order Items:</div>";
    let total = 0;

    for (const [pizza, quantity] of Object.entries(order)) {
      if (quantity > 0) {
        const cost = pizzaPrices[pizza] * quantity;
        total += cost;
        checkoutList.innerHTML += `<li class="orderItem">${pizza.toUpperCase()}: ${quantity} x $${
          pizzaPrices[pizza]
        } = $${cost.toFixed(2)}</li>`;
      }
    }

    checkoutList.innerHTML += `<li class="total">Total: $${total.toFixed(
      2
    )}</li>`;
    localStorage.setItem("order", JSON.stringify(order));
  };

  const updateQuantity = (element, delta) => {
    let pizzaType = element.closest(".pizzaType").id;
    let quantitySpan = element.parentNode.querySelector(".quantity");
    let currentQuantity = parseInt(quantitySpan.textContent) || 0;
    let newQuantity = currentQuantity + delta;

    if (newQuantity >= 0) {
      quantitySpan.textContent = newQuantity;
      order[pizzaType] = newQuantity;
      updateCheckout();
    }
  };

  document
    .getElementById("menuContainer")
    .addEventListener("click", function (event) {
      if (
        event.target.classList.contains("plus") ||
        event.target.classList.contains("minus")
      ) {
        event.stopPropagation();
        updateQuantity(
          event.target,
          event.target.classList.contains("plus") ? 1 : -1
        );
      }
    });
});
