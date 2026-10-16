const contactForm = document.querySelector("#contact-form");
const contactStatus = document.querySelector("#contact-status");

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;
  contactStatus.textContent = "Thanks for reaching out! This demo form is not connected to email yet.";
  contactForm.reset();
});
