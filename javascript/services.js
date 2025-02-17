document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.getElementById("carouselExampleCaptions");
    const descriptionHeading = document.querySelector(".services-description-heading");
    const descriptionText = document.querySelector(".services-description-text");

    // Define descriptions corresponding to the carousel items
    const serviceDescriptions = [
        { heading: "Signature Cut & Style", text: "Experience precision and artistry with our Signature Cut & Style. Whether you're looking for a sharp, classic cut or a modern, trendy style, our expert stylists will tailor your look to perfection. Enjoy a personalized consultation, a luxurious shampoo, and a meticulously crafted cut that complements your unique personality and lifestyle. Walk out feeling confident and refreshed." },
        { heading: "Luxury Beard Sculpting", text: "Indulge in the ultimate grooming experience with our Luxury Beard Sculpting service. Our specialists use precise techniques to shape, trim, and style your beard to perfection. Complete with a relaxing hot towel treatment, this service enhances your facial features and leaves you looking sharp and distinguished. Perfect for any occasion, from everyday wear to special events." },
        { heading: "Urban Glow Facial", text: "Give your skin the pampering it deserves with our Urban Glow Facial. Designed to cleanse, exfoliate, and hydrate, this facial revives dull, tired skin and restores a healthy, radiant glow. Using premium skincare products, our estheticians customize each facial to suit your skin type and concerns, leaving you with a luminous, refreshed complexion." },
        { heading: "Silk Press & Styling", text: "Achieve silky, smooth perfection with our Silk Press & Styling service. Ideal for natural hair, our silk press technique transforms your curls into sleek, straight strands with a brilliant shine. Enjoy a nourishing wash, heat protectant application, and expert styling that ensures your hair stays frizz-free and flawless for days." },
        { heading: "Loc Maintenance & Styling", text: "Keep your locs healthy and stylish with our comprehensive Loc Maintenance & Styling service. From retwisting and interlocking to intricate styling, our specialists ensure your locs are well-maintained and beautifully styled. Whether you prefer a simple retwist or a bold, creative look, we cater to your needs with precision and care." },
        { heading: "Braids & Twists", text: "Elevate your look with our Braids & Twists service. Choose from a variety of styles including box braids, Senegalese twists, and cornrows. Our skilled braiders create intricate designs that are both protective and stunning, perfect for expressing your unique style while keeping your hair healthy and manageable." },
        { heading: "Scalp Detox & Treatment", text: "Rejuvenate your scalp and promote healthy hair growth with our Scalp Detox & Treatment. This deep-cleansing service removes product buildup, excess oil, and impurities from your scalp. Combined with a soothing scalp massage and nourishing treatment, it improves circulation, relieves tension, and leaves your scalp feeling refreshed and invigorated." },
        { heading: "VIP Style Experience", text: "ndulge in the ultimate pampering session with our VIP Style Experience. This premium package includes a personalized consultation, a tailored haircut or styling, a luxurious scalp massage, and a nourishing treatment. Perfect for those looking to treat themselves or prepare for a special occasion, this service guarantees a top-tier styling experience from start to finish." }
    ];

    // Function to update description text
    function updateDescription(index) {
        descriptionHeading.textContent = serviceDescriptions[index].heading;
        descriptionText.textContent = serviceDescriptions[index].text;
    }

    // Event listener for when the slide changes
    carousel.addEventListener("slide.bs.carousel", (event) => {
        updateDescription(event.to);
    });

    // Initialize with the first slide's description
    updateDescription(0);
});
