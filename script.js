// Declare variables with different data types.
const userRole = "admin";
let accessLevel;
const welcomeUser = true;

// A simple conditional statement to determine access level.
if (userRole === "admin") {
    accessLevel = "Full Access";
    console.log("User has administrator privileges.");
} else if (userRole === "editor") {
    accessLevel = "Limited Access";
    console.log("User has editor privileges.");
} else {
    accessLevel = "Read-Only";
    console.log("User has read-only privileges.");
}

// Another conditional to check if we should display a greeting.
if (welcomeUser) {
    console.log(`Welcome back! Your access level is: ${accessLevel}`);
}


// =========================================================
// Part 2: At Least 2 Custom Functions
// =========================================================

/**
 * A function to calculate the square of a number.
 */
function calculateSquare(num) {
    return num * num;
}

/**
 * A function that updates the text of a specific HTML element.
 * @param {string} elementId The ID of the HTML element to update.
 * @param {string} message The new text content.
 */
function updateMessage(elementId, message) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = message;
    } else {
        console.error(`Error: Element with ID '${elementId}' not found.`);
    }
}


// =========================================================
// Part 3: At Least 2 Loop Examples
// =========================================================

// Example 1: A `for` loop to iterate over an array and update the DOM.
const items = ["Item A", "Item B", "Item C", "Item D", "Item E"];
const loopList = document.getElementById("loop-list");

// Clear existing list items.
loopList.innerHTML = '';

for (let i = 0; i < items.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `Loop 1: ${items[i]}`;
    loopList.appendChild(listItem);
}


// Example 2: A `while` loop to add a specific number of items to the DOM.
let count = 0;
while (count < 3) {
    const listItem = document.createElement("li");
    listItem.textContent = `Loop 2: This is item number ${count + 1}`;
    loopList.appendChild(listItem);
    count++;
}


// =========================================================
// Part 4: At Least 3 DOM Interactions
// =========================================================

// 1. Get an element from the DOM and change its text content.
const messageElement = document.getElementById("welcome-message");
messageElement.textContent = "Welcome to the JavaScript DOM Interaction Demo!";

// 2. Add an event listener to a button to trigger a function.
const updateButton = document.getElementById("updateButton");
updateButton.addEventListener('click', () => {
    // This function call is a DOM interaction.
    updateMessage("welcome-message", "The button was clicked! Message updated.");
});

// 3. Another DOM interaction: adding a class to an element when the page loads.
// This is already done implicitly by Tailwind, but let's do a manual example.
// Let's change the background color of the message on click for an example.
updateButton.addEventListener('click', () => {
    const messageElement = document.getElementById("welcome-message");
    // This is the DOM interaction: adding/removing a class.
    messageElement.classList.toggle('bg-blue-100');
    messageElement.classList.toggle('bg-green-100');
    messageElement.classList.toggle('text-blue-800');
    messageElement.classList.toggle('text-green-800');
});
