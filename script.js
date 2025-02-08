document.addEventListener("DOMContentLoaded", function () {
    // Retrieve cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total-price");

    // Update cart count across all pages
    if (cartCount) {
        cartCount.textContent = cart.length;
    }

    // Add to cart event listener (Product page)
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            const product = this.closest(".product");
            const name = product.dataset.name;
            const price = parseFloat(product.dataset.price);

            // Add product to cart array
            cart.push({ name, price });

            // Save updated cart to localStorage
            localStorage.setItem("cart", JSON.stringify(cart));

            // Update cart count across pages
            if (cartCount) {
                cartCount.textContent = cart.length;
            }

            alert(`${name} has been added to your cart!`);
        });
    });

    // Handle cart page logic (display cart items and total)
    if (document.getElementById("cart-items")) {
        const cartItemsDiv = document.getElementById("cart-items");
        let totalPrice = 0;

        // Display cart items on the cart page
        cart.forEach((item, index) => {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("cart-item");
            itemDiv.innerHTML = `
                <p>${item.name} - $${item.price}</p>
                <button class="remove-item" data-index="${index}">Remove</button>
            `;
            cartItemsDiv.appendChild(itemDiv);
            totalPrice += item.price;
        });

        // Update total price
        if (cartTotal) {
            cartTotal.textContent = totalPrice;
        }

        // Remove item from cart logic
        document.querySelectorAll(".remove-item").forEach(button => {
            button.addEventListener("click", function () {
                const index = button.dataset.index;

                // Remove item from cart array
                cart.splice(index, 1);

                // Save updated cart to localStorage
                localStorage.setItem("cart", JSON.stringify(cart));

                // Update the cart count across pages
                if (cartCount) {
                    cartCount.textContent = cart.length;
                }

                // Re-render the cart page
                location.reload();
            });
        });
    }

    // Handle checkout page logic (display cart items and total)
    if (document.getElementById("checkout-items")) {
        const checkoutItemsDiv = document.getElementById("checkout-items");
        const checkoutTotal = document.getElementById("checkout-total-price");
        let totalPrice = 0;

        // Display cart items on checkout page
        cart.forEach(item => {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("checkout-item");
            itemDiv.innerHTML = `
                <p>${item.name} - $${item.price}</p>
            `;
            checkoutItemsDiv.appendChild(itemDiv);
            totalPrice += item.price;
        });

        // Update total price on checkout page
        if (checkoutTotal) {
            checkoutTotal.textContent = totalPrice;
        }
    }
});
