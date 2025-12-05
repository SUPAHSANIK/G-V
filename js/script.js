// --- Mobile Menu Toggle Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    // Assuming 'nav ul' is the element that toggles visibility
    const navUl = document.querySelector('nav ul'); 

    if (menuToggle && navUl) {
        menuToggle.addEventListener('click', () => {
            // Toggles the 'open' class for CSS to show/hide the navigation links
            navUl.classList.toggle('open');
        });
    }
});

// --- Modal Logic ---

/**
 * Opens the member profile modal and populates it with data 
 * from the clicked team member card.
 * @param {HTMLImageElement} imgElement - The <img> element that was clicked.
 */
function openModal(imgElement) {
    // Select the main modal elements
    const modal = document.getElementById("memberModal");
    const modalImg = document.getElementById("modal-img");
    const modalName = document.getElementById("modal-name");
    const modalRole = document.getElementById("modal-role");
    const modalCV = document.getElementById("modal-cv");

    // 1. Find the nearest parent card element that holds the data attributes
    const teamCard = imgElement.closest('.team-card');

    // 2. Retrieve data from the data-* attributes
    const nameText = teamCard.dataset.name;
    const roleText = teamCard.dataset.role;
    const cvLink = teamCard.dataset.cv;

    // 3. Populate and display the modal
    modal.style.display = "flex"; // Show the modal (using flex for centering)
    
    // Set the image source, name, role, and CV link
    modalImg.src = imgElement.src; 
    modalName.innerText = nameText;
    modalRole.innerText = roleText;
    modalCV.setAttribute('href', cvLink);
}

/**
 * Closes the member profile modal.
 */
function closeModal() {
    const modal = document.getElementById("memberModal");
    modal.style.display = "none";
}

// Close the modal if the user clicks anywhere on the dark background overlay
window.onclick = function(event) {
    const modal = document.getElementById("memberModal");
    // Check if the clicked element is the modal overlay itself
    if (event.target === modal) {
        closeModal();
    }
}
