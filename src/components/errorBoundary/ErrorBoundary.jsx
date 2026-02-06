import React from "react";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./style.scss";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="errorBoundary">
          <ContentWrapper>
            <div className="errorContent">
              <span className="errorTitle">Oops! Something went wrong.</span>
              <span className="errorSubTitle">
                We're having trouble loading this page. Please try refreshing or
                come back later.
              </span>
              <button
                className="refreshBtn"
                onClick={() => window.location.reload()}
              >
                Refresh Page
              </button>
            </div>
          </ContentWrapper>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
