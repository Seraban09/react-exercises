import React, { Component } from 'react'
import { Age } from './Age'

let age= 16;
export class Welcome extends Component {
  render() {
    return (
      <div>Welcome, {this.props.name}!
      {age>=18  ? <Age eta={age} /> : <p>you are very young!</p> }
      </div>
    )
  }
}

Welcome.defaultProps = {
    name: "John"
  }