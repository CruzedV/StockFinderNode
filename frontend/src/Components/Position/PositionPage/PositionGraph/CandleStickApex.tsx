import React from 'react';
import Chart from 'react-apexcharts';
import { Box } from '@mui/material';
import { ApexProps } from '../../../../Types/Position/ApexProps';
import { ApexState } from '../../../../Types/Position/ApexState';
import { getCandles } from '../../../../API/getCandles';
import { ICandle } from '../../../../Interfaces/Positions/ICandle';


export class CandleStickApex extends React.Component<ApexProps, ApexState> {
  constructor(props:ApexProps) {
    super(props);
    this.state = {
      from: this.getYearAgo(new Date()),
      to: new Date(),
      options: {
        chart: {
          id: 'candlestick',
          foreColor: '#F4F4F4',
          fontFamily: 'Inter',
          zoom: {
            enabled: true,
            type: 'x',  
            autoScaleYaxis: true,  
          }
        },
        plotOptions: {
          candlestick: {
            colors: {
              upward: '#53DD6C',
              downward: '#DB324D'
            },
            wick: {
              useFillColor: true
            }
          }
        },
        tooltip: {
          enabled: true,
          style: {
            fontSize: '12px',
            fontFamily: 'Inter',
          },
        },
        title: {
          text: 'Показатели '+this.props.name,
          align: 'left'
        },
        xaxis: {
        }
      },
      series: [{
        data: [{}]
      }],
      }
    }
  getYearAgo(now: Date) {
    const yearAgo = new Date()
    yearAgo.setFullYear(now.getFullYear()-1)
    return yearAgo
  }
  async componentDidMount() {
    const res = await getCandles("api/assets/"+this.props.figi+"/candles", this.state.from, this.state.to)
    this.setState ({
      series: [{
        data: res.map((i:ICandle) => ({
          x: new Date(i.time).toLocaleDateString(),
          y: [
            i.open.units+(i.open.nano/Math.pow(10, 9)),
            i.high.units+(i.high.nano/Math.pow(10, 9)),
            i.low.units+(i.low.nano/Math.pow(10, 9)),
            i.close.units+(i.close.nano/Math.pow(10, 9))
          ]
        }))
      }],
      options: {
        title: {
          text: 'Показатели '+this.props.name,
          align: 'left'
        },
      }
    })
  }
  render() {
    return (
      <Box>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="candlestick"
        />
      </Box>
    )
  }
}
  
