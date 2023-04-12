import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const MainLayout = ({ children }) => {
  return (
    <div>
      {/* Header section */}
      <Header />
      {/* Main content area */}
      <div className="main">{children}</div>

      {/* Footer */}
      <Footer />
    </div>
  );
};
