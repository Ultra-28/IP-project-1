document.addEventListener("DOMContentLoaded", function () {
    let currentUser = localStorage.getItem("currentUser");

    if (!currentUser) {
        alert("No user logged in!");
        window.location.href = "index.html";
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(u => u.username === currentUser);

    if (user) {
        document.getElementById("username").value = user.username;
        document.getElementById("name").value = user.name || "";
        document.getElementById("email").value = user.email || "";
        document.getElementById("password").value = user.password;
    }

    document.getElementById("profile-form").addEventListener("submit", function (event) {
        event.preventDefault();

        let updatedUsername = document.getElementById("username").value;
        let updatedName = document.getElementById("name").value;
        let updatedEmail = document.getElementById("email").value;
        let updatedPassword = document.getElementById("password").value;

        if (updatedUsername === "" || updatedPassword === "") {
            alert("Username and Password cannot be empty!");
            return;
        }

        if (users.some(u => u.username !== currentUser && u.username === updatedUsername)) {
            alert("Username already exists!");
            return;
        }

        let updatedUser = { username: updatedUsername, name: updatedName, email: updatedEmail, password: updatedPassword };

        users = users.map(u => u.username === currentUser ? updatedUser : u);
        localStorage.setItem("users", JSON.stringify(users));

        if (updatedUsername !== currentUser) {
            localStorage.setItem("currentUser", updatedUsername);
        }

        alert("Profile updated successfully!");
        window.location.href = "shop.html";
    });
});

function togglePassword() {
    let passwordField = document.getElementById("password");
    passwordField.type = passwordField.type === "password" ? "text" : "password";
}