// Ensure the script runs only after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    
    // Handle sign-up form submission
    let signupForm = document.getElementById("signup-form");
    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();
            
            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;

            if (username === "" || password === "") {
                alert("Please enter both username and password!");
                return;
            }

            // Store credentials in Local Storage
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);

            alert("Sign-up successful! Redirecting to login page...");
            window.location.href = "login page.html";
        });
    }

    // Handle login form submission
    let loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let storedUsername = localStorage.getItem("username");
            let storedPassword = localStorage.getItem("password");

            let enteredUsername = document.getElementById("login-username").value;
            let enteredPassword = document.getElementById("login-password").value;

            if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
                alert("Login successful!");
                window.location.href = "shop.html"; // Redirect to a dashboard page
            } else {
                alert("Invalid username or password!");
            }
        });
    }
});
