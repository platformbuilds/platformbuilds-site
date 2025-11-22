// Main JavaScript for platformbuilds.org

document.addEventListener('DOMContentLoaded', function() {
    // Theme system
    initThemeSystem();
    
    // Techie mode system
    initTechieSystem();
    
    // Mobile menu toggle - with debug logging
    console.log('Initializing mobile menu...');
    initMobileMenu();
    console.log('Mobile menu initialized.');
    
    // Smooth scrolling for anchor links
    initSmoothScrolling();
    
    // Intersection Observer for animations
    initScrollAnimations();
    
    // Form enhancements
    initFormEnhancements();
    
    // Performance optimizations
    initLazyLoading();
    
    // Scroll to top button
    initScrollToTop();
});

// Theme System - Dark/Light Mode Toggle
function initThemeSystem() {
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');
    
    // Get saved theme or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Apply saved theme
    setTheme(savedTheme);
    
    // Theme toggle click handler
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
    
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        // Update icon visibility
        if (sunIcon && moonIcon) {
            if (theme === 'dark') {
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'block';
            } else {
                sunIcon.style.display = 'block';
                moonIcon.style.display = 'none';
            }
        }
        
        // Update mobile theme toggle icons as well
        const mobileSunIcons = document.querySelectorAll('#mobile-menu .sun-icon');
        const mobileMoonIcons = document.querySelectorAll('#mobile-menu .moon-icon');
        
        mobileSunIcons.forEach(icon => {
            icon.style.display = theme === 'dark' ? 'none' : 'block';
        });
        
        mobileMoonIcons.forEach(icon => {
            icon.style.display = theme === 'dark' ? 'block' : 'none';
        });
        
        // Track theme change
        trackEvent('theme_changed', { theme: theme });
    }
}

// Techie Mode System - Toggle between Visitor and Techie fonts
function initTechieSystem() {
    const techieToggle = document.getElementById('techie-toggle');
    const visitorIcons = document.querySelectorAll('.techie-visitor-icon');
    const techieIcons = document.querySelectorAll('.techie-techie-icon');
    
    let headingObserver = null;
    
    // Get saved techie mode or default to false (visitor mode)
    const savedTechie = localStorage.getItem('techie') || 'false';
    
    // Apply saved techie mode
    setTechieMode(savedTechie);
    
    // Techie toggle click handler
    if (techieToggle) {
        techieToggle.addEventListener('click', function() {
            const currentTechie = document.documentElement.getAttribute('data-techie') || 'false';
            const newTechie = currentTechie === 'true' ? 'false' : 'true';
            setTechieMode(newTechie);
        });
    }
    
    function setTechieMode(techie) {
        document.documentElement.setAttribute('data-techie', techie);
        localStorage.setItem('techie', techie);
        
        if (techie === 'true') {
            // Set up intersection observer for headings
            const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
            headings.forEach(heading => {
                if (!heading.dataset.originalHTML) {
                    heading.dataset.originalHTML = heading.innerHTML;
                }
                // Reset to original state
                heading.innerHTML = heading.dataset.originalHTML;
                heading.dataset.typed = 'false';
            });
            
            // Create observer
            headingObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && entry.target.dataset.typed !== 'true') {
                        entry.target.dataset.typed = 'true';
                        typeHeading(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });
            
            // Observe all headings
            headings.forEach(heading => {
                headingObserver.observe(heading);
            });
            
            // Type headings that are already in view
            headings.forEach(heading => {
                const rect = heading.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0 && heading.dataset.typed !== 'true') {
                    heading.dataset.typed = 'true';
                    typeHeading(heading);
                }
            });
        } else {
            // Disconnect observer
            if (headingObserver) {
                headingObserver.disconnect();
                headingObserver = null;
            }
            
            // Restore original text and remove effects
            const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
            headings.forEach(heading => {
                if (heading.dataset.originalHTML) {
                    heading.innerHTML = heading.dataset.originalHTML;
                    heading.dataset.typed = 'false';
                }
            });
        }
        
        // Update icons
        if (techie === 'true') {
            visitorIcons.forEach(icon => icon.style.display = 'none');
            techieIcons.forEach(icon => icon.style.display = 'block');
        } else {
            visitorIcons.forEach(icon => icon.style.display = 'block');
            techieIcons.forEach(icon => icon.style.display = 'none');
        }
        
        // Track techie mode change
        trackEvent('techie_mode_changed', { techie: techie });
    }
}

