import React from 'react'
import { Box } from '@mui/material'
import { BodyBuy } from "../CommonC/Body"

export class PositionSellPage extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Box sx={{
          pt: "3.75em",
          pb: "3.75em",
        }}>
          <BodyBuy
            isBuy={false}
          />
        </Box>
      </React.Fragment>
    )
  }
}