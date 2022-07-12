import React, { Component } from 'react'
import { Age } from './Age'

let age= 66;
export class Welcome extends Component {
  render() {
    return (
      <div>Welcome, {this.props.name}!
      {age>=18 && age<65 ? <Age eta={age} /> : <strong>dato non valido</strong> }
      </div>
    )
  }
}

Welcome.defaultProps = {
    name: <strong>Pippo</strong>,
  }