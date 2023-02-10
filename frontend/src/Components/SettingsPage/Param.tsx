import React from 'react';
import { Divider, Typography, Box, TextField } from '@mui/material';
import { ParamProps } from '../../Types/Settings/ParamProps';
import { ParamState } from '../../Types/Settings/ParamState';

export class Param extends React.Component<ParamProps, ParamState> {
  render() {
    return(
      <React.Fragment>
        <Box sx={{
          borderRadius: "0.9em",
          m: "2em 2em 2em 2em",
          textAlign: "center",
        }}>
          <Typography color="text.primary">{this.props.name}</Typography>
          <TextField size="small" label={this.props.name} variant="filled" fullWidth color="secondary"></TextField>
        </Box>
        <Divider color="#F4F4F4" light={true} variant="middle"/>
      </React.Fragment>
    )
  }
}