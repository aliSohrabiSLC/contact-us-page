document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();
    let successMessage = document.getElementById("successMessage");

    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      phone === "" ||
      message === ""
    ) {
      successMessage.textContent = "Please fill out all fields.";
      successMessage.style.color = "red";
      successMessage.style.display = "block";
      return;
    }

    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      successMessage.textContent = "Please enter a valid email.";
      successMessage.style.color = "red";
      successMessage.style.display = "block";
      return;
    }

    let phonePattern = /^[0-9]{10,15}$/;
    if (!phonePattern.test(phone)) {
      successMessage.textContent = "Please enter a valid phone number.";
      successMessage.style.color = "red";
      successMessage.style.display = "block";
      return;
    }

    successMessage.textContent = "Form submitted successfully.";
    successMessage.style.color = "red";
    successMessage.style.display = "block";

    document.getElementById("contactForm").reset();
  });
