import React from "react";
import Navbar from "./Navbar";
import "../styles/styles.css";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="bg-sky-blue-gradient">
      <Navbar />
      <div className="container-fluid m-0 p-0">
        <div className="container my-0 py-3 px-4 bg-white" style={{ minHeight: "80vh" }}>
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}
export const Head = () => <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />;
