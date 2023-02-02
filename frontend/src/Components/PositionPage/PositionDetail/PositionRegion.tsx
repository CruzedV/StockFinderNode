import React from 'react';
import { Box, Typography, Divider } from '@mui/material';

export class PositionRegion extends React.Component{
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
              <Typography> RU </Typography>
              <Typography variant="positionText">Российская федереция</Typography>
            </Box>
            <Box sx={{
              width: "50%",
              float: "left"
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