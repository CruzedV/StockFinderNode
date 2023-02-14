import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box, Grow } from '@mui/material';
import { Link } from 'react-router-dom';
import { CardProps } from '../../Types/Cards/CardProps';
import { CardState } from '../../Types/Cards/CardState';

export class PositionCard extends React.Component<CardProps, CardState> {
  constructor(props:CardProps) {
    super(props)
    this.state ={
      isProfitable: false,
      profitPercentage: 14
    }
  }
  componentDidMount(): void {
    this.setState({
      isProfitable: this.props.profit > 0 ? true : false,
      profitPercentage: (this.props.profit / this.props.price)*100
    })

  }
  render () {
    return (
      <Grow in={true}
      style={{ transformOrigin: '0 0 50%' }}
      {...(true ? { timeout: 2000 } : {})}
      >
        <Card sx={{ 
          m: "2em auto 2em auto",
          maxWidth: "37.5em",
          maxHeight: "4em",
          borderRadius: "0.9em"
        }}>
          <Link to={"/"+this.props.figi}>
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
                    {this.props.price.toFixed(2)} {this.props.currency}
                  </Typography>
                  <Typography variant="positionSubtitle" color={this.state.isProfitable? "success.main" : "error"}>
                    {this.props.profit} {this.props.currency} | {this.state.profitPercentage.toFixed(2)} %
                  </Typography>
                </Box>
              </Box>
            </CardActionArea>
          </Link>
        </Card>
      </Grow>
    );
  };
}