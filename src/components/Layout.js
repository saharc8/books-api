import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./style.css";

const Layout = (props) => {
  return (
    <div className="container">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
