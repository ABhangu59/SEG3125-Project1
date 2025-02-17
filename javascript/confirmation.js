window.onload = function() {
    const appointment = JSON.parse(sessionStorage.getItem('appointment'));
    if (appointment) {
        document.getElementById('confirm-first').textContent = appointment.firstName || 'N/A';
        document.getElementById('confirm-last').textContent = appointment.lastName || 'N/A';
        document.getElementById('confirm-email').textContent = appointment.email || 'N/A';
        document.getElementById('confirm-phone').textContent = appointment.phone || 'N/A';
        document.getElementById('confirm-date').textContent = appointment.date || 'N/A';
        document.getElementById('confirm-time').textContent = appointment.time || 'N/A';
        document.getElementById('confirm-stylist').textContent = appointment.stylist || 'N/A';
        document.getElementById('confirm-price').textContent = `$${appointment.price}` || 'N/A';
        document.getElementById('confirm-notes').textContent = appointment.notes || 'N/A';
    }
};

document.getElementById('done-btn').addEventListener('click', () => {
    localStorage.clear();
    window.location.href = 'index.html';
});

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
