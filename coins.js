// Load stored data or initialize
let coins = localStorage.getItem("coins") ? parseInt(localStorage.getItem("coins")) : 0;
let lastLogin = localStorage.getItem("lastLogin") || ""; // Ensure it's a string

// Update UI on page load
document.getElementById("coinCount").textContent = coins;
document.getElementById("lastLogin").textContent = lastLogin ? lastLogin : "Never";

// Function to earn coins
function earnCoins(amount) {
    coins += amount;
    updateCoins();
}

// Function to spend coins
function spendCoins(amount) {
    if (coins >= amount) {
        coins -= amount;
        updateCoins();
    } else {
        alert("Not enough coins!");
    }
}

// Function to claim daily reward
function claimDailyReward() {
    let today = new Date().toDateString(); // e.g., "Sat Feb 08 2025"
    
    console.log("Today's Date:", today);
    console.log("Last Login Date:", lastLogin);

    if (lastLogin !== today) {
        coins += 50; // Reward amount
        lastLogin = today;
        
        // Update UI and store new values
        updateCoins();
        document.getElementById("lastLogin").textContent = lastLogin;
        localStorage.setItem("lastLogin", lastLogin);

        alert("You received 50 coins for logging in today!");
    } else {
        alert("You've already claimed today's reward. Come back tomorrow!");
    }
}

// Function to update UI and save to localStorage
function updateCoins() {
    document.getElementById("coinCount").textContent = coins;
    localStorage.setItem("coins", coins);
}

// Debugging: Log stored values on page load
console.log("Stored Last Login:", lastLogin);

