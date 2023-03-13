import React from 'react'
import { BodyBuy } from './BodyBuy'
import { HeaderBuy } from './HeaderBuy'

export class BuyPage extends React.Component {
  render () {
    return (
      <React.Fragment>
        <HeaderBuy/>
        <BodyBuy link="buy"/>
      </React.Fragment>
    )
  }
}