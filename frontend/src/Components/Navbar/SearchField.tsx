import * as React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { SearchState } from '../../Types/Navbar/SearchState';
// Global Search
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

export class SearchField extends React.Component<{}, SearchState> {
  constructor(props:any){
    super(props)
    this.state = {
      options: []
    }
  }
  render() {
    return(
      <TextField
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchRoundedIcon />
            </InputAdornment>
          ),
        }}
      />
  )}
}