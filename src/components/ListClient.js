import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import ClientTableRow from './ClientTableRow';

export default class ClientList extends Component {

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

  DataTable() {
    return this.state.clients.map((res, i) => {
      return <ClientTableRow obj={res} key={i} />;
    });
  }

  render() {
    return (<div className="table-wrapper mt-5">
      <p className="title">Listado de Clientes</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No. Cliente</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Direccion</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}
