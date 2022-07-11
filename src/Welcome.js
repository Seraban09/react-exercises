import React, { Component } from 'react'

export class Welcome extends Component {
  render() {
    return (
      <div>Welcome, {this.props.name}!
        Your age is {this.props.age}!
      </div>
    )
  }
}

Welcome.defaultProps = {
    name: "Pippo",
    age: 26,
  }