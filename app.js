document.addEventListener("DOMContentLoaded", function () {
  let currentPizza = "cheese";

  document
    .getElementById("menuContainer")
    .addEventListener("click", function () {
      const pizzas = ["cheese", "pepperoni", "veggie"];
      let nextPizzaIndex = (pizzas.indexOf(currentPizza) + 1) % pizzas.length;
      currentPizza = pizzas[nextPizzaIndex];

      document.querySelectorAll(".pizzaType").forEach(function (pizza) {
        pizza.style.transform =
          pizza.id === currentPizza ? "rotateY(0deg)" : "rotateY(180deg)";
      });
    });

  const updateQuantity = (element, delta) => {
    let quantitySpan = element.parentNode.querySelector(".quantity");
    let currentQuantity = parseInt(quantitySpan.textContent);
    let newQuantity = currentQuantity + delta;
    if (newQuantity >= 0) {
      quantitySpan.textContent = newQuantity;
    }
  };

  document.querySelectorAll(".plus").forEach((button) => {
    button.addEventListener("click", () => updateQuantity(button, 1));
  });

  document.querySelectorAll(".minus").forEach((button) => {
    button.addEventListener("click", () => updateQuantity(button, -1));
  });
});
