---
layout: page
title: Privacy Policy
permalink: /privacy-policy/
subtitle: How we protect and handle your data
---

<div class="container" style="padding: 2rem 0;">
    <div style="max-width: 800px; margin: 0 auto;">
        <h1>Privacy Policy</h1>
        <p class="text-muted">Last updated: {{ site.time | date: "%B %d, %Y" }}</p>

        <h2>1. Introduction</h2>
        <p>PlatformBuilds ("we", "our", or "us") is committed to protecting your privacy and ensuring compliance with data protection laws, including the General Data Protection Regulation (GDPR). This Privacy Policy explains how we collect, use, and protect your personal information.</p>

        <h2>2. Information We Collect</h2>

        <h3>2.1 Information You Provide</h3>
        <p>We collect information you provide directly to us, such as when you contact us through our website forms or subscribe to our services.</p>

        <h3>2.2 Automatically Collected Information</h3>
        <p>When you visit our website, we may automatically collect certain information about your device and browsing behavior:</p>
        <ul>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages visited and time spent on our site</li>
            <li>Referring website</li>
            <li>Geographic location (country/city level)</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We use the collected information to:</p>
        <ul>
            <li>Provide and improve our services</li>
            <li>Analyze website usage and performance</li>
            <li>Communicate with you about our services</li>
            <li>Comply with legal obligations</li>
        </ul>

        <h2>4. Google Analytics</h2>
        <p>We use Google Analytics 4 to understand how visitors interact with our website. Google Analytics collects information such as:</p>
        <ul>
            <li>Pages visited</li>
            <li>Time spent on pages</li>
            <li>Traffic sources</li>
            <li>Device and browser information</li>
        </ul>

        <p><strong>Cookie Usage:</strong> Google Analytics uses cookies to collect this information. You can control cookie preferences through our cookie consent banner.</p>

        <p><strong>Data Sharing:</strong> We do not sell or share your personal information with third parties except as described in this policy. Google Analytics data may be processed by Google in accordance with their privacy policy.</p>

        <h2>5. Your Rights Under GDPR</h2>
        <p>If you are located in the European Economic Area (EEA), you have the following rights:</p>
        <ul>
            <li><strong>Right to Access:</strong> Request a copy of your personal data</li>
            <li><strong>Right to Rectification:</strong> Correct inaccurate data</li>
            <li><strong>Right to Erasure:</strong> Request deletion of your data</li>
            <li><strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
            <li><strong>Right to Data Portability:</strong> Receive your data in a structured format</li>
            <li><strong>Right to Object:</strong> Object to processing based on legitimate interests</li>
            <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for cookie usage</li>
        </ul>

        <h2>6. Cookie Management</h2>
        <p>You can manage your cookie preferences at any time:</p>
        <ul>
            <li>Use our cookie consent banner to accept or decline analytics cookies</li>
            <li>Clear cookies through your browser settings</li>
            <li>Use browser extensions to block cookies</li>
        </ul>

        <p><strong>Note:</strong> Blocking analytics cookies may affect website functionality and our ability to improve the user experience.</p>

        <h2>7. Data Retention</h2>
        <p>We retain your personal information only as long as necessary for the purposes outlined in this policy or as required by law. Analytics data is typically retained for 26 months by Google Analytics.</p>

        <h2>8. Data Security</h2>
        <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

        <h2>9. Third-Party Links</h2>
        <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.</p>

        <h2>10. Children's Privacy</h2>
        <p>Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13.</p>

        <h2>11. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page.</p>

        <h2>12. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
        <ul>
            <li>Email: privacy@platformbuilds.org</li>
            <li>Address: SONESTAA IWOODS, BELLANDUR, BANGALORE - 560103</li>
        </ul>

        <h2>13. Consent</h2>
        <p>By using our website, you consent to the collection and use of information in accordance with this Privacy Policy. You can withdraw your consent at any time by contacting us or managing your cookie preferences.</p>

        <hr style="margin: 2rem 0;">

        <div style="background: var(--bg-secondary); padding: 1rem; border-radius: var(--border-radius); margin-top: 2rem;">
            <h3>Cookie Settings</h3>
            <p>You can change your cookie preferences at any time:</p>
            <button onclick="showCookieBanner()" style="
                padding: 0.5rem 1rem;
                background: var(--color-accent);
                color: white;
                border: none;
                border-radius: var(--border-radius);
                cursor: pointer;
                margin-top: 0.5rem;
            ">Manage Cookie Preferences</button>
        </div>
    </div>
</div>

<script>
// Function to show cookie banner for preference management
function showCookieBanner() {
    // This will trigger the cookie consent banner to reappear
    localStorage.removeItem('cookie-consent');
    location.reload();
}
</script>