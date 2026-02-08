/* ============================================
   ASSIGNMENT REQ: JavaScript for form validation
   form.js - Contact Form Validation
   ============================================ */

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");

  // Input elements
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  // Error elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Clear error on input
  nameInput.addEventListener("input", function () {
    clearError(nameInput, nameError);
  });

  emailInput.addEventListener("input", function () {
    clearError(emailInput, emailError);
  });

  messageInput.addEventListener("input", function () {
    clearError(messageInput, messageError);
  });

  // Form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    // Validate name
    if (!nameInput.value.trim()) {
      showError(nameInput, nameError, "Name is required");
      isValid = false;
    }

    // Validate email
    if (!emailInput.value.trim()) {
      showError(emailInput, emailError, "Email is required");
      isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
      showError(emailInput, emailError, "Please enter a valid email address");
      isValid = false;
    }

    // Validate message
    if (!messageInput.value.trim()) {
      showError(messageInput, messageError, "Message is required");
      isValid = false;
    }

    // ASSIGNMENT REQ: Show inline message indicating what is submitted
    if (isValid) {
      // Log submitted data (inline message)
      console.log("Form submitted:", {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value,
        subscribe: document.getElementById("subscribe").checked,
      });

      // Show alert with submission details
      alert("Submitted: " + nameInput.value + " (" + emailInput.value + ")");

      // ASSIGNMENT REQ: Success message and form reset
      form.style.display = "none";
      successMessage.style.display = "block";
    }
  });

  // Helper functions
  function showError(input, errorElement, message) {
    // ASSIGNMENT REQ: aria-invalid for accessibility
    input.setAttribute("aria-invalid", "true");
    errorElement.textContent = message;
    errorElement.style.display = "block";
  }

  function clearError(input, errorElement) {
    input.setAttribute("aria-invalid", "false");
    errorElement.style.display = "none";
  }
});

// Reset form function (called from HTML button)
function resetForm() {
  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");

  form.reset();
  form.style.display = "block";
  successMessage.style.display = "none";

  // Clear all aria-invalid attributes
  document.getElementById("name").setAttribute("aria-invalid", "false");
  document.getElementById("email").setAttribute("aria-invalid", "false");
  document.getElementById("message").setAttribute("aria-invalid", "false");
}
