import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import InputAdornment from '@mui/material/InputAdornment';
import { SearchState } from '../../Types/Navbar/SearchState';
// Global Search
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { getInstrument } from '../../API/getInstrument';

export class SearchField extends React.Component<{}, SearchState> {
  constructor(props:any){
    super(props)
    this.state = {
      options: []
    }
    this.findInstrument = this.findInstrument.bind(this)
  }
  findInstrument(value: string) {
    const res = getInstrument(`/api/assets/find/${value}`)
    this.setState({
      options: res
    })
  }
  render() {
    return(
      <Autocomplete
        isOptionEqualToValue={(event, value)=>this.findInstrument(value)}
        options={this.state.options}
        renderInput={(params)=>(
          <TextField
          {...params}
            size="small"
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchRoundedIcon />
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    )
  }
}