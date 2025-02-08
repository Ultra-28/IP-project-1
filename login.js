function login() {
    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;
    
    if (username.trim() === "" || password.trim() === "") {
        alert("Please enter both username and password.");
        return;
    }
    
    window.location.href = 'shop.html';
}

document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally

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
    window.location.href = "login.html"; // Redirect to login page
});
