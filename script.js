function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('main > .section');
    sections.forEach(section => section.style.display = 'none');
    
    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Show the home section by default
document.addEventListener('DOMContentLoaded', () => showSection('home'));