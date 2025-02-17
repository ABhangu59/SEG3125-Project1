document.getElementById('add-service-btn').addEventListener('click', () => {
    const service = document.getElementById('service').value;
    const stylist = document.getElementById('stylist').value;

    if (service === 'Choose A Service' || stylist === 'Choose A Stylist') {
        alert('Please select a service and a stylist.');
        return;
    }

    const price = service.substring(0, 4).replace("$", ""); // Extract price
    const selection = { service, stylist, price };
    sessionStorage.setItem('serviceSelection', JSON.stringify(selection));

    const selectedDiv = document.getElementById('selected-services');
    const item = document.createElement('div');
    item.className = 'alert alert-secondary mt-2';
    item.innerHTML = `<strong>Service:</strong> ${service} | <strong>Stylist:</strong> ${stylist}`;
    selectedDiv.appendChild(item);
});

document.getElementById('next-stp1-btn').addEventListener('click', () => {
    window.location.href = 'booking-step2.html';
});
// NAV BAR:: 

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



document.getElementById('next-btn').addEventListener('click', function() {
    window.location.href = 'booking-step3.html';
});