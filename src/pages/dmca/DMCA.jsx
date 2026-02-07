import React from "react";
import SEO from "../../components/seo/SEO";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import "../privacy/style.scss";

const DMCA = () => {
  return (
    <div className="legalPage">
      <SEO
        title="DMCA Policy"
        description="Read our DMCA Policy to understand how G-movies handles copyright claims and takedown requests."
        url="/dmca"
      />
      <ContentWrapper>
        <div className="legalContent">
          <h1>DMCA Policy</h1>
          <p className="lastUpdated">Digital Millennium Copyright Act Notice</p>

          <section>
            <h2>Introduction</h2>
            <p>
              G-movies respects the intellectual property rights of others and
              expects our users to do the same. In accordance with the Digital
              Millennium Copyright Act of 1998 ("DMCA"), we will respond
              expeditiously to claims of copyright infringement.
            </p>
          </section>

          <section>
            <h2>Important Notice</h2>
            <p>
              G-movies does not host, store, or distribute any movies, TV shows,
              or copyrighted video content. We are an information aggregator
              that displays:
            </p>
            <ul>
              <li>
                Movie and TV show metadata (titles, descriptions, ratings)
              </li>
              <li>Poster images sourced from TMDB API</li>
              <li>Embedded trailers from YouTube</li>
              <li>Links to external streaming services</li>
            </ul>
            <p>
              All movie data and images are provided by The Movie Database
              (TMDB) under their API terms of use. All trailers are embedded
              from YouTube and remain hosted on their platform.
            </p>
          </section>

          <section>
            <h2>Filing a DMCA Notice</h2>
            <p>
              If you believe that content available on G-movies infringes your
              copyright, please send a written notification containing the
              following information:
            </p>
            <ul>
              <li>
                <strong>Identification:</strong> A description of the
                copyrighted work you claim has been infringed
              </li>
              <li>
                <strong>Location:</strong> The URL or specific location where
                the allegedly infringing material is located
              </li>
              <li>
                <strong>Contact Information:</strong> Your name, address,
                telephone number, and email address
              </li>
              <li>
                <strong>Good Faith Statement:</strong> A statement that you have
                a good faith belief that the use is not authorized by the
                copyright owner, its agent, or the law
              </li>
              <li>
                <strong>Accuracy Statement:</strong> A statement under penalty
                of perjury that the information in your notice is accurate and
                that you are the copyright owner or authorized to act on their
                behalf
              </li>
              <li>
                <strong>Signature:</strong> Your physical or electronic
                signature
              </li>
            </ul>
          </section>

          <section>
            <h2>Where to Send DMCA Notices</h2>
            <p>Please send all DMCA notices to our designated agent:</p>
            <p>
              <strong>Email:</strong> dmca@g-movies.com
            </p>
            <p>
              <strong>Subject Line:</strong> DMCA Takedown Request
            </p>
          </section>

          <section>
            <h2>Counter-Notification</h2>
            <p>
              If you believe your content was wrongly removed due to a mistake
              or misidentification, you may submit a counter-notification with
              the following information:
            </p>
            <ul>
              <li>Your physical or electronic signature</li>
              <li>
                Identification of the material that was removed and its former
                location
              </li>
              <li>
                A statement under penalty of perjury that you have a good faith
                belief the material was removed by mistake
              </li>
              <li>
                Your name, address, telephone number, and consent to
                jurisdiction
              </li>
            </ul>
          </section>

          <section>
            <h2>Repeat Infringers</h2>
            <p>
              In accordance with the DMCA, we will terminate the access of users
              who are determined to be repeat infringers in appropriate
              circumstances.
            </p>
          </section>

          <section>
            <h2>Third-Party Content</h2>
            <p>
              Please note that G-movies sources content from third-party
              providers. For content specifically from TMDB, please contact them
              directly at{" "}
              <a
                href="https://www.themoviedb.org/documentation/api/terms-of-use"
                target="_blank"
                rel="noopener noreferrer"
              >
                TMDB Terms of Use
              </a>
              . For YouTube trailers, please use{" "}
              <a
                href="https://www.youtube.com/copyright_complaint_form"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube's copyright tools
              </a>
              .
            </p>
          </section>

          <section>
            <h2>Disclaimer</h2>
            <p>
              This DMCA policy is provided for informational purposes and does
              not constitute legal advice. If you have legal questions regarding
              copyright infringement, please consult with a qualified attorney.
            </p>
          </section>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default DMCA;
