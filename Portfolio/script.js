document.getElementById('home-tab').addEventListener('click', function () {
    showSection('home');
});
document.getElementById('about-tab').addEventListener('click', function () {
    showSection('about');
});
document.getElementById('portfolio-tab').addEventListener('click', function () {
    showSection('portfolio');
});
document.getElementById('contact-tab').addEventListener('click', function () {
    showSection('contact');
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}