// Typing effect for headings in techie mode
function typeHeading(heading) {
    const html = heading.dataset.originalHTML || heading.innerHTML;
    
    // Special handling for the hero heading with heart icon
    if (html.includes('heart.svg')) {
        heading.innerHTML = '';
        // Create cursor element
        const cursor = document.createElement('span');
        cursor.textContent = '_';
        cursor.style.animation = 'blink 1s step-end infinite';
        heading.appendChild(cursor);
        
        // Define the typing sequence step by step
        const steps = [
            () => { // Type "W"
                const textNode = document.createTextNode('W');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "e"
                const textNode = document.createTextNode('e');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type " "
                const textNode = document.createTextNode(' ');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Insert heart icon
                const heartImg = document.createElement('img');
                heartImg.src = '/logos/heart.svg';
                heartImg.alt = 'heart';
                heartImg.style.display = 'inline';
                heartImg.style.verticalAlign = 'middle';
                heartImg.style.width = '1.2em';
                heartImg.style.height = '1.2em';
                heading.insertBefore(heartImg, cursor);
            },
            () => { // Type " "
                const textNode = document.createTextNode(' ');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "O"
                const textNode = document.createTextNode('O');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "p"
                const textNode = document.createTextNode('p');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "e"
                const textNode = document.createTextNode('e');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "n"
                const textNode = document.createTextNode('n');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "S"
                const textNode = document.createTextNode('S');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "o"
                const textNode = document.createTextNode('o');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "u"
                const textNode = document.createTextNode('u');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "r"
                const textNode = document.createTextNode('r');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "c"
                const textNode = document.createTextNode('c');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "e"
                const textNode = document.createTextNode('e');
                heading.insertBefore(textNode, cursor);
            }
        ];
        
        let step = 0;
        const interval = setInterval(() => {
            if (step < steps.length) {
                steps[step]();
                step++;
            } else {
                clearInterval(interval);
                // Cursor continues blinking
            }
        }, 50); // typing speed
    } else if (html.includes('community.svg')) {
        // Special handling for the footer heading with community icon
        heading.innerHTML = '';
        // Create cursor element
        const cursor = document.createElement('span');
        cursor.textContent = '_';
        cursor.style.animation = 'blink 1s step-end infinite';
        heading.appendChild(cursor);
        
        // Define the typing sequence step by step
        const steps = [
            () => { // Insert community icon
                const communityImg = document.createElement('img');
                communityImg.src = '/logos/community.svg';
                communityImg.alt = 'community';
                communityImg.style.display = 'inline';
                communityImg.style.verticalAlign = 'middle';
                communityImg.style.width = '1.5em';
                communityImg.style.height = '1.5em';
                communityImg.style.marginRight = '0.5rem';
                heading.insertBefore(communityImg, cursor);
            },
            () => { // Type " "
                const textNode = document.createTextNode(' ');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "J"
                const textNode = document.createTextNode('J');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "o"
                const textNode = document.createTextNode('o');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "i"
                const textNode = document.createTextNode('i');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "n"
                const textNode = document.createTextNode('n');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type " "
                const textNode = document.createTextNode(' ');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "O"
                const textNode = document.createTextNode('O');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "u"
                const textNode = document.createTextNode('u');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "r"
                const textNode = document.createTextNode('r');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type " "
                const textNode = document.createTextNode(' ');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "C"
                const textNode = document.createTextNode('C');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "o"
                const textNode = document.createTextNode('o');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "m"
                const textNode = document.createTextNode('m');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "m"
                const textNode = document.createTextNode('m');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "u"
                const textNode = document.createTextNode('u');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "n"
                const textNode = document.createTextNode('n');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "i"
                const textNode = document.createTextNode('i');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "t"
                const textNode = document.createTextNode('t');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "y"
                const textNode = document.createTextNode('y');
                heading.insertBefore(textNode, cursor);
            }
        ];
        
        let step = 0;
        const interval = setInterval(() => {
            if (step < steps.length) {
                steps[step]();
                step++;
            } else {
                clearInterval(interval);
                // Cursor continues blinking
            }
        }, 50); // typing speed
    } else if (html.includes('discuss.svg')) {
        // Special handling for the products heading with discuss icon
        heading.innerHTML = '';
        // Create cursor element
        const cursor = document.createElement('span');
        cursor.textContent = '_';
        cursor.style.animation = 'blink 1s step-end infinite';
        heading.appendChild(cursor);
        
        // Define the typing sequence step by step
        const steps = [
            () => { // Insert discuss icon
                const discussImg = document.createElement('img');
                discussImg.src = '/logos/discuss.svg';
                discussImg.alt = 'discuss';
                discussImg.style.display = 'inline';
                discussImg.style.verticalAlign = 'middle';
                discussImg.style.width = '1.5em';
                discussImg.style.height = '1.5em';
                discussImg.style.marginRight = '0.5rem';
                heading.insertBefore(discussImg, cursor);
            },
            () => { // Type " "
                const textNode = document.createTextNode(' ');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "R"
                const textNode = document.createTextNode('R');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "e"
                const textNode = document.createTextNode('e');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "a"
                const textNode = document.createTextNode('a');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "d"
                const textNode = document.createTextNode('d');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "y"
                const textNode = document.createTextNode('y');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type " "
                const textNode = document.createTextNode(' ');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "t"
                const textNode = document.createTextNode('t');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "o"
                const textNode = document.createTextNode('o');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type " "
                const textNode = document.createTextNode(' ');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "D"
                const textNode = document.createTextNode('D');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "i"
                const textNode = document.createTextNode('i');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "s"
                const textNode = document.createTextNode('s');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "c"
                const textNode = document.createTextNode('c');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "u"
                const textNode = document.createTextNode('u');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "s"
                const textNode = document.createTextNode('s');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "s"
                const textNode = document.createTextNode('s');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type " "
                const textNode = document.createTextNode(' ');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "Y"
                const textNode = document.createTextNode('Y');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "o"
                const textNode = document.createTextNode('o');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "u"
                const textNode = document.createTextNode('u');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "r"
                const textNode = document.createTextNode('r');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type " "
                const textNode = document.createTextNode(' ');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "P"
                const textNode = document.createTextNode('P');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "l"
                const textNode = document.createTextNode('l');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "a"
                const textNode = document.createTextNode('a');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "t"
                const textNode = document.createTextNode('t');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "f"
                const textNode = document.createTextNode('f');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "o"
                const textNode = document.createTextNode('o');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "r"
                const textNode = document.createTextNode('r');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "m"
                const textNode = document.createTextNode('m');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type " "
                const textNode = document.createTextNode(' ');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "N"
                const textNode = document.createTextNode('N');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "e"
                const textNode = document.createTextNode('e');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "e"
                const textNode = document.createTextNode('e');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "d"
                const textNode = document.createTextNode('d');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "s"
                const textNode = document.createTextNode('s');
                heading.insertBefore(textNode, cursor);
            },
            () => { // Type "?"
                const textNode = document.createTextNode('?');
                heading.insertBefore(textNode, cursor);
            }
        ];
        
        let step = 0;
        const interval = setInterval(() => {
            if (step < steps.length) {
                steps[step]();
                step++;
            } else {
                clearInterval(interval);
                // Cursor continues blinking
            }
        }, 50); // typing speed
    } else {
        // Default typing for other headings
        heading.innerHTML = '';
        const text = html.replace(/<[^>]*>/g, ''); // Strip HTML tags for plain text
        // Create cursor element
        const cursor = document.createElement('span');
        cursor.textContent = '_';
        cursor.style.animation = 'blink 1s step-end infinite';
        heading.appendChild(cursor);
        
        let i = 0;
        const interval = setInterval(() => {
            if (i < text.length) {
                const textNode = document.createTextNode(text.charAt(i));
                heading.insertBefore(textNode, cursor);
                i++;
            } else {
                clearInterval(interval);
                // Cursor continues blinking
            }
        }, 50); // typing speed
    }
}

