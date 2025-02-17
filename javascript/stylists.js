const stylists = {
    'shai': {
        text: 'Shai is the king of fades, from crisp skin fades to sharp lineups. With an eye for detail and a warm personality, he ensures every client leaves feeling fresh and confident. His beard grooming skills are unmatched, making him a favorite for anyone looking to elevate their look.',
        image: '../assets/shai-style.jpg'
    },
    'dua': {
        text: 'Dua is a color wizard who brings hair to life with stunning balayage, vivid colors, and elegant styles. Her artistry shines through every curl and wave, and her genuine care for her clients makes every appointment feel like a visit with an old friend.',
        image: '../assets/dua-style.jpg'
    },
    'benito': {
        text: 'Benito is all about timeless style. Specializing in curly hair care, precise cuts, and classic barbering, he blends tradition with modern techniques. His passion for his craft and attention to detail leave every client with a tailored, standout look.',
        image: '../assets/benito-style.jpg'
    },
    'bron': {
        text: 'Bron is the GOAT when it comes to textured cuts, intricate braids, and trendsetting styles. With a laid-back charm and unmatched skill, he creates iconic looks that stand the test of time, just like a true legend.',
        image: '../assets/bron-style.jpg'
    }
  };
  
  function showDescription(stylist) {
    const descriptionContainer = document.getElementById('stylist-description');
    const { text, image } = stylists[stylist];
    descriptionContainer.innerHTML = `
      <div style="text-align: center; font-size: 24px; font-family: 'Ovo', serif; padding: 20px;">
        <p style="max-width: 500px; text-align: center; margin-right: auto; margin-left: auto;">${text}</p>
        <img src="${image}" alt="${stylist} style example" style="width: 500px; margin-top: 10px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
      </div>
    `;
  }
  
  document.querySelectorAll('.stylist-img').forEach(img => {
    img.addEventListener('click', () => {
      const stylist = img.alt.toLowerCase();
      showDescription(stylist);
    });
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

    // event listener for book button 
    const bookButton = document.getElementById('book-appointment');
    if (bookButton) {
        bookButton.addEventListener('click', () => {
            window.location.href = 'booking.html';
        });
    }
});