import React from "react";

const Item = ({ someProps }) => {
  // const onItemClick = ()=>console.log(123);
  const element = someProps.map(item => {
    const { id, name, age } = item;
    const onItemClick = () => console.log(name);
    return (
      <li key={id} onClick={() => onItemClick()}>
        Name: {name}, age: {age}
      </li>
    );
  });

  return <ul>{element}</ul>;
};
export default Item;
