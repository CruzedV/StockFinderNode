import React from 'react'
import { Typography, Box } from '@mui/material'

export class Statistics extends React.Component {
  render () {
    return (
      <Box sx={{
        mb: "1em",
        mt: "1em",
        textAlign: "center",
      }}>
        <Box sx={{
          width: "50%",
          display: "inline-block",
        }}>
          <Typography>
            Комиссия: 
          </Typography>
        </Box>
        <Box sx={{
          width: "50%",
          display: "inline-block",
        }}>
          <Typography>
            На сумму: 0P
          </Typography>
        </Box>
        <Box sx={{
          width: "50%",
          display: "inline-block",
          mt: "1em",
        }}>
          <Typography>
            Итог:
          </Typography>
        </Box>
        <Box sx={{
          width: "50%",
          display: "inline-block",
          mt: "1em",
        }}>
          <Typography>
            На сумму: 887.9P
          </Typography>
        </Box>
      </Box>
    )
  }
}