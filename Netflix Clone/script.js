document.addEventListener("DOMContentLoaded", () => {
  // --- 1. FAQ Icon Rotation ---
  const faqQuestions = document.querySelectorAll(".questions > div:not(p)");

  faqQuestions.forEach((questionDiv) => {
    questionDiv.addEventListener("click", () => {
      const plusIcon = questionDiv.querySelector('img[src="plus.svg"]');

      if (plusIcon) {
        questionDiv.classList.toggle("faq-active");
      }
    });
  });

  // --- 2. Email Input Validation ---
  const getStartedButtons = document.querySelectorAll(
    ".btn-2 button, .btn-3 button"
  );

  getStartedButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      let emailInput;
      if (button.closest(".btn-2")) {
        emailInput = button
          .closest(".btn-2")
          .querySelector('input[type="text"]');
      } else if (button.closest(".btn-3")) {
        emailInput = button
          .closest(".btn-3")
          .querySelector('input[type="text"]');
      }

      if (emailInput) {
        const email = emailInput.value.trim();

        // Simple email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email || !emailRegex.test(email)) {
          event.preventDefault();
          alert("Please enter a valid email address.");
          emailInput.style.borderColor = "red";
          emailInput.focus();
        } else {
          emailInput.style.borderColor = "";

          alert(`Email submitted: ${email}`);
          emailInput.value = "";
        }
      }
    });
  });
});
