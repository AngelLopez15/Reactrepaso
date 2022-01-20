import React, { Component } from 'react';
import axios from 'axios';
import UsuariosGrid from '../components/UsuariosGrid';

class Usuarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        this.setState({
          users: res.data
        })
      })
  }

  render() {

    const { users } = this.state

    return <UsuariosGrid users={users} />
  }
}

export default Usuarios;