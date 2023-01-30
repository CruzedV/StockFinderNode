import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box } from '@mui/material';

export class PositionCard extends React.Component {
  render () {
    return (
      <Card sx={{ 
        m: "2em auto 2em auto",
        maxWidth: "37.5em",
        maxHeight: "4em",
        borderRadius: "0.9em"
       }}>
        <CardActionArea>
          <Box sx={{
            float: "left",
          }}>
            <CardMedia
              component="img"
              image="./minfinx160.png"
              sx={{
                maxHeight: "4em", 
              }}
            />
          </Box>
          <Box>
            <Box sx={{
              textAlign: "center",
              float: "left",
              width: "40%",
            }}>
              <Typography color="text.secondary">
                ОФЗ 12454566534343
              </Typography>
              <Typography variant="positionSubtitle" color="text.secondary">
                1020 шт
              </Typography>
            </Box>
            <Box sx={{
              textAlign: "center",
              float: "right",
              width: "40%",
            }}>
              <Typography color="text.secondary">
                1000Р
              </Typography>
              <Typography variant="positionSubtitle" color="error">
                -255Р | -15%
              </Typography>
            </Box>
          </Box>
        </CardActionArea>
      </Card>
    );
  };
}