import * as React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
// Global Search
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

export class SearchField extends React.Component<{}, {text: string}> {
  constructor(props:any){
    const params = new URLSearchParams(window.location.search)
    super(props)
    this.findInstrument = this.findInstrument.bind(this)
    this.state = {
      text: params.get("search") === "null" ? "" : params.get("search")!
    }
  }
  findInstrument(event: any) {
    if (event.code === "Enter") {
      window.location.assign(`/buy/?type=shares&page=1&search=${this.state.text}`)
    }
  }
  handleChange(event: any) {
    this.setState({
      text: event.target.value
    })
  }
  render() {
    return(
      <TextField
        onChange={(event)=>this.handleChange(event)}
        value={this.state.text}
        onKeyDown={(event)=>this.findInstrument(event)}
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