import "./App.css";
import React from "react";
import Layout from "./components/Layout";
import Search from "./components/Search";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <div className="main">
          <div className="search-container">
            <Search />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default App;
