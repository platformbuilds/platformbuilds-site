---
layout: default
title: "Privacy & Data"
description: "How we collect, use, and protect your data"
permalink: /privacy-and-data/
---

<!-- Privacy & Data Page - styled like products.md -->

<section class="section">
  <div class="container">
    <div class="text-center mb-5">
      <h2>Privacy & Data</h2>
      <p style="font-size: var(--font-size-lg); max-width: 700px; margin: 0 auto;">
        We take data protection seriously. This page summarizes the types of data we collect, how we use it, and your rights. For the full legal text see our <a href="{{ '/privacy-policy/' | relative_url }}">Privacy Policy</a>.
      </p>
    </div>
  </div>
</section>

<section class="section" style="background-color: var(--bg-secondary);">
  <div class="container">
    <div class="grid grid-1" style="gap: 2rem;">
      <div class="card">
        <h3>Overview</h3>
        <p>PlatformBuilds collects only the data necessary to provide our services, improve the website experience, and comply with legal requirements. We minimise data collection and apply appropriate security measures.</p>
      </div>

      <div class="card">
        <h3>Data We Collect</h3>
        <ul>
          <li>Information you provide: contact forms, emails, and support requests.</li>
          <li>Automatically collected: IP address, browser, device, pages visited and referrer.</li>
          <li>Cookies and analytics data for site performance and usage.</li>
        </ul>
      </div>

      <div class="card">
        <h3>How We Use Data</h3>
        <p>We use collected data to operate and improve our services, communicate with you, and perform security and legal obligations. We do not sell personal data to third parties.</p>
      </div>

      <div class="card">
        <h3>Data Retention & Security</h3>
        <p>We retain personal information only as long as necessary for the purpose collected or as required by law. We use industry-standard safeguards including access controls and encryption where appropriate.</p>
      </div>

      <div class="card">
        <h3>Your Rights</h3>
        <p>If you are within the EEA you have rights including access, rectification, erasure, restriction, portability and to object to processing. Contact us to exercise any rights.</p>
      </div>

      <div class="card">
        <h3>Cookie Management</h3>
        <p>We use cookies (e.g., Google Analytics) to understand and improve the site. You can manage preferences via our cookie banner.</p>
        <button class="btn btn-primary" onclick="showCookieBanner()">Manage Cookie Preferences</button>
      </div>

      <div class="card">
        <h3>Contact</h3>
        <p>If you have privacy queries or requests about your data:</p>
        <ul>
          <li>Email: <a href="mailto:privacy@platformbuilds.org">privacy@platformbuilds.org</a></li>
          <li>Address: SONESTAA IWOODS, BELLANDUR, BANGALORE - 560103</li>
        </ul>
      </div>

    </div>
  </div>
</section>

<section class="section" style="background-color: var(--color-primary); color: var(--text-white); text-align: center;">
  <div class="container">
    <h2 style="color: var(--text-white); margin-bottom: 1.5rem;">Need help with data or privacy?</h2>
    <p style="font-size: var(--font-size-lg); margin-bottom: 2rem; max-width: 700px; margin-left: auto; margin-right: auto; color: white;">Reach out to discuss data handling, compliance or to submit a data request.</p>

    <div class="card" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); color: var(--text-white); margin-bottom: 2rem;">
      <h3 style="color: white !important;">Get in touch</h3>
      <p style="color: rgba(255,255,255,0.9);">Schedule a consultation or send a privacy request.</p>
      <a href="{{ '/contact/' | relative_url }}" class="btn btn-primary btn-header">Contact Us</a>
    </div>
  </div>
</section>

<script>
function showCookieBanner() {
  localStorage.removeItem('cookie-consent');
  location.reload();
}
</script>
