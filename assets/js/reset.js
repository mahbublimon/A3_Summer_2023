document.getElementById("reset-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;

  // Simulate a password reset request (replace with your actual logic)
  simulatePasswordReset(email);
});

function simulatePasswordReset(email) {
  // Simulate a delay to mimic a server request
  setTimeout(() => {
    // Replace this with your actual password reset logic on the server.
    if (isValidEmail(email)) {
      // Send a password reset email to the user's email address.
      document.getElementById("message").textContent =
        "Password reset email sent. Please check your inbox.";
    } else {
      document.getElementById("message").textContent =
        "Invalid email address. Please try again.";
    }
  }, 1000); // Simulated 1-second delay
}

function isValidEmail(email) {
  // Basic email validation. You can implement more robust validation.
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
