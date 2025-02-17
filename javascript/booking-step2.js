// STEP 2 CODE : 
document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let serviceSelection = JSON.parse(sessionStorage.getItem('serviceSelection'));

    const appointment = {
        ...serviceSelection,
        firstName: document.getElementById('first-name').value,
        lastName: document.getElementById('last-name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        notes: document.getElementById('notes').value,
    };

    sessionStorage.setItem('appointment', JSON.stringify(appointment));
    window.location.href = 'booking-step3.html';
});
document.getElementById('back-tostp1-btn').addEventListener('click', () => {
    window.location.href = 'booking.html';
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

// Handle Next button to move forward while preserving data
document.getElementById('next-tostp3-btn').addEventListener('click', () => {
    window.location.href = 'booking-step3.html';
});
