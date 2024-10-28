document.getElementById("social-links").addEventListener("click", function(event) {
    const link = event.target;
    if (link.classList.contains('fa-linkedin')) {
        window.open('https://www.linkedin.com/in/asharhuda/', '_blank');
    } else if (link.classList.contains('fa-github')) {
        window.open('https://github.com/ahuda07', '_blank');
    }
});
