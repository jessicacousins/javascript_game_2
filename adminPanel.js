document.addEventListener("DOMContentLoaded", function () {
  const orderList = document.getElementById("orderList");

  // Fetch orders from the backend/update the UI
  function fetchOrdersAndUpdateUI() {
    fetch("http://localhost:5000/api/orders")
      .then((response) => response.json())
      .then((orders) => {
        orderList.innerHTML = "";
        orders.forEach((order) => {
          createOrderCard(order);
        });
      })
      .catch((error) => console.error("Error fetching orders:", error));
  }

  // create card for each order
  function createOrderCard(order) {
    const card = document.createElement("div");
    card.className = "card order-card mb-3";
    let itemsContent = order.items
      .map((item) => {
        const price = parseFloat(item.price);
        if (!isNaN(price)) {
          return `${item.pizza}: ${item.quantity} x $${price.toFixed(2)} = $${(
            price * item.quantity
          ).toFixed(2)}`;
        } else {
          return `${item.pizza}: ${item.quantity} - Price not available`;
        }
      })
      .join("</li><li class='list-group-item'>");

    let cardContent = `
    <div class="card-header">
        Order ID: ${order._id}
    </div>
    <div class="card-body">
        <h5 class="card-title">Customer: ${order.name}</h5>
        <p>Address: ${order.address}</p>
        <p>Contact: ${order.contact}</p>
        <p>Special Instructions: ${order.instructions}</p>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${itemsContent}</li>
        </ul>
      <div class="card-footer">
          Total: ${
            order.total ? `$${order.total.toFixed(2)}` : "Total not available"
          }
      </div>
  `;
    card.innerHTML = cardContent;
    orderList.appendChild(card);
  }

  fetchOrdersAndUpdateUI();
});
