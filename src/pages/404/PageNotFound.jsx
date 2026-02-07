import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import SEO from "../../components/seo/SEO";

const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <SEO
        title="Page Not Found - 404"
        description="The page you're looking for doesn't exist. Return to G-movies homepage to discover movies and TV shows."
        url="/404"
      />
      <ContentWrapper>
        <span className="bigText">404</span>
        <span className="smallText">Page not found!</span>
        <p className="description">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="homeBtn">
          Go Back Home
        </Link>
      </ContentWrapper>
    </div>
  );
};

export default PageNotFound;
