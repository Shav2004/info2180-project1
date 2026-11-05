/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function () {

    // Select the newsletter form and message area
    const form = document.querySelector(".newsletter form");
    const emailInput = document.querySelector("#email");
    const message = document.querySelector(".message");

    // Listen for the form submission
    form.addEventListener("submit", function (event) {

        // Prevent the page from refreshing
        event.preventDefault();

        // Get the email address entered
        const email = emailInput.value.trim();

        // Check whether the email field is empty
        if (email === "") {
            message.textContent = "Please enter a valid email address.";
        } else {
            message.textContent =
                "Thank you! Your email address " +
                email +
                " has been added to our mailing list!";
        }

    });

});
