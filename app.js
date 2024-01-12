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
});
