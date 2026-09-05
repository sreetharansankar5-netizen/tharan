// BOOKING FORM

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const service = document.getElementById("service").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;

        const message = document.getElementById("bookingMessage");

        message.innerHTML =
            "✅ Booking successful!<br><br>" +
            "Thank you, " + name + ".<br>" +
            "Service: " + service + "<br>" +
            "Date: " + date + "<br>" +
            "Time: " + time;

        message.style.color = "green";

        bookingForm.reset();
    });
}


// CONTACT FORM

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const result = document.getElementById("contactResult");

        result.textContent =
            "✅ Your message has been sent successfully!";

        result.style.color = "green";

        contactForm.reset();
    });
}