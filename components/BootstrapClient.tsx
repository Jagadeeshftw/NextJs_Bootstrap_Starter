"use client";

import { useEffect } from "react";

function BootstrapClient() {
  useEffect(() => {
    // Dynamically import the Bootstrap JavaScript library
    // This import pulls in all Bootstrap JS which can be useful if you need its JavaScript components to enhance your site (like modals, dropdowns, etc.)
    import("bootstrap" as any)
      .then((bootstrap) => {
        // Successfully loaded Bootstrap, you can use it if needed
        console.log("Bootstrap loaded", bootstrap);
      })
      .catch((error) => {
        // Handle errors in loading the module
        console.error("Failed to load Bootstrap:", error);
      });
  }, []);

  // Since this component doesn't render anything, it returns null
  return null;
}

export default BootstrapClient;
