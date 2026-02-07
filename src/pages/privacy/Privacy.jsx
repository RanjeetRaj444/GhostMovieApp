import React from "react";
import SEO from "../../components/seo/SEO";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import "./style.scss";

const Privacy = () => {
  return (
    <div className="legalPage">
      <SEO
        title="Privacy Policy"
        description="Read our Privacy Policy to understand how G-movies collects, uses, and protects your personal information."
        url="/privacy-policy"
      />
      <ContentWrapper>
        <div className="legalContent">
          <h1>Privacy Policy</h1>
          <p className="lastUpdated">Last Updated: February 7, 2026</p>

          <section>
            <h2>Introduction</h2>
            <p>
              Welcome to G-movies ("we," "our," or "us"). We are committed to
              protecting your privacy and ensuring you have a positive
              experience on our website. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website ghost-movie-app.vercel.app.
            </p>
          </section>

          <section>
            <h2>Information We Collect</h2>
            <h3>Information You Provide</h3>
            <p>
              We may collect information you voluntarily provide when using our
              services, such as:
            </p>
            <ul>
              <li>Email address (if you contact us)</li>
              <li>Watchlist preferences stored locally in your browser</li>
              <li>Search queries and viewing history</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>
              When you visit our website, we automatically collect certain
              information, including:
            </p>
            <ul>
              <li>IP address and location data</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website address</li>
            </ul>
          </section>

          <section>
            <h2>Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your
              experience on our website. These include:
            </p>
            <ul>
              <li>
                <strong>Essential Cookies:</strong> Required for basic website
                functionality
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand how
                visitors interact with our website
              </li>
              <li>
                <strong>Advertising Cookies:</strong> Used to deliver relevant
                advertisements
              </li>
            </ul>
          </section>

          <section>
            <h2>Third-Party Advertising</h2>
            <p>
              We use Google AdSense to display advertisements on our website.
              Google AdSense uses cookies to serve ads based on your prior
              visits to our website and other websites. You may opt out of
              personalized advertising by visiting{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Ads Settings
              </a>
              .
            </p>
            <p>
              Third-party vendors, including Google, use cookies to serve ads
              based on your prior visits to our website or other websites. You
              can opt out of a third-party vendor's use of cookies for
              personalized advertising by visiting{" "}
              <a
                href="https://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.aboutads.info
              </a>
              .
            </p>
          </section>

          <section>
            <h2>How We Use Your Information</h2>
            <p>We use the collected information to:</p>
            <ul>
              <li>Provide and maintain our services</li>
              <li>Improve and personalize user experience</li>
              <li>Analyze usage patterns and trends</li>
              <li>Display relevant advertisements</li>
              <li>Respond to your inquiries and requests</li>
              <li>Protect against fraudulent or illegal activity</li>
            </ul>
          </section>

          <section>
            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational security
              measures to protect your personal information. However, no method
              of transmission over the Internet is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </section>

          <section>
            <h2>Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your personal data</li>
              <li>Opt out of personalized advertising</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2>Children's Privacy</h2>
            <p>
              Our website is not intended for children under 13 years of age. We
              do not knowingly collect personal information from children under
              13. If you are a parent or guardian and believe your child has
              provided us with personal information, please contact us.
            </p>
          </section>

          <section>
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <p>
              <strong>Email:</strong> contact@g-movies.com
            </p>
          </section>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Privacy;
