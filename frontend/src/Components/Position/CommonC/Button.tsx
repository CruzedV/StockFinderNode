import React from 'react'
import { Box, Button, Typography } from '@mui/material'

export class BuyButton extends React.Component<{name: string}, {}> {
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
          backgroundColor: "success.main",
        }}>
          <Typography variant="positionText">
            {this.props.name}
          </Typography>
        </Button>
      </Box>
    )
  }
}