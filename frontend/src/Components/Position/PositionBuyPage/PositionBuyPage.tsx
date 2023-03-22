import React from 'react';
import { Box, Paper, Typography } from '@mui/material'
import { BodyBuy } from "../CommonC/Body"
import { BodyBuyState } from '../../../Types/Position/BuyPage/BodyBuyState';

export class PositionBuyPage extends React.Component<{}, BodyBuyState> {
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
        <BodyBuy
          isBuy={true}
        />
      </React.Fragment>

    )
  }
}