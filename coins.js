document.addEventListener("DOMContentLoaded", function () {
    let username = localStorage.getItem("currentUser");
    if (username) {
        loadUserData(username);
    }
});

// Load user data (coins, last login, streak)
function loadUserData(username) {
    let storedCoins = localStorage.getItem("coins_" + username);
    let storedLastLogin = localStorage.getItem("lastLogin_" + username);
    let storedStreak = localStorage.getItem("streakCounter_" + username);

    coins = storedCoins ? parseInt(storedCoins) : 0;
    lastLogin = storedLastLogin || "";
    streakCounter = storedStreak ? parseInt(storedStreak) : 0;

    document.getElementById("coinCount").textContent = coins;
    document.getElementById("lastLogin").textContent = lastLogin ? lastLogin : "Never";
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

        lastLogin = today;
        updateUserData(username);

        alert(`You received ${reward} coins! Streak: ${streakCounter} days.`);
    } else {
        alert("You've already claimed today's reward. Come back tomorrow!");
    }
}

// Update user data
function updateUserData(username) {
    document.getElementById("coinCount").textContent = coins;
    document.getElementById("lastLogin").textContent = lastLogin;

    localStorage.setItem("coins_" + username, coins);
    localStorage.setItem("lastLogin_" + username, lastLogin);
    localStorage.setItem("streakCounter_" + username, streakCounter);
}
