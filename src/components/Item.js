import React from "react";

const Item = ({ item, selectedItemView }) => {
  return (
    <div
      style={{ cursor: "pointer" }}
      className="list-item"
      onClick={() => {
        console.log(item);
        selectedItemView(item);
      }}
    >
      <div>{item.volumeInfo.title}</div>
      <div>
        <img
          style={{ height: "50px", width: "50px" }}
          src={item.volumeInfo.imageLinks.thumbnail}
          alt="book-cover"
        />
      </div>
    </div>
  );
};

export default Item;
