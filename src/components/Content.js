import React from "react";
import ItemCard from "./ItemCard";
import Loader from "./Loader";

const Content = ({ response }) => {
  return (
    <div className="content">
      {response.items ? (
        response.items
          .slice(0, 10)
          .map((item) => <ItemCard key={item.id} item={item} />)
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Content;
