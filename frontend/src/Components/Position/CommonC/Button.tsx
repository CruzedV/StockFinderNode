import React from 'react'
import { Box, Button, Typography } from '@mui/material'

export class BuyButton extends React.Component<{isBuy: boolean}, {}> {
  render () {
    return (
      <Box sx={{
        width: "20%",
        mt: "2em",
        ml: "40%",
        mr: "40%",
      }}>
        <Button variant="contained" sx={{
          p: "0.7em 2em 0.7em 2em",
          backgroundColor: this.props.isBuy
          ? "success.main"
          : "error.main",
        }}>
          <Typography variant="positionText">
            {this.props.isBuy ? "купить" : "продать"}
          </Typography>
        </Button>
      </Box>
    )
  }
}