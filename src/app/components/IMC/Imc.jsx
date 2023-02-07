import React from "react";

import { getInfoLocal, saveLocal } from "../../../service";
import "./styles.scss";
class Imc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 1.9,
      weight: 60,
      name: "Esteban",
      imc: 0,
      listImc: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleImcCalculate = this.handleImcCalculate.bind(this);
  }

  updateInfo() {
    const arrayimc = getInfoLocal();
    this.setState((state) => ({
      ...state,
      listImc: [...arrayimc],
    }));
  }

  componentDidMount() {
    this.updateInfo();
  }

  handleChange({ target }) {
    this.setState((state) => ({
      ...state,
      [target.name]: target.value,
    }));
  }

  handleImcCalculate() {
    const imc = this.state.weight / (this.state.height * this.state.height);

    this.setState((state) => ({
      ...state,
      imc: imc.toFixed(2),
    }));

    saveLocal({
      height: this.state.height,
      weight: this.state.weight,
      name: this.state.name,
      imc: imc.toFixed(2),
    });
    this.updateInfo();
  }

  render() {
    return (
      <>
        <h1>Calculadora IMC</h1>
        <label htmlFor="">Estatura</label>
        <input
          type="number"
          placeholder="Ingresa tu estatura"
          value={this.state.height}
          onChange={(e) => {
            this.handleChange(e);
          }}
          name="height"
        />
        <label htmlFor="">Peso</label>
        <input
          type="number"
          placeholder="Ingresa tu peso"
          value={this.state.weight}
          onChange={(e) => {
            this.handleChange(e);
          }}
          name="weight"
        />
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          value={this.state.name}
          onChange={(e) => {
            this.handleChange(e);
          }}
          name="name"
        />
        <button onClick={this.handleImcCalculate}>Calcular</button>

        <hr />

        <h2>Su imc es: {this.state.imc} </h2>
        <aside
          className={
            this.state.imc < 18.5
              ? "yellow"
              : this.state.imc >= 18.5 && this.state.imc < 24.9
              ? "green"
              : this.state.imc >= 24.9 && this.state.imc < 29.9
              ? "orange"
              : "red"
          }
        >
          <h3>
            {this.state.imc < 18.5
              ? "Peso debajo del normal"
              : this.state.imc >= 18.5 && this.state.imc < 24.9
              ? "Peso normal"
              : this.state.imc >= 24.9 && this.state.imc < 29.9
              ? "Sobre peso"
              : "Obesidad"}
          </h3>
        </aside>
        <hr />
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Peso</th>
              <th>Altura</th>
              <th>Imc</th>
            </tr>
          </thead>
          <tbody>
            {this.state.listImc.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.weight}</td>
                <td>{item.height}</td>
                <td>{item.imc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default Imc;
