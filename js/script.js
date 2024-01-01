/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });

        };
    });
    
/*==================== sticky navbar ====================*/
let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);

/*==================== remove toggle icon  and navbar when click navbar link ====================*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};

/*==================== scroll reveal ====================*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .gebote-img, .heading', { origin: 'bottom' });
ScrollReveal().reveal('.home-content',  { origin: 'left' });

/*==================== type js====================*/
const typed = new Typed('.multiple-text', {
    strings: ['des Vater', 'und des Sohnes', 'und des Heiligen Geistes', 'Amen'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 500,
    loop: true
});




/*==================== video ====================*/
document.addEventListener('DOMContentLoaded', function() {
    // Variable, um den aktuellen Index des Videos zu speichern
    var currentVideoIndex = 0;

    // Funktion, um das aktuelle Datum zu überprüfen und das Video zu aktualisieren
    function updateVideoDaily() {
        var currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 2); // Tag ändern um zu überprüfen ob die Videos Aktuallisieren

        var dayOfMonth = currentDate.getDate();

        var videoUrl = getVideoUrlForDay(dayOfMonth);

        // Video-Element aktualisieren
        var videoElement = document.getElementById('dailyVideo');
        videoElement.src = videoUrl;
        videoElement.load(); // Erforderlich, um das Video neu zu laden

        // Inkrementiere den Index für das nächste Mal
        currentVideoIndex = (currentVideoIndex + 1) % videoUrls.length;
    }

    // Funktion, um das Video-URL entsprechend dem Tag zu generieren 
    function getVideoUrlForDay(day) {
        var videoUrls = [
            '1V.mp4',
            '2V.mp4',
            '3V.mp4',
            '4V.mp4',
            '5V.mp4',
            '6V.mp4',
            '7V.mp4',
        ];

        // Index berechnen (Tag modulo Anzahl der Videos)
        var index = day % videoUrls.length;

        return videoUrls[index];
    }

    // Video täglich aktualisieren
    updateVideoDaily();
});
