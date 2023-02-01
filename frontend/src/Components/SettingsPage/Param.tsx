import React from 'react';
import { Divider, Typography, Box, TextField } from '@mui/material';

export class Param extends React.Component {
  render() {
    return(
      <React.Fragment>
        <Box sx={{
          borderRadius: "0.9em",
          m: "2em 2em 2em 2em",
          textAlign: "center",
        }}>
            <Typography color="text.primary">ПАРАМЕТР 1</Typography>
            <TextField fullWidth variant="filled" color="secondary"></TextField>
        </Box>
        <Divider light={true} variant="middle"/>
      </React.Fragment>
    )
  }
}