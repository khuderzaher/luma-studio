(() => {
  const form = document.querySelector("#inquiry-form");
  const status = document.querySelector("#form-status");
  if (!form || !status) return;
  const fields = {
    name: { input: form.elements.name, error: document.querySelector("#name-error"), message: "Please enter your name." },
    email: { input: form.elements.email, error: document.querySelector("#email-error"), message: "Enter a valid email address." },
    projectType: { input: form.elements.projectType, error: document.querySelector("#project-type-error"), message: "Choose the closest project type." },
    details: { input: form.elements.details, error: document.querySelector("#details-error"), message: "Add a little context about your project." }
  };
  const validate = key => {
    const field = fields[key];
    const value = field.input.value.trim();
    const valid = key === "email" ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) : value.length > 0;
    field.input.setAttribute("aria-invalid", String(!valid));
    field.error.textContent = valid ? "" : field.message;
    return valid;
  };
  Object.keys(fields).forEach(key => {
    fields[key].input.addEventListener("blur", () => validate(key));
    fields[key].input.addEventListener("input", () => {
      if (fields[key].input.getAttribute("aria-invalid") === "true") validate(key);
    });
  });
  form.addEventListener("submit", event => {
    event.preventDefault();
    const valid = Object.keys(fields).map(validate).every(Boolean);
    if (!valid) {
      status.dataset.state = "error";
      status.textContent = "A couple of details need attention. Please review the fields marked above.";
      form.querySelector('[aria-invalid="true"]')?.focus();
      return;
    }
    status.dataset.state = "notice";
    status.textContent = "Your details look complete. This is a front-end demo, so nothing has been sent or saved. Connect a form endpoint before using this form for real inquiries.";
  });
})();