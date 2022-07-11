import React, { Component } from 'react'
import { Age } from './Age'

export class Welcome extends Component {
  render() {
    return (
      <div>Welcome, {this.props.name}!
      <Age />
      </div>
    )
  }
}

Welcome.defaultProps = {
    name: <strong>Pippo</strong>,
    
  }