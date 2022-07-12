import React, { Component } from 'react'
import { Age } from './Age'


export class Welcome extends Component {
  render() {
    return (
      <div>Welcome, {this.props.name}!
      {age  ? <Age eta = {age}/> :< strong>Attento sei un Minorenne</strong>}
      </div>
    )
  }
}

Welcome.defaultProps = {
    name: <strong>Pippo</strong>,
  }