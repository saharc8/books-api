import React, { useEffect, useState } from "react";
import "./ItemCard.css";

const ItemCard = ({ item }) => {
  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    try {
      setImgSrc(item.volumeInfo.imageLinks.thumbnail);
    } catch (err) {
      console.log("error", err);
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="card">
      <span className="img_area">
        <img className="book_img" src={imgSrc} alt="book_img" />
      </span>
      <span className="details">
        <b className="title">
          {item.volumeInfo.title ? item.volumeInfo.title : "book_title"}
        </b>
        <br />
        <p className="desc">
          {item.volumeInfo.description
            ? `${item.volumeInfo.description.substring(0, 150)}`
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis posuere risus. Aliquam erat volutpat. Mauris tempor libero sit amet lorem cras"}
        </p>
      </span>
    </div>
  );
};

export default ItemCard;
