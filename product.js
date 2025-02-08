document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");

    // Sample watch data
    const watches = {
        1: { name: "Classic Black", price: "$299", image: "watch1.jpg" },
        2: { name: "Gold Edition", price: "$399", image: "watch2.jpg" }
    };

    // If product exists, update page
    if (watches[productId]) {
        document.getElementById("product-name").textContent = watches[productId].name;
        document.getElementById("product-price").textContent = watches[productId].price;
        document.getElementById("product-image").src = watches[productId].image;

        document.getElementById("add-to-cart").addEventListener("click", function () {
            alert(`${watches[productId].name} added to cart!`);
        });
    } else {
        document.querySelector(".product-details").innerHTML = "<p>Product not found.</p>";
    }
});
