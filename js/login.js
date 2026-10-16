const loginForm = document.querySelector("#login-form");
const loginStatus = document.querySelector("#login-status");

loginForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!loginForm.reportValidity()) return;
  loginStatus.textContent = "Form looks good. Demo sign-in is not connected to a server.";
});
