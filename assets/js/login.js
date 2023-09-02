document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Simulate an AJAX request (replace this with your actual server endpoint)
  // In a real application, you'd send the data to your server for authentication.
  simulateLogin(email, password);
});

function simulateLogin(email, password) {
  // Simulate a delay to mimic a server request
  setTimeout(() => {
    // Replace this with your actual authentication logic on the server.
    if (email === "demo" && password === "password") {
      alert("Login successful!");
      // Redirect to a dashboard or perform further actions here.
    } else {
      alert("Login failed. Please check your credentials.");
    }
  }, 1000); // Simulated 1-second delay
}
