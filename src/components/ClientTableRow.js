import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class ClientTableRow extends Component {

  constructor(props) {
    super(props);
    this.deleteClient = this.deleteClient.bind(this);
  }

  deleteClient() {
    axios.delete('http://localhost:4000/clients/delete-client/' + this.props.obj._id)
    .then((res) => {
      alert('Client successfully deleted!')
      window.location.reload()
    }).catch((error) => {
      console.log(error)        
    })
  }

  render() {
    let addressInfo = this.props.obj.address.join(", ")
    return (
      <tr>
        <td>{this.props.obj.clientno}</td>  
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.email}</td>
        <td>{addressInfo}</td>
        <td>
          <Link className="edit-link" to={"/edit-client/" + this.props.obj._id}>
            Editar
          </Link>
          <Button onClick={this.deleteClient} size="sm" variant="outline-danger">Eliminar</Button>
        </td>
      </tr>
    );
  }
}