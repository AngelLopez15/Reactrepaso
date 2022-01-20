import axios from 'axios';
import React, { Component } from 'react';
import PersonCard from './PersonCard';

class PersonGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
    }
  }

  componentDidMount() {
    axios.get('http://my-json-server.typicode.com/AngelLopez15/fake-api-persons/persons')
    .then(res=> {
      this.setState({
        persons: res.data
      })
    })
  }

  render() {

    const { persons } = this.state
    
    return (
      <div>
        <h1>Personas</h1>
        <div className='flex justify-center flex-wrap'>
          {
            persons.map( person=> (
              <PersonCard 
                key={person.id}
                first_name={person.first_name}
                last_name={person.last_name}
                gender={person.gender}
                email={person.email}
                animal={person.animal}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default PersonGrid;