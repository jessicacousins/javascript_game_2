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
