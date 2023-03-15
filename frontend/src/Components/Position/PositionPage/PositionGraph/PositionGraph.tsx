import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { CandleStickApex } from './CandleStickApex';
import { GraphState } from '../../../../Types/Position/GraphState';
import { GraphProps } from '../../../../Types/Position/GraphProps';
import { getLastPrice } from '../../../../API/getLastPrice';

export class PositionGraph extends React.Component<GraphProps, GraphState>{
  constructor(props:GraphProps) {
    super(props)
    this.state = {
      lastPrice: 0,
      isProfitable: false,
      profit: 0,
      profitPercentage: 0,
    }
  }
  async componentDidMount() {
    const res = await getLastPrice("/api/assets/"+this.props.figi+"/lastprice")
    this.setState ({
      lastPrice: this.props.instrumentType === "bond" ? Math.round(res*100)/10 : res,
    })
  }
  render () {
    return (
      <React.Fragment>
        <Box sx={{
          textAlign: "center",
          p: "1em 1em 2em 1em",
          height: "30em",
        }}>
          <Typography>График</Typography>
          <Box sx={{
            width: "100%",
            float: "left",
          }}>
            <Box>
              <Typography variant="positionPrice">{this.state.lastPrice} {this.props.currency}</Typography>
            </Box>
            <Box>
              <Typography color={this.state.isProfitable? "success.main" : "error.main"} variant="positionSubtitle">{this.state.profit} | +{this.state.profitPercentage}%</Typography>
            </Box>
          </Box>             
          <Box>
            <CandleStickApex
              name={this.props.name}
              figi={this.props.figi}
            />
          </Box>
        </Box>
        <Divider light={true} variant="middle"/>
      </React.Fragment>
    )
  }
}