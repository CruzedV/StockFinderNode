import React from 'react'
import { BodyPortfolio } from './BodyPortfoilio'
import { HeaderPortfolio } from './HeaderPortfolio'

export class PortfolioPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeaderPortfolio/>
        <BodyPortfolio/>
      </React.Fragment>
    )
  }
}