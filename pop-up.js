document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("coinsModal");
    const closeModal = document.querySelector(".close-btn");

    // Check if user just logged in
    let username = localStorage.getItem("currentUser");
    if (username && !localStorage.getItem("coinsPopupShown")) {
        modal.style.display = "block"; // Show modal
        localStorage.setItem("coinsPopupShown", "true"); // Prevent future auto pop-ups
    }

    // Close the modal when clicking "X"
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close the modal when clicking outside
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
