const modal = document.querySelector(".modal");
const form = document.querySelector("#login-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const uname = document.querySelector("#uname").value;
  const pwd = document.querySelector("#pwd").value;

  const storedUser = localStorage.getItem("username");
  const storedPwd = localStorage.getItem("password");

  if (!storedUser || !storedPwd) {
    alert("No account found. Please create one.");
    return;
  }

  if (uname === storedUser && pwd === storedPwd) {
    alert("You are now logged in!");
    window.location.href = "index.html";
  } else {
    modal.classList.add("show");
  }
});

function dismissModal() {
  modal.classList.remove("show");
}