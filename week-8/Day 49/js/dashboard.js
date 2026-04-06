const welcomeText = document.querySelector("#welcome-text");

// Get user from localStorage
const user = localStorage.getItem("username");

// 🚫 If not logged in → go back to login
if (!user) {
  window.location.href = "login.html";
}

// ✅ Show username
welcomeText.innerText = "Hello, " + user + "! 👋";

// 🔓 Logout function
function logout() {
  localStorage.removeItem("username");
  localStorage.removeItem("password");

  alert("Logged out successfully!");

  window.location.href = "login.html";
}