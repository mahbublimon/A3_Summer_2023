document
  .getElementById("registration-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match.");
    } else {
      // Simulate a successful registration (replace with your actual registration logic)
      simulateRegistration(username, email, password);
    }
  });

function simulateRegistration(username, email, password) {
  // Simulate a delay to mimic a server request
  setTimeout(() => {
    // Replace this with your actual registration logic on the server.
    alert("Registration successful!");
    // Redirect to a login page or perform other actions here.
  }, 1000); // Simulated 1-second delay
}
