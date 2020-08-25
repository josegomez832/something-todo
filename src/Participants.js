import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export class Participants extends Component {
  render() {
      
    return (
      <div>
        <h5>{this.props.number}</h5>
        <FontAwesomeIcon icon={faUser} />
      </div>
    )
  }
}

export default Participants
