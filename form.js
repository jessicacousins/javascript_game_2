document.addEventListener("DOMContentLoaded", function () {
  const order = JSON.parse(localStorage.getItem("order") || "{}");

  const form = document.getElementById("orderForm");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      submitOrder();
    });
  }

  function submitOrder() {
    const name = document.querySelector("[name='name']").value;
    const address = document.querySelector("[name='address']").value;
    const contact = document.querySelector("[name='contact']").value;
    const instructions = document.querySelector("[name='instructions']").value;
    const total = calculateTotal(order);

    const orderData = {
      name,
      address,
      contact,
      instructions,
      items: Object.entries(order).map(([pizza, quantity]) => ({
        pizza,
        quantity,
      })),
      total,
    };

    fetch("http://localhost:5000/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Order submitted:", data);
        localStorage.removeItem("order");
      })
      .catch((error) => console.error("Error:", error));
  }

  function calculateTotal(order) {
    const pizzaPrices = {
      cheese: 15.99,
      pepperoni: 18.99,
      veggie: 17.99,
    };
    return Object.entries(order).reduce((total, [pizza, quantity]) => {
      return total + (pizzaPrices[pizza] * quantity || 0);
    }, 0);
  }
});
