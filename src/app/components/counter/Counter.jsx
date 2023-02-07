import React from "react";
import "./style.scss";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.initCounter,
      title: "Hola soy un estado",
    };
  }

  render() {
    return (
      <>
        <h2>{this.props.initCounter}</h2>
        <h3>{this.state.title}</h3>
        <div className="counter">
          <button onClick={this.props.handleMinus}>-</button>
          <span>{this.props.value}</span>
          <button onClick={this.props.handlePlus}>+</button>
        </div>
      </>
    );
  }
}

export default Counter;
