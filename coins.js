document.addEventListener("DOMContentLoaded", function () {
    let username = localStorage.getItem("currentUser");
    if (username) {
        loadUserData(username);
    }
});

// Declare global variables
let coins = 0;
let lastLogin = "";
let streakCounter = 0;
let totalCoinsEarned = 0;

// Load user data (coins, last login, streak)
function loadUserData(username) {
    let storedCoins = localStorage.getItem("coins_" + username);
    let storedLastLogin = localStorage.getItem("lastLogin_" + username);
    let storedStreak = localStorage.getItem("streakCounter_" + username);
    let storedTotalCoins = localStorage.getItem("totalCoinsEarned_" + username);

    coins = storedCoins ? parseInt(storedCoins) : 0;
    lastLogin = storedLastLogin ? storedLastLogin : "Never";
    streakCounter = storedStreak ? parseInt(storedStreak) : 0;
    totalCoinsEarned = storedTotalCoins ? parseInt(storedTotalCoins) : 0;

    updateCoinDisplay();
    updateLastLoginDisplay();
    updateStreakDisplay();
    updateRewardImages(); // Update reward visuals
}

// Function to update UI (Navbar and Main Page)
function updateCoinDisplay() {
    let coinNav = document.getElementById("coin-count-nav");
    let coinMain = document.getElementById("coin-count-main");
    let totalCoinsElement = document.getElementById("total-coins-earned");

    if (coinNav) coinNav.textContent = coins;
    if (coinMain) coinMain.textContent = coins;
    if (totalCoinsElement) totalCoinsElement.textContent = totalCoinsEarned;
}

// Function to update last login UI
function updateLastLoginDisplay() {
    let lastLoginElement = document.getElementById("lastLogin");
    if (lastLoginElement) {
        lastLoginElement.textContent = lastLogin;
    }
}

// Function to update streak UI
function updateStreakDisplay() {
    let streakElement = document.getElementById("streak-count");
    if (streakElement) {
        streakElement.textContent = streakCounter;
    }
}

// Function to update reward images based on streak progress
function updateRewardImages() {
    let rewardItems = document.querySelectorAll(".reward-item");

    rewardItems.forEach((item, index) => {
        if (index < streakCounter) {
            item.classList.add("claimed"); // Mark as claimed
            item.innerHTML = `<img src="claimed-coin.png" alt="Claimed Coin"> Claimed`;
        } else {
            item.classList.remove("claimed");
            item.innerHTML = `<img src="coin.png" alt="Coin"> +${index === 6 ? 50 : 10}`;
        }
    });
}

// Claim daily reward
function claimDailyReward() {
    let username = localStorage.getItem("currentUser");
    if (!username) {
        alert("Please log in first!");
        return;
    }

    let today = new Date().toDateString();

    if (lastLogin !== today) {
        let yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        let yesterdayStr = yesterday.toDateString();

        if (lastLogin === yesterdayStr) {
            streakCounter += 1;
        } else {
            streakCounter = 1;
        }

        let reward = (streakCounter % 7 === 0) ? 50 : 10;
        coins += reward;
        totalCoinsEarned += reward;

        lastLogin = today;
        updateUserData(username);
        alert(`You received ${reward} coins! Streak: ${streakCounter} days.`);
    } else {
        alert("You've already claimed today's reward. Come back tomorrow!");
    }
}

// Update user data and display changes
function updateUserData(username) {
    updateCoinDisplay();
    updateLastLoginDisplay();
    updateStreakDisplay();
    updateRewardImages(); // Refresh reward visuals

    localStorage.setItem("coins_" + username, coins);
    localStorage.setItem("lastLogin_" + username, lastLogin);
    localStorage.setItem("streakCounter_" + username, streakCounter);
    localStorage.setItem("totalCoinsEarned_" + username, totalCoinsEarned);
}