// Scroll to Top Button
function initScrollToTop() {
    // Create scroll to top button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.className = 'scroll-top';
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollTopBtn);
    
    // Show/hide scroll to top button based on scroll position
    window.addEventListener('scroll', throttle(function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    }, 100));
    
    // Scroll to top when clicked
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        trackEvent('scroll_to_top_clicked');
    });
}

// Mobile Menu Functionality
function initMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    function handleMobileMenuClick(event) {
        event.preventDefault(); // Prevent any default behavior
        event.stopPropagation(); // Stop event from bubbling
        const isOpen = mobileMenu.classList.contains('active');
        
        if (!isOpen) {
            mobileMenu.classList.add('active');
            mobileMenuButton.innerHTML = '<i class="fas fa-times"></i>';
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = 'hidden';
            
            // Track menu opening
            trackEvent('mobile_menu_opened');
        } else {
            mobileMenu.classList.remove('active');
            mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
            
            // Restore body scroll
            document.body.style.overflow = '';
            
            // Track menu closing
            trackEvent('mobile_menu_closed');
        }
    }
    
    if (mobileMenuButton && mobileMenu) {
        // Use touchstart for better mobile responsiveness
        mobileMenuButton.addEventListener('touchstart', handleMobileMenuClick);
        mobileMenuButton.addEventListener('click', handleMobileMenuClick);
        
        // Close menu when clicking on a link (but not dropdown toggles)
        const mobileLinks = mobileMenu.querySelectorAll('a:not(.mobile-dropdown-toggle)');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
                document.body.style.overflow = '';
            });
        });
        
        // Handle mobile dropdown toggles
        const mobileDropdownToggles = mobileMenu.querySelectorAll('.mobile-dropdown-toggle');
        mobileDropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const dropdown = this.parentElement;
                const menu = dropdown.querySelector('.mobile-dropdown-menu');
                const icon = this.querySelector('.mobile-dropdown-icon');
                
                // Close other open dropdowns
                const allDropdowns = mobileMenu.querySelectorAll('.mobile-dropdown');
                allDropdowns.forEach(d => {
                    if (d !== dropdown) {
                        d.classList.remove('active');
                        const otherMenu = d.querySelector('.mobile-dropdown-menu');
                        const otherIcon = d.querySelector('.mobile-dropdown-icon');
                        if (otherMenu) otherMenu.style.display = 'none';
                        if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
                    }
                });
                
                // Toggle current dropdown
                const isActive = dropdown.classList.contains('active');
                if (isActive) {
                    dropdown.classList.remove('active');
                    menu.style.display = 'none';
                    icon.style.transform = 'rotate(0deg)';
                } else {
                    dropdown.classList.add('active');
                    menu.style.display = 'block';
                    icon.style.transform = 'rotate(180deg)';
                }
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
                if (mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                    mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
                    document.body.style.overflow = '';
                }
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
                document.body.style.overflow = '';
            }
        });
        
        // Handle window resize
        window.addEventListener('resize', throttle(function() {
            if (window.innerWidth > 768 && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
                document.body.style.overflow = '';
            }
        }, 250));
    }
}

