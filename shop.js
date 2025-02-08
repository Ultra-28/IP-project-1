document.addEventListener("DOMContentLoaded", function () {
    const cartCount = document.getElementById("cart-count");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Update cart count on page load
    cartCount.textContent = cart.length;

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            const product = this.closest(".product");
            const name = product.dataset.name;
            const price = parseFloat(product.dataset.price);

            // Add the product to the cart
            cart.push({ name, price });

            // Save the updated cart to localStorage
            localStorage.setItem("cart", JSON.stringify(cart));

            // Update the cart count in the header
            cartCount.textContent = cart.length;

            alert(`${name} has been added to your cart!`);
        });
    });
});
