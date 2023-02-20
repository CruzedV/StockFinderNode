import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { CandleStickApex } from './CandleStickApex';
import { GraphState } from '../../../../Types/Position/GraphState';
import { GraphProps } from '../../../../Types/Position/GraphProps';

export class PositionGraph extends React.Component<GraphProps, GraphState>{
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
              <Typography variant="positionPrice">{this.props.averagePositionPrice}</Typography>
            </Box>
            <Box>
              <Typography color="success.main" variant="positionSubtitle">+34.19Р | +4%</Typography>
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