// Smooth Scrolling for Anchor Links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                const headerOffset = 80; // Account for fixed header
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll-triggered Animations
function initScrollAnimations() {
    // Create intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate on scroll
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    // Add animation class to elements that should animate
    const elementsToAnimate = document.querySelectorAll('section > div, .card-hover, .feature-item');
    elementsToAnimate.forEach((el, index) => {
        el.classList.add('animate-on-scroll');
        el.style.animationDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
}

// Form Enhancements
function initFormEnhancements() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        // Add loading state to form submissions
        form.addEventListener('submit', function(e) {
            const submitButton = form.querySelector('button[type="submit"]');
            if (submitButton) {
                const originalText = submitButton.textContent;
                submitButton.textContent = 'Sending...';
                submitButton.disabled = true;
                
                // Add spinner
                const spinner = document.createElement('i');
                spinner.className = 'fas fa-spinner fa-spin mr-2';
                submitButton.insertBefore(spinner, submitButton.firstChild);
                
                // Reset button after delay (in case form doesn't redirect)
                setTimeout(() => {
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                    const spinnerEl = submitButton.querySelector('.fa-spinner');
                    if (spinnerEl) spinnerEl.remove();
                }, 5000);
            }
        });
        
        // Enhanced form validation
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            // Real-time validation feedback
            input.addEventListener('blur', validateInput);
            input.addEventListener('input', function() {
                // Clear error state on input
                if (this.classList.contains('border-red-500')) {
                    this.classList.remove('border-red-500');
                    this.classList.add('border-gray-300');
                    
                    const errorMsg = this.parentNode.querySelector('.error-message');
                    if (errorMsg) errorMsg.remove();
                }
            });
        });
    });
}

