import React from 'react'
import { Box, Typography, TextField, FormControl, MenuItem, Select } from '@mui/material'

export class Param extends React.Component {
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
              Лучшая цена
            </Typography>
            <TextField label="ПАРАМЕТР 1" fullWidth color="secondary"></TextField>
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
              >
                <MenuItem value={0}>Лучшая цена</MenuItem>
                <MenuItem value={1}>Лимитная заявка</MenuItem>
                <MenuItem value={2}>Рыночная заявка</MenuItem>
                <MenuItem value={3}>Стоп-маркет</MenuItem>
                <MenuItem value={4}>Стоп-лимит</MenuItem>
                <MenuItem value={5}>Тейк-профит</MenuItem>
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
            <TextField label="ПАРАМЕТР 1" fullWidth color="secondary"></TextField>
          </Box>
          <Box sx={{
            display: "inline-block",
            width: "25%",
          }}>
            <Typography variant="positionSubtitle" color="success.main">
              На сумму: 887.9P
            </Typography>
          </Box>
        </Box>

      </Box>

    )
  }
}