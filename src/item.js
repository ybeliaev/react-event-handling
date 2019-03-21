import React from "react";

const Item = ({ someProps }) => {
  //   onLabelClick = () => console.log(`It's ${this.name}`);

  const element = someProps.map(item => {
    const { id, name, age } = item;
    return (
      <li key={id} className="list-group-item">
        Name: {name}, age: {age}
      </li>
    );
  });

  return <ul>{element}</ul>;
};
export default Item;
