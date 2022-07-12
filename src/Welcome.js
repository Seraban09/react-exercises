import React, { Component } from 'react'
import { Age } from './Age'

let age= 64;
export class Welcome extends Component {
  render() {
    return (
      <div>Welcome, {this.props.name}!
      {age>=18 && age<65 && this.props.name==="John" ? <Age eta={age} /> : <strong>dato non valido</strong> }
      </div>
    )
  }
}

Welcome.defaultProps = {
    name: "John"
  }