document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsList = document.getElementById("cart-items");
    const subtotalElement = document.getElementById("subtotal");
    const totalElement = document.getElementById("total");
    const discountAmountElement = document.getElementById("discount-amount");
    const discountCodeInput = document.getElementById("discount-code");
    const applyDiscountBtn = document.getElementById("apply-discount");

    let subtotal = cart.reduce((sum, item) => sum + item.price, 0);
    let discount = 0;

    function updateCartDisplay() {
        cartItemsList.innerHTML = "";
        cart.forEach(item => {
            let li = document.createElement("li");
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItemsList.appendChild(li);
        });
        subtotalElement.textContent = subtotal.toFixed(2);
        totalElement.textContent = (subtotal - discount).toFixed(2);
    }

    applyDiscountBtn.addEventListener("click", function () {
        let code = discountCodeInput.value.trim();
        if (code === "ALPHA10") {
            discount = subtotal * 0.10;
            alert("10% discount applied!");
        } else {
            discount = 0;
            alert("Invalid discount code.");
        }
        discountAmountElement.textContent = discount.toFixed(2);
        totalElement.textContent = (subtotal - discount).toFixed(2);
    });

    document.getElementById("credit-card-btn").addEventListener("click", function () {
        document.getElementById("credit-card-form").classList.remove("hidden");
    });

    document.getElementById("apple-pay-btn").addEventListener("click", function () {
        document.getElementById("credit-card-form").classList.add("hidden");
    });

    document.getElementById("google-pay-btn").addEventListener("click", function () {
        document.getElementById("credit-card-form").classList.add("hidden");
    });

    updateCartDisplay();
});
