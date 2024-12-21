(function() {
    // Initialize EmailJS with your user ID
    emailjs.init("YOUR_USER_ID"); // Replace with your actual EmailJS user ID

    // Function to send email
    window.sendEmail = function(event) {
      event.preventDefault(); // Prevent the form from submitting traditionally

      // Get form data
    const templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.querySelector("[name=message]").value
    };

      // Send the email using EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams).then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
    }, 
    function(error) {
        console.log('FAILED...', error);
        alert('Something went wrong. Try again.');
    });
    };
})();
