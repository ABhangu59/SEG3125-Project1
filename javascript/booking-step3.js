window.onload = function() {
    const appointment = JSON.parse(localStorage.getItem('appointment'));
    if (appointment) {
        document.getElementById('summary-service').textContent = appointment.service || 'N/A';
        document.getElementById('summary-stylist').textContent = appointment.stylist || 'N/A';
    }
};

document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Payment Added Successfully!');
});

document.getElementById('next-btn').addEventListener('click', function() {
    window.location.href = 'confirmation.html';
});

document.getElementById('back-btn').addEventListener('click', function() {
    window.location.href = 'booking-step2.html';
});

// NAV BAR:
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".navbar-subheading").forEach(item => {
        item.addEventListener("click", () => {
            let page = item.innerText.toLowerCase() + ".html"; // Convert text to lowercase and add .html
            console.log(page);
            // Redirect smoothly
            window.location.href = page;
        });
    });

    // Add event listener for the logo image
    const logo = document.querySelector(".imageLogo");
    if (logo) {
        logo.addEventListener("click", () => {
            window.location.href = "index.html"; // Redirect to index.html
        });
    }
});
