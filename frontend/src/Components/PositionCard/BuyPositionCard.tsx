import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box, Grow } from '@mui/material';
import { Link } from 'react-router-dom';
import { BuyCardProps } from '../../Types/Cards/BuyCardProps';
import { BuyCardState } from '../../Types/Cards/BuyCardState';

export class BuyPositionCard extends React.Component<BuyCardProps, BuyCardState> {
  constructor(props:BuyCardProps) {
    super(props)
    this.state ={
      isProfitable: false,
      profitPercentage: 0,
      price: 0,
      currency: "",
      profit: 0,
      ticker: "",
    }
  }
  componentDidMount(): void {
    this.setState({
      isProfitable: false,
      profitPercentage: 0,
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
          <Link to={"/"+this.props.uid}>
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
                  width: "50%",
                }}>
                  <Typography color="text.secondary">
                    {this.props.name.slice(0, 24)+"..."}
                  </Typography>
                  <Typography variant="positionSubtitle" color="text.secondary">
                    {this.state.ticker} шт
                  </Typography>
                </Box>
                <Box sx={{
                  textAlign: "center",
                  float: "right",
                  width: "40%",
                }}>
                  <Typography color="text.secondary">
                    {this.state.price.toFixed(2)} {this.state.currency}
                  </Typography>
                  <Typography variant="positionSubtitle" color={this.state.isProfitable? "success.main" : "error"}>
                    {this.state.profit} {this.state.currency} | {this.state.profitPercentage.toFixed(2)} %
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