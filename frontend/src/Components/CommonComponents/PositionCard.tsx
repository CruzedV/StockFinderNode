import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { CardProps } from '../../Types/Cards/CardProps';
import { CardState } from '../../Types/Cards/CardState';

export class PositionCard extends React.Component<CardProps, CardState> {
  constructor(props:CardProps) {
    super(props)
    this.state ={
      isProfitable: false,
      profitPercentage: "-14%"
    }
  }
  componentDidMount(): void {
    
  }
  render () {
    return (
      <Card sx={{ 
        m: "2em auto 2em auto",
        maxWidth: "37.5em",
        maxHeight: "4em",
        borderRadius: "0.9em"
       }}>
        <Link to={this.props.figi}>
          <CardActionArea>
            <Box sx={{
              float: "left",
            }}>
              <CardMedia
                component="img"
                image={require ("../../static/minfinx160.png")}
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
                  {this.props.name}
                </Typography>
                <Typography variant="positionSubtitle" color="text.secondary">
                  {this.props.amount} шт
                </Typography>
              </Box>
              <Box sx={{
                textAlign: "center",
                float: "right",
                width: "40%",
              }}>
                <Typography color="text.secondary">
                  {this.props.price} {this.props.currency}
                </Typography>
                <Typography variant="positionSubtitle" color="error">
                  {this.props.profit} | {this.state.profitPercentage}
                </Typography>
              </Box>
            </Box>
          </CardActionArea>
        </Link>
      </Card>
    );
  };
}