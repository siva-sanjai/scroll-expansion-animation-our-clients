// Debounce function to limit the execution frequency of the scroll event
function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

async function fetchAndDisplayClients() {
    try {
        const apiUrl = "https://admin.processdrive.com/api/page/home"; // API URL
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const clientsCategory = data.sub_pages.find(
            (subPage) => subPage.category_slug === "our-clients"
        );

        if (clientsCategory) {
            document.querySelector(".section-title").textContent =
                clientsCategory.category.translations[0].title || "Our Clients";
            document.querySelector(".section-description").textContent =
                clientsCategory.category.translations[0].description || "Description not available";

            const clientImages = data.sub_pages.filter(
                (subPage) => subPage.category_slug === "our-clients" && subPage.image
            );

            const colors = [
                "linear-gradient(to left,#079b51, #3263d7)",
                "linear-gradient(to left,#3adf8c,#5480e7)",
                "linear-gradient(to left,#3adf8c,#5480e7)",
                "linear-gradient(90deg,#3adf8c,#5480e7)",
                "linear-gradient(to left, #3263d7,#079b51)"
            ];

            const container = document.getElementById("circleContainer");

            clientImages.forEach((client, index) => {
                addCircleToContainer(client.image, colors[index % colors.length], client.title || "Client Image");
            });

            positionCircles(); // Dynamically position circles after all have been added
        } else {
            console.error("No clients category found.");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function addCircleToContainer(imageUrl, bgColor, altText) {
    const container = document.getElementById("circleContainer");

    const circle = document.createElement("div");
    circle.className = "circle hidden"; // Initially hidden
    circle.style.backgroundImage = bgColor;

    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = altText;
    circle.appendChild(img);

    container.appendChild(circle);
}

function positionCircles() {
    const circles = document.querySelectorAll(".circle:not(.center-circle)");
    const radius = 200; // Distance from the center circle
    const angleStep = (2 * Math.PI) / circles.length;

    circles.forEach((circle, index) => {
        const angle = index * angleStep;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        // Position each circle in a circular layout around the center
        circle.dataset.x = x; // Save x position
        circle.dataset.y = y; // Save y position
        circle.style.transform = `translate(-50%, -50%)`; // Start at the center
    });
}

function handleScroll() {
    const scrollPos = window.scrollY;
    const container = document.getElementById("circleContainer");
    const centerCircle = document.getElementById("centerCircle");

    if (scrollPos > 10) {
        container.classList.add("expanded");
        centerCircle.classList.add("center-animated");

        // Animate other circles outward from the center
        container.querySelectorAll(".circle").forEach((circle, index) => {
            if (!circle.classList.contains("center-circle")) {
                circle.classList.remove("hidden");
                const x = circle.dataset.x;
                const y = circle.dataset.y;
                circle.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
            }
        });
    } else {
        container.classList.remove("expanded");
        centerCircle.classList.remove("center-animated");

        // Move circles back to the center and hide them
        container.querySelectorAll(".circle").forEach((circle, index) => {
            if (!circle.classList.contains("center-circle")) {
                circle.style.transform = `translate(-50%, -50%)`; // Move to the center
                setTimeout(() => circle.classList.add("hidden"), 500); // Hide after animation
            }
        });
    }
}

// Add a debounced scroll event listener
window.addEventListener("scroll", debounce(handleScroll, 100)); // Adjust delay as needed

// Initial fetch to display the clients
fetchAndDisplayClients();
