import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box, Grow } from '@mui/material';
import { Link } from 'react-router-dom';
import { BuyCardProps } from '../../Types/Cards/BuyCardProps';
import { BuyCardState } from '../../Types/Cards/BuyCardState';

export class BuyPositionCard extends React.Component<BuyCardProps, BuyCardState> {
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
                  width: "50%",
                }}>
                  <Typography color="text.secondary">
                    {this.props.name.slice(0, 24)+"..."}
                  </Typography>
                  <Typography variant="positionSubtitle" color="text.secondary">
                    {this.props.ticker}
                  </Typography>
                </Box>
                <Box sx={{
                  textAlign: "center",
                  float: "right",
                  width: "40%",
                }}>
                  <Typography color="text.secondary">
                    {this.props.nominal.toFixed(2)} {this.props.currency}
                  </Typography>
                  <Typography variant="positionSubtitle" color={this.props.isDividend? "success.main" : "error"}>
                    Dividend
                  </Typography>
                  <Typography variant="positionSubtitle" color="text.secondary">
                     |   
                  </Typography>
                  <Typography variant="positionSubtitle" color={this.props.isSellAvailable? "success.main" : "error"}>
                    Sell 
                  </Typography>
                  <Typography variant="positionSubtitle" color="text.secondary">
                     |  
                  </Typography>
                  <Typography variant="positionSubtitle" color={this.props.isBuyAvailable? "success.main" : "error"}>
                    Buy
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