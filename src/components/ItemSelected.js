import React from "react";

const ItemSelected = ({ itemSelected }) => {
  return (
    <div className="itemSelected">
      <h3>{itemSelected.volumeInfo.title}</h3>
      <img
        style={{ height: "350px", width: "350px" }}
        src={itemSelected.volumeInfo.imageLinks.thumbnail}
        alt="book-cover"
      />
      <p>{itemSelected.volumeInfo.description}</p>
    </div>
  );
};

export default ItemSelected;
