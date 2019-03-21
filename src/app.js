import React from "react";
import Item from "./item";
export default class App extends React.Component {
  state = {
    someData: [
      { name: "Oleg", age: 23, id: 1 },
      { name: "Ivan", age: 27, id: 2 },
      { name: "Pedro", age: 33, id: 3 }
    ]
  };
  render() {
    return (
      <div className="app">
        <Item someProps={this.state.someData} />
      </div>
    );
  }
}
