// Initialize EmailJS with your user ID
(function () {
  emailjs.init("eMtR5KaqtFaOQbuh_");
})();

// Function to send email using EmailJS
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Send the email using the form data
    emailjs.sendForm("service_i96qd77", "template_1yb1qap", this).then(
      function () {
        alert("Message Sent Successfully!");
      },
      function (error) {
        alert("Failed to send the message: " + JSON.stringify(error));
      }
    );
  });
