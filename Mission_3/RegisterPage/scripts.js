document
  .getElementById("register-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Simple validation
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
    } else {
      alert("Registration form submitted!");
    }
  });
