import React, { Component } from "react";
import axios from 'axios';
import "../App.css";
import ClientList from "./ListClient";

export default class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      clients: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/clients/')
    .then(res => {
      this.setState({
        clients: res.data
      });
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    return(
      <>
        <div className="form-wrapper">
          <h1>Bienvenido Admin</h1>
          <br></br>
          <br></br>
          <p className="title">Actualmente existen {this.state.clients.length} clientes registrados en el sistema, puede visualizar los detalles en la tabla debajo</p>
        </div>
        <ClientList />
      </>
    );
  }
}
