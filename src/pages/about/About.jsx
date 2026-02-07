import React from "react";
import {
  FaFilm,
  FaTv,
  FaSearch,
  FaHeart,
  FaPlay,
  FaStar,
} from "react-icons/fa";
import SEO from "../../components/seo/SEO";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import "../privacy/style.scss";

const About = () => {
  const features = [
    {
      icon: <FaFilm />,
      title: "Extensive Movie Database",
      description:
        "Access thousands of movies with detailed information, ratings, and reviews.",
    },
    {
      icon: <FaTv />,
      title: "TV Show Collection",
      description:
        "Explore trending TV shows, seasons, and episodes with full details.",
    },
    {
      icon: <FaSearch />,
      title: "Smart Search",
      description:
        "Find exactly what you're looking for with our powerful search feature.",
    },
    {
      icon: <FaHeart />,
      title: "Personal Watchlist",
      description: "Save your favorite movies and shows to watch later.",
    },
    {
      icon: <FaPlay />,
      title: "HD Trailers",
      description: "Watch high-quality trailers for all the latest releases.",
    },
    {
      icon: <FaStar />,
      title: "Ratings & Reviews",
      description:
        "See what others think with comprehensive ratings and reviews.",
    },
  ];

  const stats = [
    { number: "500K+", label: "Movies" },
    { number: "100K+", label: "TV Shows" },
    { number: "1M+", label: "Trailers" },
    { number: "10K+", label: "Daily Users" },
  ];

  return (
    <div className="legalPage aboutPage">
      <SEO
        title="About Us"
        description="Learn about G-movies - Your ultimate destination for discovering movies and TV shows. Explore our features and mission."
        url="/about"
      />
      <ContentWrapper>
        <div className="legalContent">
          <div className="heroSection">
            <h1>About G-movies</h1>
            <p className="tagline">
              Your ultimate destination for exploring the world of cinema.
              Discover movies, TV shows, and everything entertainment.
            </p>
          </div>

          <section>
            <h2>Our Mission</h2>
            <p>
              At G-movies, we believe that everyone deserves easy access to
              comprehensive movie and TV show information. Our mission is to
              provide film enthusiasts and casual viewers alike with a
              user-friendly platform to discover, explore, and enjoy the world
              of entertainment.
            </p>
            <p>
              We strive to bring you the latest information about trending
              movies, top-rated TV shows, upcoming releases, and hidden gems
              from around the world. Whether you're looking for your next
              binge-watch or researching a classic film, G-movies has you
              covered.
            </p>
          </section>

          <div className="featureGrid">
            {features.map((feature, index) => (
              <div className="featureCard" key={index}>
                <div className="icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="statsSection">
            {stats.map((stat, index) => (
              <div className="statItem" key={index}>
                <div className="number">{stat.number}</div>
                <div className="label">{stat.label}</div>
              </div>
            ))}
          </div>

          <section>
            <h2>Our Data Source</h2>
            <p>
              G-movies is powered by The Movie Database (TMDB) API, one of the
              most comprehensive and community-driven movie databases in the
              world. This partnership allows us to provide you with accurate,
              up-to-date information about millions of movies and TV shows.
            </p>
            <p>
              TMDB is a community built database supported by thousands of
              contributors worldwide. This ensures that the information you find
              on G-movies is reliable and constantly updated.
            </p>
          </section>

          <section>
            <h2>Why Choose G-movies?</h2>
            <ul>
              <li>
                <strong>Fast & Responsive:</strong> Enjoy a seamless browsing
                experience on any device
              </li>
              <li>
                <strong>No Registration Required:</strong> Start exploring
                immediately without signing up
              </li>
              <li>
                <strong>Ad-Supported:</strong> Free to use with minimal,
                non-intrusive advertisements
              </li>
              <li>
                <strong>Regular Updates:</strong> New content added daily with
                the latest releases
              </li>
              <li>
                <strong>User-Friendly:</strong> Intuitive design for easy
                navigation
              </li>
            </ul>
          </section>

          <section>
            <h2>Get in Touch</h2>
            <p>
              We'd love to hear from you! Whether you have feedback,
              suggestions, or just want to say hello, feel free to reach out to
              us.
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

export default About;
