// script.js

// Example: Add event listeners or any interactive functionality if needed.
document.addEventListener("DOMContentLoaded", () => {
  // Example: Search button functionality
  document.querySelector(".search-btn").addEventListener("click", () => {
    const searchTerm = document.querySelector(".search-bar input").value;
    alert(`Searching for: ${searchTerm}`);
  });
});
