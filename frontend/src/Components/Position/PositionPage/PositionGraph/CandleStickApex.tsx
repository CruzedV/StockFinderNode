import React from 'react';
import Chart from 'react-apexcharts';
import { Box } from '@mui/material';


export class CandleStickApex extends React.Component<{}, {options:any, series:any}> {
  constructor(props:any) {
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
          text: 'Показатели ОФЗ 12454566534343',
          align: 'left'
        }
      },
      series: [{
        data: [{
          x: 2016,
          y: [51.98, 56.29, 51.59, 53.85]
        },
        {
          x: 2017,
          y: [51.98, 56.29, 51.59, 53.85]
        },
        {
          x: 2018,
          y: [51.98, 56.29, 51.59, 53.85]
        },
        {
          x: 2019,
          y: [51.98, 56.29, 51.59, 53.85]
        },
        {
          x: 2020,
          y: [51.98, 56.29, 51.59, 53.85]
        },
        {
          x: 2021,
          y: [51.98, 56.29, 51.59, 53.85]
        },
        {
          x: 2022,
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
  
