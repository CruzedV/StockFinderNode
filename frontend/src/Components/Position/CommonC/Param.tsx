import React from 'react'
import { Box, Typography, TextField, FormControl, MenuItem, Select } from '@mui/material'
import { ParamsProps } from '../../../Types/Position/BuyPage/ParamsProps'
import { ParamsState } from '../../../Types/Position/BuyPage/ParamsState'

export class Param extends React.Component<ParamsProps, ParamsState> {
  constructor(props: ParamsProps) {
    super(props)
    this.handleChangeQuanity = this.handleChangeQuanity.bind(this)
    this.handleChangeType = this.handleChangeType.bind(this)
    this.state = {
      quanity: 1,
      type: "Лучшая цена",
    }
  }
  handleChangeQuanity(event: any) {
    this.setState({
      quanity: event.target.value
    })
  }
  handleChangeType(event: any) {
    this.setState({
      type: event.target.value
    })
  }
  render () {
    return (
      <Box sx={{
        mt: "1em",
        textAlign: "center",
      }}>
    {/* Price */}
        <Box sx={{
          mb: "1em",
        }}>
          <Box sx={{
            width: "75%",
            display: "inline-block",
          }}>
            <Typography>
              {this.state.type}
            </Typography>
            <TextField
              size="small" 
              variant="filled" 
              label={this.props.lastPrice + " " +this.props.currency} 
              fullWidth 
              color="secondary">
            </TextField>
          </Box>
          <Box sx={{
            width: "25%",
            display: "inline-block",
          }}>
            <FormControl size="small" sx={{ 
              width: "9em",
            }}>
              <Select
                labelId="select-type"
                id="select-type"
                label="Лучшая цена"
                value={this.state.type}
                onChange={(event)=>this.handleChangeType(event)}
              >
                <MenuItem value={"Лучшая цена"}>Лучшая цена</MenuItem>
                <MenuItem value={"Лимитная заявка"}>Лимитная заявка</MenuItem>
                <MenuItem value={"Рыночная заявка"}>Рыночная заявка</MenuItem>
                <MenuItem value={"Стоп-маркет"}>Стоп-маркет</MenuItem>
                <MenuItem value={"Стоп-лимит"}>Стоп-лимит</MenuItem>
                <MenuItem value={"Тейк-профит"}>Тейк-профит</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
    {/* Amount */}
        <Box sx={{
          mb: "1em",
        }}>
          <Box sx={{
            display: "inline-block",
            width: "75%",
          }}>
            <Typography>
              Количество
            </Typography>
            <TextField
              onChange={(event)=>this.handleChangeQuanity(event)}
              value={this.state.quanity}
              size="small" 
              variant="filled" 
              label={"1 лот = " + this.props.lot + " шт"} 
              fullWidth 
              color="secondary">
            </TextField>
          </Box>
          <Box sx={{
            display: "inline-block",
            width: "25%",
          }}>
            <Typography variant="positionSubtitle" color="success.main">
              На сумму: {Math.round((this.state.quanity*(this.props.lot*this.props.lastPrice))*100)/100} {this.props.currency}
            </Typography>
          </Box>
        </Box>
      </Box>

    )
  }
}