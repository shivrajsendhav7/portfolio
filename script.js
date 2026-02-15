//  JS Libraries

        document.addEventListener('DOMContentLoaded', () => {

            // --- 1. Dark/Light Mode Toggle ---
            const themeToggle = document.getElementById('theme-toggle');
            themeToggle.addEventListener('click', () => {
                document.documentElement.classList.toggle('dark');
                if (document.documentElement.classList.contains('dark')) {
                    localStorage.theme = 'dark';
                } else {
                    localStorage.theme = 'light';
                }
            });

            // --- 2. Mobile Menu Toggle ---
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
                mobileMenuButton.classList.toggle('active'); // For potential icon animation
            });

            // Close mobile menu when a link is clicked
            mobileMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                    mobileMenuButton.classList.remove('active');
                });
            });


            // --- 3. Typed.js for Hero Section Tagline ---
            if (document.getElementById('animated-intro-line')) {
                new Typed('#animated-intro-line', {
                    strings: [
                        "I craft engaging digital experiences.",
                        "Transforming ideas into robust web solutions.",
                        "Passionate about clean code and intuitive design.",
                        "Let's build something amazing together."
                    ],
                    typeSpeed: 50,
                    backSpeed: 25,
                    backDelay: 1500,
                    loop: true,
                    showCursor: true,
                    cursorChar: '|',
                });
            }

            // // --- 4. Particles.js Initialization ---
            // // Ensure particles.js is loaded before this runs
            // if (typeof particlesJS !== 'undefined') {
            //     particlesJS('particles-js', {
            //         "particles": {
            //             "number": {
            //                 "value": 80,
            //                 "density": {
            //                     "enable": true,
            //                     "value_area": 800
            //                 }
            //             },
            //             "color": {
            //                 "value": "#660d0dff" // Particle color (white)
            //             },
            //             "shape": {
            //                 "type": "circle",
            //                 "stroke": {
            //                     "width": 0,
            //                     "color": "#000000"
            //                 },
            //                 "polygon": {
            //                     "nb_sides": 5
            //                 },
            //             },
            //             "opacity": {
            //                 "value": 0.5,
            //                 "random": false,
            //                 "anim": {
            //                     "enable": false,
            //                     "speed": 1,
            //                     "opacity_min": 0.1,
            //                     "sync": false
            //                 }
            //             },
            //             "size": {
            //                 "value": 3,
            //                 "random": true,
            //                 "anim": {
            //                     "enable": false,
            //                     "speed": 40,
            //                     "size_min": 0.1,
            //                     "sync": false
            //                 }
            //             },
            //             "line_linked": {
            //                 "enable": true,
            //                 "distance": 150,
            //                 "color": "#ffffff", // Line color (white)
            //                 "opacity": 0.4,
            //                 "width": 1
            //             },
            //             "move": {
            //                 "enable": true,
            //                 "speed": 6,
            //                 "direction": "none",
            //                 "random": false,
            //                 "straight": false,
            //                 "out_mode": "out",
            //                 "bounce": false,
            //                 "attract": {
            //                     "enable": false,
            //                     "rotateX": 600,
            //                     "rotateY": 1200
            //                 }
            //             }
            //         },
            //         "interactivity": {
            //             "detect_on": "canvas",
            //             "events": {
            //                 "onhover": {
            //                     "enable": true,
            //                     "mode": "grab" // "grab", "bubble", "repulse"
            //                 },
            //                 "onclick": {
            //                     "enable": true,
            //                     "mode": "push" // "push", "remove", "bubble", "repulse"
            //                 },
            //                 "resize": true
            //             },
            //             "modes": {
            //                 "grab": {
            //                     "distance": 140,
            //                     "line_linked": {
            //                         "opacity": 1
            //                     }
            //                 },
            //                 "bubble": {
            //                     "distance": 400,
            //                     "size": 40,
            //                     "duration": 2,
            //                     "opacity": 8,
            //                     "speed": 3
            //                 },
            //                 "repulse": {
            //                     "distance": 200,
            //                     "duration": 0.4
            //                 },
            //                 "push": {
            //                     "particles_nb": 4
            //                 },
            //                 "remove": {
            //                     "particles_nb": 2
            //                 }
            //             }
            //         },
            //         "retina_detect": true
            //     });
            // }


            // --- 5. AOS (Animate On Scroll) Initialization ---
            AOS.init({
                duration: 1000,
                easing: 'ease-in-out',
                once: true, // Whether animation should happen only once - default
                mirror: false, // Whether elements should animate out while scrolling past them
            });

            // --- 6. About Me Section - Interactive Tabs ---
            const tabButtons = document.querySelectorAll('.tab-button');
            const tabContents = document.querySelectorAll('.tab-content');

            tabButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Remove active styles from all buttons
                    tabButtons.forEach(btn => {
                        btn.classList.remove('bg-violet-600', 'text-white', 'dark:bg-neon-500', 'dark:hover:bg-neon-600');
                        btn.classList.add('bg-gray-200', 'text-gray-700', 'dark:bg-gray-700', 'dark:text-gray-300', 'hover:bg-gray-300', 'dark:hover:bg-gray-600');
                    });

                    // Hide all tab contents
                    tabContents.forEach(content => {
                        content.classList.add('hidden');
                        content.classList.remove('grid'); // Remove grid display for hidden content
                    });

                    // Add active styles to clicked button
                    button.classList.add('bg-violet-600', 'text-white', 'dark:bg-neon-500', 'dark:hover:bg-neon-600');
                    button.classList.remove('bg-gray-200', 'text-gray-700', 'dark:bg-gray-700', 'dark:text-gray-300', 'hover:bg-gray-300', 'dark:hover:bg-gray-600');

                    // Show relevant tab content
                    const targetTabId = button.dataset.tab + '-skills';
                    const targetTabContent = document.getElementById(targetTabId);
                    if (targetTabContent) {
                        targetTabContent.classList.remove('hidden');
                        targetTabContent.classList.add('grid'); // Add grid display for active content
                    }
                    AOS.refresh(); // Refresh AOS to trigger animations on new content
                });
            });

            // Initialize first tab as active
            if (tabButtons.length > 0) {
                tabButtons[0].click();
            }


            // --- 7. Smooth Scroll Navigation with Section Highlights ---
            const navLinks = document.querySelectorAll('.nav-link');
            const sections = document.querySelectorAll('section'); // Select all sections

            const observerOptions = {
                root: null, // viewport
                rootMargin: '0px',
                threshold: 0.3 // Adjust this value: when 30% of the section is visible
            };

            const sectionObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        navLinks.forEach(link => {
                            link.classList.remove('text-violet-600', 'dark:text-neon-400');
                            link.classList.add('text-gray-700', 'dark:text-gray-300');
                        });
                        const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                        if (activeLink) {
                            activeLink.classList.add('text-violet-600', 'dark:text-neon-400');
                            activeLink.classList.remove('text-gray-700', 'dark:text-gray-300');
                        }
                    }
                });
            }, observerOptions);

            sections.forEach(section => {
                sectionObserver.observe(section);
            });

            // Add click event for smooth scroll for internal links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
        });