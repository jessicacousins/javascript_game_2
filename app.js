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

  const updateQuantityInAllMenus = (pizzaType, newQuantity) => {
    document.querySelector(`#${pizzaType} .quantity`).textContent = newQuantity;
    document.querySelector(`#${pizzaType}Modal .quantity`).textContent =
      newQuantity;
  };

  const updateQuantity = (element, delta) => {
    let pizzaType = element.closest(".pizzaType").id;
    let currentQuantity =
      parseInt(document.querySelector(`#${pizzaType} .quantity`).textContent) ||
      0;
    let newQuantity = currentQuantity + delta;

    if (newQuantity >= 0) {
      updateQuantityInAllMenus(pizzaType, newQuantity);
      order[pizzaType] = newQuantity;
      updateCheckout();
    }
  };

  const pizzas = ["cheese", "pepperoni", "veggie"];

  const flipPizza = (nextPizza) => {
    document.querySelectorAll(".pizzaType").forEach((pizzaElement) => {
      pizzaElement.style.transform =
        pizzaElement.id === nextPizza ? "rotateY(0deg)" : "rotateY(180deg)";
    });
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
      } else if (event.target.classList.contains("img-fluid")) {
        let nextPizzaIndex = (pizzas.indexOf(currentPizza) + 1) % pizzas.length;
        currentPizza = pizzas[nextPizzaIndex];
        flipPizza(currentPizza);
      }
    });

  document
    .getElementById("menuModal")
    .addEventListener("click", function (event) {
      if (
        event.target.classList.contains("modal-plus") ||
        event.target.classList.contains("modal-minus")
      ) {
        let pizzaType = event.target.dataset.pizzaType;
        updateQuantity(
          document.querySelector(
            `#${pizzaType} .${
              event.target.classList.contains("modal-plus") ? "plus" : "minus"
            }`
          ),
          event.target.classList.contains("modal-plus") ? 1 : -1
        );
      }
    });

  flipPizza(currentPizza);
});