// Input Validation
function validateInput(event) {
    const input = event.target;
    const value = input.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    // Remove existing error message
    const existingError = input.parentNode.querySelector('.error-message');
    if (existingError) existingError.remove();
    
    // Email validation
    if (input.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
    }
    
    // Required field validation
    if (input.required && !value) {
        isValid = false;
        errorMessage = 'This field is required';
    }
    
    // Update input styling and show error message
    if (!isValid) {
        input.classList.remove('border-gray-300', 'focus:border-blue-500');
        input.classList.add('border-red-500', 'focus:border-red-500');
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message text-red-500 text-sm mt-1';
        errorDiv.textContent = errorMessage;
        input.parentNode.appendChild(errorDiv);
    } else {
        input.classList.remove('border-red-500', 'focus:border-red-500');
        input.classList.add('border-gray-300', 'focus:border-blue-500');
    }
    
    return isValid;
}

// Lazy Loading for Images
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('loading-skeleton');
                    observer.unobserve(img);
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => {
            img.classList.add('loading-skeleton');
            imageObserver.observe(img);
        });
    }
}

// Utility Functions

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Copy to clipboard functionality
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(function() {
            showNotification('Copied to clipboard!', 'success');
        });
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('Copied to clipboard!', 'success');
    }
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg text-white z-50 transition-all duration-300 transform translate-x-full`;
    
    // Set background color based on type
    switch(type) {
        case 'success':
            notification.classList.add('bg-green-500');
            break;
        case 'error':
            notification.classList.add('bg-red-500');
            break;
        case 'warning':
            notification.classList.add('bg-yellow-500');
            break;
        default:
            notification.classList.add('bg-blue-500');
    }
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Analytics event tracking (placeholder for future integration)
function trackEvent(eventName, eventProperties = {}) {
    // Placeholder for analytics implementation
    console.log('Event tracked:', eventName, eventProperties);
    
    // Example: Google Analytics 4
    // gtag('event', eventName, eventProperties);
    
    // Example: Plausible Analytics
    // plausible(eventName, { props: eventProperties });
}

// Performance monitoring
function measurePerformance() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
                
                // Track performance metrics
                trackEvent('page_load_time', {
                    load_time: Math.round(loadTime),
                    dom_content_loaded: Math.round(perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart)
                });
            }, 0);
        });
    }
}

// Initialize performance monitoring
measurePerformance();

// Service Worker registration removed - no PWA features currently implemented
// if ('serviceWorker' in navigator && window.location.protocol === 'https:') {
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('/sw.js')
//             .then(registration => {
//                 console.log('SW registered: ', registration);
//             })
//             .catch(registrationError => {
//                 console.log('SW registration failed: ', registrationError);
//             });
//     });
// }