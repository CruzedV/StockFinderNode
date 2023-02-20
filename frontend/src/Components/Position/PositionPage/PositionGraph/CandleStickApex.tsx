import React from 'react';
import Chart from 'react-apexcharts';
import { Box } from '@mui/material';
import { ApexProps } from '../../../../Types/Position/ApexProps';
import { ApexState } from '../../../../Types/Position/ApexState';
import { getCandles } from '../../../../API/getCandles';


export class CandleStickApex extends React.Component<ApexProps, ApexState> {
  constructor(props:ApexProps) {
    super(props);
    this.state = {
      options: {
        chart: {
          id: 'candlestick',
          foreColor: '#F4F4F4',
          fontFamily: 'Inter',
        },
        xaxis: {
          categories: [2016, 2017, 2018, 2019, 2020, 2021, 2022]
        },
        plotOptions: {
          candlestick: {
            colors: {
              upward: '#53DD6C',
              downward: '#DB324D'
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
        }
      },
      series: [{
        data: []
      }],
      }
    }
  async componentDidMount() {
    const res = await getCandles("candles")
    this.setState ({
      series: [{
        data: res.data
      }]
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
  
