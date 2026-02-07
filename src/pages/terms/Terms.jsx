import React from "react";
import SEO from "../../components/seo/SEO";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import "../privacy/style.scss";

const Terms = () => {
  return (
    <div className="legalPage">
      <SEO
        title="Terms of Service"
        description="Read the Terms of Service for G-movies. Understand the rules and guidelines for using our movie database platform."
        url="/terms-of-service"
      />
      <ContentWrapper>
        <div className="legalContent">
          <h1>Terms of Service</h1>
          <p className="lastUpdated">Last Updated: February 7, 2026</p>

          <section>
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using G-movies (ghost-movie-app.vercel.app), you
              accept and agree to be bound by these Terms of Service. If you do
              not agree to these terms, please do not use our website.
            </p>
          </section>

          <section>
            <h2>Description of Service</h2>
            <p>
              G-movies provides a platform for users to explore movies and TV
              shows, view trailers, read descriptions, and discover new content.
              Our data is sourced from The Movie Database (TMDB) API. We do not
              host or stream any movies or TV shows directly.
            </p>
          </section>

          <section>
            <h2>User Conduct</h2>
            <p>When using G-movies, you agree to:</p>
            <ul>
              <li>Use the service for lawful purposes only</li>
              <li>Not attempt to gain unauthorized access to our systems</li>
              <li>Not interfere with or disrupt the service</li>
              <li>Not use automated tools to scrape or collect data</li>
              <li>
                Not engage in any activity that could damage our reputation
              </li>
              <li>Respect the intellectual property rights of others</li>
            </ul>
          </section>

          <section>
            <h2>Intellectual Property</h2>
            <p>
              All content on G-movies, including but not limited to text,
              graphics, logos, and software, is the property of G-movies or its
              content suppliers and is protected by international copyright
              laws.
            </p>
            <p>
              Movie posters, descriptions, and related content are provided by
              TMDB and are subject to their terms of use. All movie and TV show
              content belongs to their respective owners.
            </p>
          </section>

          <section>
            <h2>Third-Party Content</h2>
            <p>
              Our website displays content from third-party sources, including
              TMDB API and YouTube. We are not responsible for the accuracy,
              completeness, or reliability of third-party content.
            </p>
            <p>
              We may display advertisements from Google AdSense and other
              advertising networks. These third-party services have their own
              privacy policies and terms of service.
            </p>
          </section>

          <section>
            <h2>Disclaimer of Warranties</h2>
            <p>
              G-movies is provided "as is" and "as available" without any
              warranties of any kind, either express or implied, including but
              not limited to:
            </p>
            <ul>
              <li>Implied warranties of merchantability</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement</li>
              <li>Accuracy or completeness of content</li>
              <li>Uninterrupted or error-free service</li>
            </ul>
          </section>

          <section>
            <h2>Limitation of Liability</h2>
            <p>
              In no event shall G-movies, its owners, operators, or affiliates
              be liable for any indirect, incidental, special, consequential, or
              punitive damages arising out of or related to your use of the
              website.
            </p>
          </section>

          <section>
            <h2>External Links</h2>
            <p>
              Our website may contain links to external websites. We are not
              responsible for the content, privacy practices, or terms of
              service of these external sites. Accessing external links is at
              your own risk.
            </p>
          </section>

          <section>
            <h2>Modifications to Service</h2>
            <p>
              We reserve the right to modify, suspend, or discontinue any part
              of our service at any time without prior notice. We shall not be
              liable to you or any third party for any modification, suspension,
              or discontinuation.
            </p>
          </section>

          <section>
            <h2>Changes to Terms</h2>
            <p>
              We may update these Terms of Service at any time. Changes become
              effective immediately upon posting. Your continued use of G-movies
              after changes are posted constitutes your acceptance of the
              modified terms.
            </p>
          </section>

          <section>
            <h2>Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in
              accordance with applicable laws, without regard to conflict of law
              principles.
            </p>
          </section>

          <section>
            <h2>Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please
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

export default Terms;
