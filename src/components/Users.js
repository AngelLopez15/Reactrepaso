import React, { Component } from 'react';
import UserCard from './UserCard';

class Users extends Component {

  constructor(props) {
    super(props)

    this.state = {
      users: [],
    }

  }

  componentDidMount() {

    // haciendo la peticion a la API una vez que el componente ya se ha montado
    fetch('https://jsonplaceholder.typicode.com/users', {method: 'get'})
      .then( response => response.json())
      .then( json => {
        this.setState({
          users: json
        })
      })
      .catch( error => console.log('error', error))

  }

  // shouldComponentUpdate(nextProps, nextState) {

  // }

  // componentWillUpdate(nextProps, nextState) {

  // }

  // componentDidUpdate(prevProps, prevState) {

  // }

  // componentWillUnmount() {

  // }

  render() {

    const { users } = this.state

    return (
      <div>
        <h1>Usuarios</h1>
        <div>
          {
            users.map( user => (
              <UserCard 
                key={user.id}
                name={user.name}
                username={user.username}
                email={user.email}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default Users;