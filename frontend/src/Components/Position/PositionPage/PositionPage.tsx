import React from 'react'
import { Box, Paper, Divider } from '@mui/material'
import { HeaderPosition } from './HeaderPosition'
import { PositionRegion } from './PositionRegion'
import { PositionGraph } from './PositionGraph/PositionGraph'
import { PositionButton } from './PositionButton'
import { Link } from 'react-router-dom';
import { PositionState } from '../../../Types/Position/PositionState'
import { PositionProps } from '../../../Types/Position/PositionProps'
import { getByFigi } from '../../../API/getByFigi'

export class PositionPage extends React.Component<PositionProps, PositionState> {
  constructor(props:PositionProps) {
    super(props)
    this.state = {
      figi: window.location.pathname.slice(1,),
      name: "",
      ticker: "",
      exchangeCode: "",
      country: "",
      averagePositionPrice: 0,
      countryOfRisk: "",
      countryOfRiskName: "",
    }
  }
  async componentDidMount() {
    console.log(this.state.figi)
    const res = await getByFigi("api/assets/"+this.state.figi)
    this.setState ({
      name: res.name,
      ticker: res.ticker,
      exchangeCode: res.exchangeCode,
      country: res.country,
      averagePositionPrice: res.averagePositionPrice,
      countryOfRisk: res.countryOfRisk,
      countryOfRiskName: res.countryOfRiskName,
    })
  }
  render () {
    return (
      <React.Fragment>
        <Box sx={{
          pt: "3.75em",
          pb: "3.75em",
        }}>
          <Paper sx={{
            borderRadius: "0.9em",
            backgroundColor: "primary.main",
          }}>
            <HeaderPosition name={this.state.name} ticker={this.state.ticker}/>
            <Divider color="#F4F4F4" variant="middle"/>
            <PositionRegion/>
            <Divider color="#F4F4F4" variant="middle"/>
            {/* <PositionDetail/> */}
            <Divider color="#F4F4F4" variant="middle"/>
            <PositionGraph/>
          </Paper>
          <Box sx={{
            p: "0.5em 0 0.5em 0"
          }}
          >
            <Box sx={{
              width: "20%",
              ml: "20%",
              mr: "auto",
            }}>
              <Link to={"sell"} state={this.state}>
                <PositionButton/>
              </Link>
            </Box>
            <Box sx={{
              width: "20%",
              ml: "auto",
              mr: "20%",
            }}>
              <Link to={"buy"} state={this.state}>
                <PositionButton/>
              </Link>
            </Box>
          </Box>
        </Box>
      </React.Fragment>
    )
  }
}