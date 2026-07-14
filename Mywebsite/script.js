document.addEventListener("DOMContentLoaded", function() {
    var contactForm = document.getElementById("contact-form");
    var formStatus = document.getElementById("form-status");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();

            var name = document.getElementById("contact-name").value.trim();
            var email = document.getElementById("contact-email").value.trim();
            var subject = document.getElementById("contact-subject").value.trim();
            var message = document.getElementById("contact-message").value.trim();

            formStatus.className = "";
            formStatus.textContent = "";

            if (name === "" || email === "" || subject === "" || message === "") {
                formStatus.className = "form-error";
                formStatus.textContent = "Please fill in all fields.";
                alert("Please fill in all fields before sending.");
                return;
            }

            if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
                formStatus.className = "form-error";
                formStatus.textContent = "Please enter a valid email address.";
                alert("Please enter a valid email address.");
                return;
            }

            formStatus.className = "form-success";
            formStatus.textContent = "Thank you, " + name + "! Your message has been sent successfully.";
            
            alert("Thank you! Your inquiry has been submitted. I will reply soon.");
            
            contactForm.reset();
        });
    }
});
