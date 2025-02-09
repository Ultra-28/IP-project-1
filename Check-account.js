document.addEventListener("DOMContentLoaded", function () {
    // Handle sign-up
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

            let users = JSON.parse(localStorage.getItem("users")) || [];

            if (users.some(user => user.username === username)) {
                alert("Username already exists!");
                return;
            }

            // Save user with default coin data
            users.push({ username, password });
            localStorage.setItem("users", JSON.stringify(users));

            // Initialize coin system for the new user
            localStorage.setItem("coins_" + username, "0");
            localStorage.setItem("lastLogin_" + username, "");
            localStorage.setItem("streakCounter_" + username, "0");

            alert("Sign-up successful!");
            window.location.href = "login.html";
        });
    }

    // Handle login
    let loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let enteredUsername = document.getElementById("login-username").value;
            let enteredPassword = document.getElementById("login-password").value;

            let users = JSON.parse(localStorage.getItem("users")) || [];
            let user = users.find(user => user.username === enteredUsername && user.password === enteredPassword);

            if (user) {
                localStorage.setItem("currentUser", enteredUsername);
                alert("Login successful!");
                window.location.href = "shop.html"; // Redirect to shop page
            } else {
                alert("Invalid username or password!");
            }
        });
    }

    // Logout function
    window.logout = function () {
        localStorage.removeItem("currentUser");
        alert("Logged out!");
        window.location.href = "login.html";
    };
});
