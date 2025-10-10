import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/SEO';
import Container from '../components/Container';

const PrivacyPage = () => (
  <Layout>
    <Seo
      title="Privacy Policy"
      description="Privacy policy for the Video.js website - learn about how we handle your data"
    />
    <Container>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
        <h1>Privacy Policy</h1>
        
        <p><strong>Last updated: {new Date().toLocaleDateString()}</strong></p>
        
        <h2>Introduction</h2>
        <p>
          Video.js is a community-built, free and open source HTML5 video player framework. This privacy policy describes 
          how the Video.js website (videojs.com) handles information when you visit our site.
        </p>
        
        <h2>Information We Don't Collect</h2>
        <p>
          We are committed to protecting your privacy. This website does <strong>not</strong>:
        </p>
        <ul>
          <li>Use analytics or tracking services (like Google Analytics)</li>
          <li>Set advertising or tracking cookies</li>
          <li>Share your data with third-party services for tracking purposes</li>
          <li>Collect personal information unless you voluntarily provide it</li>
          <li>Track your browsing behavior across other websites</li>
        </ul>
        
        <h2>Information We May Collect</h2>
        <p>
          Like most websites, our web servers may automatically collect standard technical information including:
        </p>
        <ul>
          <li>IP addresses (for security and server administration)</li>
          <li>Browser type and version</li>
          <li>Referring website addresses</li>
          <li>Pages requested and timestamps</li>
        </ul>
        <p>
          This information is used solely for maintaining the website's functionality, security, 
          and performance. It is not used for tracking or profiling visitors.
        </p>
        
        <h2>Open Source and GitHub</h2>
        <p>
          Video.js is hosted on GitHub, and our documentation may link to GitHub repositories 
          and issues. When you interact with GitHub (such as submitting issues or pull requests), 
          you are subject to <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" 
          rel="noopener noreferrer">GitHub's Privacy Policy</a>.
        </p>
        
        <h2>Cookies</h2>
        <p>
          This website does not set any tracking cookies. Any cookies that may be present are 
          strictly functional and necessary for the website to operate properly.
        </p>
        
        <h2>Children's Privacy</h2>
        <p>
          Our website does not specifically target children under 13, and we do not knowingly 
          collect personal information from children under 13.
        </p>
        
        <h2>Data Retention</h2>
        <p>
          Server logs containing technical information may be retained for security and 
          operational purposes for a reasonable period, typically not exceeding 12 months.
        </p>
        
        <h2>Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. Any changes will be posted on 
          this page with an updated "Last updated" date.
        </p>
        
        <h2>Contact</h2>
        <p>
          If you have questions about this privacy policy, please:
        </p>
        <ul>
          <li>Open an issue on our <a href="https://github.com/videojs/videojs.com" rel="noopener noreferrer">GitHub repository</a></li>
        </ul>
        
        <h2>Open Source Commitment</h2>
        <p>
          Video.js is committed to transparency and user privacy. Our website source code is 
          available at <a href="https://github.com/videojs/videojs.com" rel="noopener noreferrer">
          github.com/videojs/videojs.com</a>, allowing you to verify our privacy practices.
        </p>
      </div>
    </Container>
  </Layout>
);

export default PrivacyPage;