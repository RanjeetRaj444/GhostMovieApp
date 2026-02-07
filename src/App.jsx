import { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchDataFromApi } from "./utils/api";

import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

// Lazy load pages for code splitting
const Home = lazy(() => import("./pages/home/Home"));
const Details = lazy(() => import("./pages/details/Details"));
const SearchResult = lazy(() => import("./pages/searchResult/SearchResult"));
const Explore = lazy(() => import("./pages/explore/Explore"));
const Watchlist = lazy(() => import("./pages/watchlist/Watchlist"));
const PageNotFound = lazy(() => import("./pages/404/PageNotFound"));

// Legal Pages - Lazy loaded
const Privacy = lazy(() => import("./pages/privacy/Privacy"));
const Terms = lazy(() => import("./pages/terms/Terms"));
const About = lazy(() => import("./pages/about/About"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const DMCA = lazy(() => import("./pages/dmca/DMCA"));

// Cookie Consent
import CookieConsent from "./components/cookieConsent/CookieConsent";

// Loading spinner component
const PageLoader = () => (
  <div
    style={{
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#04152d",
    }}
  >
    <div
      style={{
        width: "50px",
        height: "50px",
        border: "3px solid rgba(255,255,255,0.1)",
        borderTop: "3px solid #da2f68",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
      }}
    />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };

      dispatch(getApiConfiguration(url));
    });
  };

  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });

    dispatch(getGenres(allGenres));
  };

  return (
    <BrowserRouter>
      <Header />
      <main id="main-content" role="main">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:mediaType/:id" element={<Details />} />
            <Route path="/search/:query" element={<SearchResult />} />
            <Route path="/explore/:mediaType" element={<Explore />} />
            <Route path="/watchlist" element={<Watchlist />} />
            {/* Legal Pages */}
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/terms-of-service" element={<Terms />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dmca" element={<DMCA />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <CookieConsent />
    </BrowserRouter>
  );
}

export default App;
