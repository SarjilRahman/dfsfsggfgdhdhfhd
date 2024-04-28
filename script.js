document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get the values entered by the user
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Save the data (for demonstration purposes, use localStorage)
    if (username && password) {
        const userData = {
            username: username,
            password: password
        };

        // Store the data in localStorage (can be accessed via browser's Developer Tools)
        localStorage.setItem("userData", JSON.stringify(userData));

        alert("Login successful!"); // Show a message (can be replaced with redirect or other action)
    } else {
        alert("Please enter both username and password.");
    }
});
