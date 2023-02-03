import React from 'react';
import Chart from 'react-apexcharts';
import { Box } from '@mui/material';


export class CandleStickApex extends React.Component<{}, {options:any, series:any}> {
  constructor(props:any) {
    super(props);
    this.state = {
      options: {
        chart: {
          id: 'candlestick'
        },
        xaxis: {
          categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
        },
        plotOptions: {
          candlestick: {
            colors: {
              upward: '#53DD6C',
              downward: '#DB324D'
            }
          }
        },
        title: {
          text: 'Показатели ОФЗ 12454566534343',
          align: 'left'
        }
      },
      series: [{
        data: [{
          x: new Date(2016, 1, 1),
          y: [51.98, 56.29, 51.59, 53.85]
        },
        {
          x: new Date(2016, 1, 1),
          y: [51.98, 56.29, 51.59, 53.85]
        },
        {
          x: new Date(2016, 1, 1),
          y: [51.98, 56.29, 51.59, 53.85]
        },
        {
          x: new Date(2016, 1, 1),
          y: [51.98, 56.29, 51.59, 53.85]
        },
        {
          x: new Date(2016, 1, 1),
          y: [51.98, 56.29, 51.59, 53.85]
        },
        {
          x: new Date(2016, 1, 1),
          y: [51.98, 56.29, 51.59, 53.85]
        },
        {
          x: new Date(2016, 8, 1),
          y: [52.76, 57.35, 52.15, 57.03]
        }]
      }],
      }
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
  
