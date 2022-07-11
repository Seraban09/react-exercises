import React, { Component } from 'react'

export class Age extends Component {
  render() {
    return (
      <div>Your age is {this.props.age}!</div>
    )
  }
}


Age.defaultProps = {
    age: <strong>28</strong>
}