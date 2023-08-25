import React from "react";

const List = () => {
  const items = ["Apple", "Kiwi", "Banana"];

  const listItem = items.map((item) => {
   return <li key={item}>{item}</li>;
  });
  return (
    <>
    <h3>3.List and Keys</h3>
      <ul>{listItem}</ul>
    </>
  );
};

export default List;
