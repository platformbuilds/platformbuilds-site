// GDPR Cookie Consent Banner
document.addEventListener('DOMContentLoaded', function() {
  // Check if consent already given
  const consent = localStorage.getItem('cookie-consent');

  if (!consent) {
    showCookieBanner();
  } else if (consent === 'accepted') {
    enableAnalytics();
  }
});

function showCookieBanner() {
  const banner = document.createElement('div');
  banner.id = 'cookie-banner';
  banner.innerHTML = `
    <div style="
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      max-height: 80vh;
      background: var(--bg-primary);
      border-top: 1px solid var(--border-color);
      box-shadow: 0 -4px 12px rgba(0,0,0,0.1);
      z-index: 10000;
      font-family: var(--font-family-base);
      display: flex;
      flex-direction: column;
    ">
      <div style="
        padding: 1rem 1.5rem 0.5rem;
        flex: 1;
        overflow-y: auto;
        max-height: calc(80vh - 80px);
      ">
        <div style="max-width: 1200px; margin: 0 auto;">
          <h3 style="margin: 0 0 0.5rem 0; color: var(--text-primary); font-size: 1.1rem;">🍪 Cookie Preferences</h3>
          <p style="margin: 0; color: var(--text-secondary); font-size: 0.9rem; line-height: 1.4;">
            We use Google Analytics to understand how you use our website and improve your experience.
            By accepting, you consent to our use of cookies for analytics purposes.
            <a href="/privacy-policy/" style="color: var(--color-accent); text-decoration: underline;">Learn more</a>
          </p>
        </div>
      </div>
      <div style="
        padding: 0.75rem 1.5rem 1.5rem;
        border-top: 1px solid var(--border-color-light);
        background: var(--bg-primary);
        flex-shrink: 0;
      ">
        <div style="max-width: 1200px; margin: 0 auto; display: flex; gap: 0.75rem; align-items: center; justify-content: flex-end;">
          <button id="decline-cookies" style="
            padding: 0.5rem 1rem;
            background: transparent;
            border: 1px solid var(--border-color);
            color: var(--text-secondary);
            border-radius: var(--border-radius);
            cursor: pointer;
            font-size: 0.9rem;
            transition: var(--transition-fast);
            flex: 1;
            max-width: 120px;
          ">Decline</button>
          <button id="accept-cookies" style="
            padding: 0.5rem 1.5rem;
            background: var(--color-accent);
            border: 1px solid var(--color-accent);
            color: white;
            border-radius: var(--border-radius);
            cursor: pointer;
            font-size: 0.9rem;
            font-weight: 500;
            transition: var(--transition-fast);
            flex: 1;
            max-width: 160px;
          ">Accept Analytics</button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(banner);

  // Event listeners
  document.getElementById('accept-cookies').addEventListener('click', function() {
    localStorage.setItem('cookie-consent', 'accepted');
    enableAnalytics();
    banner.remove();
  });

  document.getElementById('decline-cookies').addEventListener('click', function() {
    localStorage.setItem('cookie-consent', 'declined');
    disableAnalytics();
    banner.remove();
  });
}

function enableAnalytics() {
  if (typeof gtag !== 'undefined') {
    gtag('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'denied'
    });
  }
}

function disableAnalytics() {
  if (typeof gtag !== 'undefined') {
    gtag('consent', 'update', {
      analytics_storage: 'denied',
      ad_storage: 'denied'
    });
  }
}

// Make functions globally available for manual consent management
window.enableAnalytics = enableAnalytics;
window.disableAnalytics = disableAnalytics;