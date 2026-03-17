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
          how the Video.js website (legacy.videojs.org) handles information when you visit our site.
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
        
        <h2>Open Source and Development Platforms</h2>
        <p>
          Video.js is an open source project hosted on external development platforms. Our 
          documentation may link to code repositories, issue trackers, and other development 
          resources. When you interact with these platforms (such as submitting issues, viewing 
          code, or participating in discussions), you are subject to their respective privacy 
          policies and terms of service.
        </p>
        
        <h2>Third-Party Content and Services</h2>
        <p>
          Our website may include content from third-party services, including but not limited to:
        </p>
        <ul>
          <li>Embedded videos and media players</li>
          <li>Code repositories and development platforms</li>
          <li>External documentation and resources</li>
          <li>Interactive demos and examples</li>
        </ul>
        <p>
          These third-party services may:
        </p>
        <ul>
          <li>Set their own cookies and tracking technologies</li>
          <li>Collect information about your interaction with their content</li>
          <li>Be governed by their own privacy policies and terms of service</li>
          <li>Process data according to their own data handling practices</li>
        </ul>
        <p>
          We do not control these third-party services or their data practices. When you interact 
          with third-party content, you are subject to their respective privacy policies.
        </p>
        
        <h2>Cookies</h2>
        <p>
          This website does not set first-party tracking cookies. However, cookies may be set by:
        </p>
        <ul>
          <li><strong>Third-party services:</strong> When you interact with embedded content or external links</li>
          <li><strong>Functional cookies:</strong> Strictly necessary for website operation</li>
          <li><strong>Development platforms:</strong> When accessing linked code repositories or development tools</li>
        </ul>
        <p>
          We recommend reviewing the privacy policies of any third-party services you interact 
          with through our website.
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
          If you have questions about this privacy policy, please contact us through our 
          official community channels or development platforms. Links to these resources 
          can be found throughout our website and documentation.
        </p>
        <h2>Open Source Commitment</h2>
        <p>
          Video.js is committed to transparency and user privacy. As an open source project, 
          our website source code is publicly available, allowing you to verify our privacy 
          practices and the technical implementation of this policy.
        </p>
      </div>
    </Container>
  </Layout>
);

export default PrivacyPage;