import React from "react";
import Counter from "../counter/Counter.jsx";

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      initCounter: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlePlus = this.handlePlus.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
  }

  handleChange(e) {
    this.setState((state) => ({
      initCounter: e.target.value,
    }));
  }

  handlePlus() {
    this.setState((state) => ({
      ...state,
      value: state.value + 1,
    }));
  }

  handleMinus() {
    this.setState((state) => ({
      ...state,
      value:
        state.value > this.state.initCounter
          ? state.value - 1
          : this.state.initCounter,
    }));
  }

  render() {
    return (
      <>
        <h1>Hola, soy un componente de clase</h1>
        <input
          type="number"
          placeholder="Valor inicial"
          onChange={(e) => {
            this.handleChange(e);
          }}
          value={this.state.initCounter}
        />
        <Counter
          initCounter={this.state.initCounter}
          value={this.state.value}
          handlePlus={this.handlePlus}
          handleMinus={this.handleMinus}
        />
      </>
    );
  }
}

export default Container;
