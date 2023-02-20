import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { RegionProps } from '../../../Types/Position/RegionProps';
import { RegionState } from '../../../Types/Position/RegionState';

export class PositionRegion extends React.Component<RegionProps, RegionState> {
  render () {
    return (
      <React.Fragment>
        <Box sx={{
          textAlign: "center",
          p: "1em 1em 2em 1em",
          height: "5em",
        }}>
          <Typography>Страна и биржа</Typography>
          <Box>
            <Box sx={{
              width: "50%",
              float: "left",
            }}>
              <Typography>{this.props.countryOfRisk}</Typography>
              <Typography variant="positionText">{this.props.countryOfRiskName}</Typography>
            </Box>
            <Box sx={{
              width: "50%",
              float: "left",
              pt: "0.5em",
            }}>
              <Typography variant="positionPrice">{this.props.exchange.slice(0,15)}</Typography>
            </Box>
          </Box>
        </Box>
        <Divider light={true} variant="middle"/>
      </React.Fragment>
    )
  }
}