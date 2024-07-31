// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
document.getElementById('contact-form')?.addEventListener('submit', function(event) {
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    let valid = true;

    // Email validation
    if (!email.value || !validateEmail(email.value)) {
        valid = false;
        email.style.borderColor = 'red';
    } else {
        email.style.borderColor = '';
    }

    // Message validation
    if (!message.value) {
        valid = false;
        message.style.borderColor = 'red';
    } else {
        message.style.borderColor = '';
    }

    if (!valid) {
        event.preventDefault();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
