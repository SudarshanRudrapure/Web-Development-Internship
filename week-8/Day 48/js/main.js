const modal = document.querySelector(".modal");
const form = document.querySelector("#login-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const uname = document.querySelector("#uname").value;
  const pwd = document.querySelector("#pwd").value;

  if (uname === "Admin" && pwd === "123456") {
    alert("You are now logged in!");
    window.location.href = "index.html";
  } else {
    modal.classList.add("show");
  }
});

function dismissModal() {
  modal.classList.remove("show");
}