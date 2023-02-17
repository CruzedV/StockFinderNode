import React from 'react'
import { Button, Typography } from '@mui/material'
import { PositionProps } from '../../../Types/Position/PositionProps'
import { ButtonState } from '../../../Types/Position/ButtonState'

export class PositionButton extends React.Component<PositionProps, ButtonState > {
  render () {
    return (
      <React.Fragment>
        <Button variant="contained" sx={{
          p: "0.7em 2em 0.7em 2em",
          bottom: "3em",
          backgroundColor: "success.main",
          opacity: "90%",
          position: "fixed",
        }}>
          <Typography variant="positionText">
            купить
          </Typography>
        </Button>
      </React.Fragment>
    )
  }
}