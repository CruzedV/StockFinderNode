import * as React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
// Global Search
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

export class SearchField extends React.Component {
  constructor(props:any){
    super(props)
    this.findInstrument = this.findInstrument.bind(this)
  }
  findInstrument(event: any) {
    const params = new URLSearchParams(window.location.search)
    params.set("search", event.target.value)
    setTimeout(() => window.location.reload)
  } 
  render() {
    return(
      <TextField
        onChange={(event: any) => this.findInstrument(event)}
        fullWidth
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchRoundedIcon/>
            </InputAdornment>
          ),
        }}
      />
  )}
}