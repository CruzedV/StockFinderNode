import React from 'react';
import { Divider, Typography, Box, TextField } from '@mui/material';

export class Param extends React.Component {
  render() {
    return(
      <React.Fragment>
        <Box sx={{
          m: "2em auto 2em auto",
          textAlign: "center",
        }}>
          <Typography color="text.primary">ПАРАМЕТР 1</Typography>
          <TextField color="secondary"/>
        </Box>
        <Divider variant="middle" sx={{
          color: "secondary.main",
        }}/>
      </React.Fragment>
    )
  }
}