import React, { useState, useEffect } from "react";
import "./style.scss";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Small delay before showing the banner for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookieConsent">
      <div className="cookieContent">
        <div className="cookieText">
          <h4>🍪 We Value Your Privacy</h4>
          <p>
            We use cookies to enhance your browsing experience, serve
            personalized ads, and analyze our traffic. By clicking "Accept All",
            you consent to our use of cookies.{" "}
            <a href="/privacy-policy">Learn more</a>
          </p>
        </div>
        <div className="cookieActions">
          <button className="declineBtn" onClick={handleDecline}>
            Decline
          </button>
          <button className="acceptBtn" onClick={handleAccept}>
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
