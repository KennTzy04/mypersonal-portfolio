document.addEventListener('DOMContentLoaded', () => {
    // Select menu icon and navbar
const menuIcon = document.querySelector('.fa-solid.fa-bars');
const navbar = document.querySelector('.navbar');

    // Toggle menu icon and navbar on click
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });

    // Select all navigation links
    const navLinks = document.querySelectorAll('header nav a');

    // Highlight navigation links based on scroll position
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // Loop through each navigation link
        navLinks.forEach(link => {
            const sectionId = link.getAttribute('href').substring(1); 

            const section = document.getElementById(sectionId);
            if (section) {
                const offset = section.offsetTop - 150;
                const height = section.offsetHeight;

                // Add or remove 'active' class based on scroll position
                if (scrollY >= offset && scrollY < offset + height) {
                    navLinks.forEach(navLink => navLink.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    });
});
// Initialize ScrollReveal with options
const sr = ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});

// Apply ScrollReveal animations to elements
sr.reveal('.home-content, .heading', { origin: 'top' });
sr.reveal('.home-img, .services-container, .skills-box .skills-content, .education-box .education-content, .education-column .education-box, .contact form, .contact-list h3, .contact-text h5, .contact-text h6 , .services-list', { origin: 'bottom' });
sr.reveal('.home-content h1, .about, .education-column .title,.skills-column .title, .contact-text h4, .contact-text p,' , { origin: 'left' });
sr.reveal('.home-content p, .about-content, .contact-icons', { origin: 'right' });

// Select form and message elements after DOMContentLoaded
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

// Function to display messages
function displayMessage(text, isError = false) {
    msg.innerText = text;
    msg.classList.add('show');
    if (isError) {
        msg.classList.add('error');
    } else {
         msg.classList.remove('error');
    }
    setTimeout(() => {
        msg.classList.remove('show');
        msg.innerText = "";
    }, 5000); 
}

// Form submission event listener
if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();

        const scriptURL = 'https://script.google.com/macros/s/AKfycbws6lVuqBIDk4_xYEm6o0m47DWR64MfpZ-r8ETyaabVG4BgIJBYhesJIVEDq9j58gvG0g/exec'; // Replace with your actual script URL

        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                if (response.ok) {
                    displayMessage("Message sent successfully");
                    form.reset();
                } else {
                    throw new Error('Network response was not ok.');
                }
            })
            .catch(error => {
                console.error('Error!', error.message);
                displayMessage("Error sending message. Please try again.", true);
            });
    });
}

// about pattern for each service box


document.getElementById('openBtn').addEventListener('click', function() {
    document.getElementById('myPopup').style.display = 'block';
});
    
document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('myPopup').style.display = 'none';
});
    
// SERVIVES pattern for each service box

// SERVIVES 1

document.getElementById('openBtn1').addEventListener('click', function() {
    document.getElementById('myPopup1').style.display = 'block';
});

document.getElementById('closeBtn1').addEventListener('click', function() {
    document.getElementById('myPopup1').style.display = 'none';
});

// SERVIVES 2

document.getElementById('openBtn2').addEventListener('click', function() {
    document.getElementById('myPopup2').style.display = 'block';
});

document.getElementById('closeBtn2').addEventListener('click', function() {
    document.getElementById('myPopup2').style.display = 'none';
});

// SERVIVES 3

document.getElementById('openBtn3').addEventListener('click', function() {
    document.getElementById('myPopup3').style.display = 'block';
});

document.getElementById('closeBtn3').addEventListener('click', function() {
    document.getElementById('myPopup3').style.display = 'none';
});

// SERVIVES 4

document.getElementById('openBtn4').addEventListener('click', function() {
    document.getElementById('myPopup4').style.display = 'block';
});

document.getElementById('closeBtn4').addEventListener('click', function() {
    document.getElementById('myPopup4').style.display = 'none';
});

// SERVIVES 5

document.getElementById('openBtn5').addEventListener('click', function() {
    document.getElementById('myPopup5').style.display = 'block';
});

document.getElementById('closeBtn5').addEventListener('click', function() {
    document.getElementById('myPopup5').style.display = 'none';
});

// SERVIVES 6

document.getElementById('openBtn6').addEventListener('click', function() {
    document.getElementById('myPopup6').style.display = 'block';
});

document.getElementById('closeBtn6').addEventListener('click', function() {
    document.getElementById('myPopup6').style.display = 'none';
});
