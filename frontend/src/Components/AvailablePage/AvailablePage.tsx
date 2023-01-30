import React from 'react'
import { BodyAvailable } from './BodyAvailable'
import { HeaderAvailable } from './HeaderAvailable'

export class AvailablePage extends React.Component {
  render () {
    return (
      <React.Fragment>
        <HeaderAvailable/>
        <BodyAvailable/>
      </React.Fragment>
    )
  }
}