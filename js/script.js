// Get DOM elements
const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

// Handle Enter key press
textInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") checkBtn.click();
});

// Handle button click
checkBtn.addEventListener("click", () => {
    // Clean input
    const inputValue = textInput.value;
    const lowerCasedReplaced = inputValue.toLowerCase().replace(/[^a-z0-9]/g, "");
    result.style.display = "block";

    // Palindrome checker input
    if (inputValue === "") {
        result.innerHTML = `<span style="color: #dc143c;">Please input a value.</span>`;
    } else if (lowerCasedReplaced === [...lowerCasedReplaced].reverse().join("")) {
        result.innerHTML = `<span style="color: #00b300;"><strong>${inputValue}</strong></span> is a palindrome.`;
    } else {
        result.innerHTML = `<span style="color: #dc143c;"><strong>${inputValue}</strong></span> is not a palindrome.`;
    }
});