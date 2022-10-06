const cartItems = document.querySelectorAll(".cart-item");

const calculation = () => {
  cartItems.forEach((cartItem) => {
    totalPrice = cartItem.querySelector(".cart-item-total-price span");
    quantity = cartItem.querySelector(".cart-item-quantity input").value;
    price = cartItem.querySelector(".cart-item-price").innerText;
    totalPrice.innerText = price * quantity;
  });
};

calculation();

cartItems.forEach((cartItem) => {
  cartItem.querySelector(".close-btn").addEventListener("click", () => {
    cartItem.remove();
  });
});
