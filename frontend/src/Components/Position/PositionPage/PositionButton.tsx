import React from 'react'
import { Button, Typography } from '@mui/material'
import { ButtonState } from '../../../Types/Position/ButtonState'
import { ButtonProps } from '../../../Types/Position/ButtonProps'

export class PositionButton extends React.Component<ButtonProps, ButtonState > {
  render () {
    return (
      <React.Fragment>
        <Button disabled={this.props.isDisabled} variant="contained" sx={{
          p: "0.7em 2em 0.7em 2em",
          bottom: "3em",
          backgroundColor: this.props.action === "купить" ? "success.main" : "error.main",
          opacity: "90%",
          position: "fixed",
        }}>
          <Typography variant="positionText">
            {this.props.action}
          </Typography>
        </Button>
      </React.Fragment>
    )
  }
}