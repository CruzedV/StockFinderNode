import React from 'react'
import { Button, Typography } from '@mui/material'

export class PositionButton extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Button variant="contained" sx={{
          p: "1em 3em 1em 3em",
          bottom: "3em",
          backgroundColor: "success.main",
          opacity: "90%",
          position: "fixed",
        }}>
          <Typography>
            купить
          </Typography>
        </Button>
      </React.Fragment>
    )
  }
}