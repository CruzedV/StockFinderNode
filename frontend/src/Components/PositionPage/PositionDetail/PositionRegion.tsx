import React from 'react';
import { Box, Typography, Divider } from '@mui/material';

export class PositionRegion extends React.Component{
  render () {
    return (
      <React.Fragment>
        <Box sx={{
          textAlign: "center",
        }}>
          <Typography>Страна и биржа</Typography>
          <Box>
            <Box sx={{
              width: "50%",
            }}>
              <Typography> RU </Typography>
              <Typography variant="positionText">Россия</Typography>
            </Box>
            <Box sx={{
              width: "50%"
            }}>
              <Typography> MOEX </Typography>
              <Typography variant="positionText">Московская биржа</Typography>
            </Box>
          </Box>
        </Box>
        <Divider light={true} variant="middle"/>
      </React.Fragment>
    )
  }
}