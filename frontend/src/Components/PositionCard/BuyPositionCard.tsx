import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box, Grow } from '@mui/material';
import { Link } from 'react-router-dom';
import { BuyCardProps } from '../../Types/Cards/BuyCardProps';
import { BuyCardState } from '../../Types/Cards/BuyCardState';
import { getLastPrice } from '../../API/getLastPrice';

export class BuyPositionCard extends React.Component<BuyCardProps, BuyCardState> {
  constructor(props:BuyCardProps) {
    const params = new URLSearchParams(window.location.search)
    super(props);
    this.state = {
      lastPrice: 0,
      instrumentType: this.props.instrumentType? "" : params.get("type")!,
    } 
  }
  async componentDidMount() {
    const res = await getLastPrice("/api/assets/"+this.props.figi+"/lastprice")
    this.setState ({
      lastPrice: ((this.props.instrumentType === "bond") || (this.state.instrumentType === "bonds")) ? Math.round(res*100)/10 : res,
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
          <Link to={"/position/"+this.props.figi}>
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
                  <Typography noWrap={true} color="text.secondary">
                    {this.props.name}
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
                  <Typography color="text.secondary" noWrap={true}>
                    {this.state.lastPrice} {this.props.currency ? this.props.currency : "rub"}
                  </Typography>
                  <Typography variant="positionSubtitle" color={this.props.isSellAvailable? "success.main" : "error"}>
                    Продажа
                  </Typography>
                  <Typography variant="positionSubtitle" color="text.secondary">
                     |  
                  </Typography>
                  <Typography variant="positionSubtitle" color={this.props.isBuyAvailable? "success.main" : "error"}>
                    Покупка
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