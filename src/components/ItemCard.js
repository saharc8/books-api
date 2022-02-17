import React from "react";
import "./ItemCard.css";

const ItemCard = ({ item }) => {
  return (
    <div className="card">
      <span className="img_area">
        <img
          className="book_img"
          src={item.volumeInfo.imageLinks.thumbnail}
          alt="book_img"
        />
      </span>
      <span className="details">
        <b className="title">{item.volumeInfo.title}</b>
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
