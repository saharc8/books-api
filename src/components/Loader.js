import React, { useEffect, useState } from "react";
import { ReactComponent as LoaderSVG } from "../assets/loader.svg";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loader">
      {isLoading ? <LoaderSVG /> : <h1>no results</h1>}
    </div>
  );
};

export default Loader;
