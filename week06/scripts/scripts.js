document.addEventListener('DOMContentLoaded', () => {


    const setCopyrightYear = () => {
        const yearSpan = document.getElementById('currentyear');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    };

 
    const handleMenu = () => {
        const menuButton = document.getElementById('menu-button');
        const nav = document.querySelector('nav');
        if (menuButton && nav) {
            menuButton.addEventListener('click', () => {
                nav.classList.toggle('open');
                menuButton.classList.toggle('open');
            });
        }
    };

   
    const startCountdown = () => {
        const countdownElement = document.getElementById('countdown');
        if (!countdownElement) return;

          const targetDate = new Date('April 18, 2026 00:00:00').getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

          
            if (distance < 0) {
                clearInterval(interval);
                countdownElement.innerHTML = "<p>The Fair is on now!</p>";
                return;
            }


            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            
            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

        }, 1000);
    };

  
    const events = [
        { name: 'Foro de las Estrellas Concerts', category: 'concert', description: 'Nightly free concerts featuring international stars.', image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg' },
        { name: 'Bullfighting Festival', category: 'culture', description: 'One of the most renowned bullfighting events in the world.', image: 'https://images.pexels.com/photos/20772871/pexels-photo-20772871.jpeg' },
        { name: 'Isla San Marcos', category: 'family', description: 'A massive area with rides, games, and family-friendly shows.', image: 'https://images.pexels.com/photos/30641988/pexels-photo-30641988.jpeg' },
        { name: 'Pabellón Gastronómico', category: 'culture', description: 'Taste the best of local and national Mexican cuisine.', image: 'https://images.pexels.com/photos/2087748/pexels-photo-2087748.jpeg' },
        { name: 'Livestock Exhibition', category: 'family', description: 'See award-winning livestock and enjoy equestrian shows.', image: 'https://images.pexels.com/photos/28154839/pexels-photo-28154839.jpeg' },
        { name: 'Teatro del Pueblo Shows', category: 'concert', description: 'Popular music acts performing for massive crowds.', image: 'https://images.pexels.com/photos/3025096/pexels-photo-3025096.jpeg' },
    ];

   
    const displayEvents = (filteredEvents) => {
        const eventGrid = document.getElementById('event-grid');
        if (!eventGrid) return;
        
     
        eventGrid.innerHTML = filteredEvents.map(event => `
            <div class="event-card">
                <img src="${event.image}"
                     alt="${event.name}"
                     loading="lazy"
                     decoding="async"
                     width="800" height="533"
                     class="event-image">
                <div class="event-card-content">
                    <h3>${event.name}</h3>
                    <p>${event.description}</p>
                </div>
            </div>
        `).join('');
    };

   
    const setupFiltering = () => {
        const filterButtons = document.querySelectorAll('#filter-buttons button');
        if (filterButtons.length === 0) return;

        
        displayEvents(events);

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');
                
               
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

   
                const filteredEvents = filter === 'all' ? events : events.filter(event => event.category === filter);
                displayEvents(filteredEvents);
            });
        });
    };


   
    const handleContactPage = () => {
        const contactForm = document.getElementById('contact-form');
        const welcomeMessage = document.getElementById('welcome-message');

        const savedName = localStorage.getItem('visitorName');
        if (savedName && welcomeMessage) {
            welcomeMessage.textContent = `Welcome back, ${savedName}!`;
        } else if (welcomeMessage) {
            welcomeMessage.classList.add('hidden');
        }

        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault(); 
                
                const nameInput = document.getElementById('name');
                const confirmationDiv = document.getElementById('form-confirmation');

           
                localStorage.setItem('visitorName', nameInput.value);

              
                if (confirmationDiv) {
                    confirmationDiv.classList.remove('hidden');
                }
                
                contactForm.reset(); 

               
                setTimeout(() => {
                    confirmationDiv.classList.add('hidden');
                }, 4000);
            });
        }
    };


  
    setCopyrightYear();
    handleMenu();
    startCountdown();
    setupFiltering();
    handleContactPage();

});