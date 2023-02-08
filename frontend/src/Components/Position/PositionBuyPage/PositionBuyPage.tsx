import React from 'react';
import { Box, Paper, Typography } from '@mui/material'
import { PositionBuyBody } from './PositionBuyBody';

export class PositionBuyPage extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Box sx={{
          pt: "3.75em",
          pb: "3.75em",
        }}>
          <Paper sx={{
            borderRadius: "0.9em",
            p: "1em 1em 1em 1em",
            backgroundColor: "primary.main",
          }}>
            <Typography variant="positionPrice">
              ИИС
            </Typography>
            <Typography>
              Доступно для покупки: 1000P
            </Typography>
          </Paper>
        </Box>
        <PositionBuyBody/>
      </React.Fragment>

    )
  }
}