import React, { Component } from 'react';
import CoursesContext from './CoursesContext';

class CoursesProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      courses: [],
    }
  }

  render() {
    return (
      <CoursesContext.Provider value={this.state} >
        {this.props.children}
      </CoursesContext.Provider>
    );
  }
}

export default CoursesProvider;