// Mobile Menu Functionality
function initMobileMenu() {
    console.log('Initializing mobile menu...');
    
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (!mobileMenuButton || !mobileMenu) {
        console.error('Mobile menu elements not found:', {
            button: mobileMenuButton,
            menu: mobileMenu
        });
        return;
    }
    
    console.log('Found mobile menu elements');
    
    function toggleMenu(event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        
        const isOpen = mobileMenu.classList.contains('active');
        console.log('Toggling menu, current state:', isOpen ? 'open' : 'closed');
        
        if (!isOpen) {
            mobileMenu.classList.add('active');
            mobileMenuButton.innerHTML = '<i class="fas fa-times fa-lg"></i>';
            document.body.style.overflow = 'hidden';
            mobileMenuButton.style.position = 'fixed';
            trackEvent('mobile_menu_opened');
            console.log('Menu opened');
        } else {
            closeMenu();
        }
    }
    
    function closeMenu() {
        mobileMenu.classList.remove('active');
        mobileMenuButton.innerHTML = '<i class="fas fa-bars fa-lg"></i>';
        document.body.style.overflow = '';
        mobileMenuButton.style.position = 'relative';
        trackEvent('mobile_menu_closed');
        console.log('Menu closed');
    }
    
    // Add both click and touch events for the button
    ['click', 'touchend'].forEach(eventType => {
        mobileMenuButton.addEventListener(eventType, function(e) {
            console.log(`${eventType} event triggered on mobile menu button`);
            toggleMenu(e);
        }, { passive: false });
    });
    
    // Close menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            console.log('Mobile link clicked');
            closeMenu();
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileMenuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
            if (mobileMenu.classList.contains('active')) {
                console.log('Click outside menu detected');
                closeMenu();
            }
        }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            console.log('Escape key pressed');
            closeMenu();
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', throttle(function() {
        if (window.innerWidth > 768 && mobileMenu.classList.contains('active')) {
            console.log('Window resized above mobile breakpoint');
            closeMenu();
        }
    }, 250));
    
    console.log('Mobile menu initialization complete');
}