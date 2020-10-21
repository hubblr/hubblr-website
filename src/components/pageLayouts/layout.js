import PropTypes from "prop-types";
import React from "react";

function Layout({ children }) {
  return (
    <div className="min-h-screen font-sans text-white bg-black">
      <main className="w-full max-w-6xl px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
