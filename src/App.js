import React, { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [response, setResponse] = useState({});

  return (
    <div className="App">
      <Header setResponse={setResponse} className="header" />
      <Content response={response} className="content" />
      <Footer className="footer" />
    </div>
  );
};

export default App;
