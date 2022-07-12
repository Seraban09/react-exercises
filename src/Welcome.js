import React, { Component } from 'react'
import { Age } from './Age'

let age = 25;
export class Welcome extends Component {
  render() {
    return (
      <div>Welcome, {this.props.name}!
      {age >= 18 ? <Age eta = {age}/> :< strong>Attento sei un Minorenne</strong>}
      </div>
    )
  }
}

Welcome.defaultProps = {
    name: <strong>Pippo</strong>,
  }