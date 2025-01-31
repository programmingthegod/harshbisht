document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        let currentSection = "";

        // Find the currently visible section
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 400; // Offset for fixed header
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id"); // Get current section ID
            }
        });

        // Update active class for nav-links
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active");
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Initialize EmailJS
    emailjs.init({publicKey : "1aXZxQ3ThNxFldDfN"}); // Replace with your EmailJS public key

    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(form);

        var tempParams = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            subject: formData.get("subject"),
            message: formData.get("message"),
        };

        console.log(tempParams);

        // Send the form data using EmailJS
        emailjs.send("service_vy76mx1", "template_invporp", tempParams).then(
            (response) => {
                alert("Message sent successfully!");
                form.reset(); // Clear the form
            },
            (error) => {
                alert("Failed to send message. Please try again.");
                console.error("Error:", error);
            }
        );
    });
});

