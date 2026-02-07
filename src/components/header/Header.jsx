import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movix-logo (3).png";
// const logo=""

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
    }
  };

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  const navigationHandler = (type) => {
    if (type === "movie") {
      navigate("/explore/movie");
    } else if (type === "tv") {
      navigate("/explore/tv");
    } else {
      navigate("/watchlist");
    }
    setMobileMenu(false);
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
        <ContentWrapper>
          <div
            className="logo"
            onClick={() => navigate("/")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && navigate("/")}
            aria-label="Go to homepage"
          >
            <img src={logo} alt="G-movies logo" />
            <span className="logoText">G-movies</span>
          </div>
          <nav aria-label="Main navigation">
            <ul className="menuItems">
              <li
                className="menuItem"
                onClick={() => navigationHandler("movie")}
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" && navigationHandler("movie")
                }
              >
                Movies
              </li>
              <li
                className="menuItem"
                onClick={() => navigationHandler("tv")}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && navigationHandler("tv")}
              >
                TV Shows
              </li>
              <li
                className="menuItem"
                onClick={() => navigationHandler("watchlist")}
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" && navigationHandler("watchlist")
                }
              >
                Watchlist
              </li>
              <li className="menuItem">
                <HiOutlineSearch
                  onClick={openSearch}
                  role="button"
                  tabIndex={0}
                  aria-label="Open search"
                  onKeyDown={(e) => e.key === "Enter" && openSearch()}
                />
              </li>
            </ul>
          </nav>

          <div className="mobileMenuItems">
            <HiOutlineSearch onClick={openSearch} aria-label="Open search" />
            {mobileMenu ? (
              <VscChromeClose
                onClick={() => setMobileMenu(false)}
                aria-label="Close menu"
              />
            ) : (
              <SlMenu onClick={openMobileMenu} aria-label="Open menu" />
            )}
          </div>
        </ContentWrapper>
        {showSearch && (
          <div className="searchBar">
            <ContentWrapper>
              <div className="searchInput">
                <label htmlFor="header-search" className="visually-hidden">
                  Search for movies or TV shows
                </label>
                <input
                  id="header-search"
                  type="text"
                  placeholder="Search for a movie or tv show...."
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyUp={searchQueryHandler}
                  aria-label="Search for movies or TV shows"
                />
                <VscChromeClose
                  onClick={() => setShowSearch(false)}
                  aria-label="Close search"
                />
              </div>
            </ContentWrapper>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
