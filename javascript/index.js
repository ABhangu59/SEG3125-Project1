document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".navbar-subheading").forEach(item => {
        item.addEventListener("click", () => {
            let page = item.innerText.toLowerCase() + ".html"; // Convert text to lowercase and add .html

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