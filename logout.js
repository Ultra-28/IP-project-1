document.addEventListener("DOMContentLoaded", function () {
    console.log("Logout script loaded."); // Debugging

    let logoutButton = document.getElementById("logout-button");
    
    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            console.log("Logout button clicked."); // Debugging
            localStorage.removeItem("currentUser");
            alert("Logged out successfully!");
            localStorage.removeItem("coinsPopupShown");
            window.location.href = "index.html"; // Redirect to homepage
        });
    } else {
        console.error("Logout button not found!");
    }
});
