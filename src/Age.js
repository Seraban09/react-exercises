import React, { Component } from 'react'

export class Age extends Component {
  render() {
    return (
      <div>Your age is {this.props.eta}!</div>
    )
  }
}


Age.defaultProps = {
    eta: <strong>29</strong>
}