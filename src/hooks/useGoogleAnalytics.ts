import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

/**
 * Custom hook to track page views in Google Analytics.
 * It initializes GA and sends a pageview event on every route change.
 */
export const useGoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize with the Measurement ID provided by the user
    // We use an environment variable for flexibility, but default to the user's ID
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID || "G-P6RLZRFLHX";
    
    if (measurementId) {
      ReactGA.initialize(measurementId);
      console.log("Google Analytics initialized with ID:", measurementId);
    }
  }, []);

  useEffect(() => {
    // Send a pageview event whenever the location changes
    ReactGA.send({ 
      hitType: "pageview", 
      page: location.pathname + location.search 
    });
  }, [location]);
};
