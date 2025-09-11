// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.

//const button = document.getElementById('simulate-click');
//const submit = document.getElementById('user-form');

document.addEventListener("DOMContentLoaded", () => {
    simulateClick();
    handleFormSubmit();
})

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

function addElementToDOM(id, text) {
    const dynamicContent = document.getElementById(id);
    dynamicContent.textContent = text ;
}

function removeElementFromDOM(id) {
    const element = document.getElementById(id);
    element.remove();
}

function simulateClick() {
    const dynamicContent = document.getElementById('dynamic-content');
    const button = document.getElementById('simulate-click');
    button.addEventListener("click", () => {
        dynamicContent.textContent = "Button Clicked!";
    });
}

function handleFormSubmit() {
    const dynamicContent = document.getElementById('dynamic-content');
    const form = document.getElementById('user-form');
    form.addEventListener("submit", (event) => {
        const userInput = document.getElementById('user-input').value;
        if (userInput == "") {
            event.preventDefault();
            const errorMessage = document.getElementById('error-message');
            errorMessage.textContent = 'Input cannot be empty';
            errorMessage.classList.remove("hidden");
            errorMessage.classList.add("visible");
        }
        else {
            event.preventDefault();
            dynamicContent.textContent = userInput;
            const errorMessage = document.getElementById('error-message');
            errorMessage.classList.add("hidden");
            errorMessage.classList.remove("visible");
        }
    });
}


// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.

module.exports = {addElementToDOM, removeElementFromDOM, simulateClick, handleFormSubmit}