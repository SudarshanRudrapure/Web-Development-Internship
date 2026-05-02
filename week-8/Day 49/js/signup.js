const form = document.querySelector("#signup-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.querySelector("#new-uname").value;
  const password = document.querySelector("#new-pwd").value;

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  alert("Account created successfully!");

  window.location.href = "login.html";
});