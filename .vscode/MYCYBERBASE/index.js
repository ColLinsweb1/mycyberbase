//  Animation Section

const sr = ScrollReveal (
    {
        origin: 'top',
        duration: 2000,
        distance: '60px',
        scale: 0.7,
        rotateY: 80,
    }
)


sr.reveal(`.logo-container`, {origin: 'left'})
sr.reveal(`.ul`, { origin: 'left', delay: 500})
sr.reveal(`.get-started-container`, { origin: 'left', delay: 1000})
sr.reveal(`.main-head`, {interval: 100})
sr.reveal(`.sub-head`, {origin: 'left', delay: 300})
sr.reveal(`.about-us`, {interval: 100})
sr.reveal(`.about-us-text`, {origin: 'left', delay: 300})
sr.reveal(`.main-btn-container, .main-review-container`, {interval: 100, delay: 900})
sr.reveal(`.main-img-graduation`, { origin: 'bottom', delay: 1200})
sr.reveal(`.whatsapp-container`, { scale: 0.8, opacity: 0, easing: 'ease-out', delay: 1000})
sr.reveal(`.achievements-container`, { origin: 'top'})
sr.reveal(`.achievement-number`, { scale: 0.8, opacity: 0, easing: 'cubic-bezier(0.5, 0, 0, 1)', delay: 500})
sr.reveal(`.why-heading, .why-subheading, .why-subheading-text`, {interval: 100})
sr.reveal(`.why-section-container1`, { origin: 'bottom'})
sr.reveal(`.why-emoji1`, {scale: 0.8, delay: 900})
sr.reveal(`.service-heading, .service-subheading, .service-subheading-text`, {interval: -100})
sr.reveal('.services-section1', {delay: 500,easing: 'ease-out',rotate: { y: 90 },origin: 'left', opacity: 0,});
sr.reveal(`.about-us-section1-container`, {origin: 'left'})
sr.reveal(`.about-section-img1`, {origin: 'right', delay: 500})
sr.reveal(`.about-section-img2`, {origin: 'left', delay: 500})
sr.reveal(`.specialized-tracks-heading, .specialized-tracks-subheading`, {origin: 'right'})
sr.reveal(`.explore-courses`, {interval : 100, delay: 300})
sr.reveal(`.first-course`, {origin : 'left' , delay: 200})
sr.reveal(`.second-course`, {origin : 'left' , delay: 600})
sr.reveal(`.third-course`, {origin : 'left' , delay: 1000})
sr.reveal(`.hire-graduates-heading `, {interval: 50})
sr.reveal(`.companies-img`, {origin : 'left'})
sr.reveal(`.students-review-head, .students-review-subhead, .students-review-subhead-text`, { interval : 100})
sr.reveal(`.students-review-container2`, {scale: 0.8, opacity : 0, easing: 'ease-out'})
sr.reveal(`.faqs-section-1`, {origin : 'left'})
sr.reveal(`.collapse-toggle`, {origin : 'left'})
sr.reveal(`.join-now-container`, {rotate : {y : 90}, origin: 'left', opacity: 0, easing: 'ease-out'})
sr.reveal(`.learning-path-container`, {origin : 'top', delay: 200})
sr.reveal(`.quick-links-section`, {origin : 'top', delay: 400})
sr.reveal(`.support-container`, {origin : 'top', delay: 600})
sr.reveal(`.second-footer`, {origin : 'bottom'})
sr.reveal(`.about-img1`, {origin: 'top'})
sr.reveal(`.about-img2`, {origin : 'bottom'})
sr.reveal(`.our-mission`, {origin: 'left'})
sr.reveal(`.about-page-img3`, {origin: 'right'})
sr.reveal(`.value-container2`, {origin: 'top'})
sr.reveal(`.about-goals-head`, {origin: 'top'})
sr.reveal(`.team-member-01`, {origin: 'bottom', delay: 400})
sr.reveal(`.services-head`, {origin: 'top', delay: 400})
sr.reveal(`.contact-head, .contact-subhead`, {origin: 'top'})
sr.reveal(`.form-section`, {origin: 'left'})
sr.reveal(`.form-contact-info-container`, {origin: 'right'})
sr.reveal(`.contact-shortcut-container`, {origin: 'top', delay : 200})



// Scroll to top

const scrollTop = document.getElementById('scrolltotop');

window.addEventListener('scroll', ()=> {
    if (window.scrollY > 600) {
        scrollTop.classList.add('show')
    } else {
        scrollTop.classList.remove('show')
    }
});

scrollTop.addEventListener('click', ()=>{
    window.scrollTo({
        top: 0,
        behaviour: 'smooth'
    });
});


// Whatsapp button

const whatsappButton = document.getElementById('whatsappbtn')

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 600) {
        whatsappButton.classList.add('show')
    }
    else {
        whatsappButton.classList.remove('show')
    }
});


// Contact Scroll to form section

const contactInfoLink = document.getElementById('contact-info-link') 

const formSection = document.getElementById('form-section')

contactInfoLink.addEventListener('click', (e)=> {

    e.preventDefault();

    formSection.scrollIntoView ({
        behaviour: 'smooth'
    });
});