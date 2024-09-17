document.addEventListener('DOMContentLoaded', function() {
    const contactBtn = document.getElementById('contact-btn');
    const projectList = document.getElementById('project-list');

    contactBtn.addEventListener('click', function() {
        alert('Thank you for your interest! Please send an email to john.doe@example.com');
    });

    // Add a simple hover effect to project list items
    projectList.querySelectorAll('li').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f0f0f0';
        });
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#fff';
        });
    });
});