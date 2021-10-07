import React, { useState, useEffect } from "react";
import axios from "axios";

const Random = () => {
  const [response, setResponse] = useState({});

  useEffect(() => {
    const rand = Math.floor(Math.random() * 11);
    axios
      .get(
        //key=AIzaSyAOKGU_1e7pH22ciKtE9jIHDxx0F9ZpRRs
        `https://www.googleapis.com/books/v1/volumes?q='':keyes&key=AIzaSyAOKGU_1e7pH22ciKtE9jIHDxx0F9ZpRRs`
      )
      .then((response) => {
        setResponse(response.data.items[rand].volumeInfo.imageLinks);
      })
      .catch((err) => console.log("error", err));
  }, []);

  return (
    <div>
      <h3>{response.title}</h3>
      <img
        style={{ height: "350px", width: "350px" }}
        src={response.thumbnail}
        alt="book-cover"
      />
    </div>
  );
};

export default Random;
