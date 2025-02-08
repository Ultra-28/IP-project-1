document.addEventListener("DOMContentLoaded", function () {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartCount = document.getElementById("cart-count");
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");

    // Update cart count on page load (for cart.html)
    cartCount.textContent = cart.length;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        let totalPrice = 0;
        cartItemsContainer.innerHTML = cart.map(item => {
            totalPrice += item.price;
            return `
                <div class="cart-item">
                    <p>${item.name} - $${item.price.toFixed(2)}</p>
                </div>
            `;
        }).join("");

        totalPriceElement.textContent = totalPrice.toFixed(2);
    }
});

