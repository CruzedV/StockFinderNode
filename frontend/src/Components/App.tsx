import React from 'react';
import './App.css';
import { GetPortfolio } from '../API/getPortfolio';
import { IInstrument } from '../Interfaces/IInstrument';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme';
import { Container, Box } from '@mui/material';
import { Navbar } from './Navbar/Navbar';
import { PortfolioPage } from './PortfolioPage/PortfolioPage'
import { BuyPage } from './BuyPage/BuyPage';
import { AvailablePage } from './AvailablePage/AvailablePage';
import { Routes, Route } from "react-router-dom";

class App extends React.Component<{}, {data: Array<IInstrument>}> {
  constructor(props:any){
    super(props);
    this.handleEvent = this.handleEvent.bind(this);
    this.state = {
      data: []
    }
  }

  async componentDidMount() {
    let res = await GetPortfolio('/api/user')
    this.setState({
      data: res
    })
  }

  handleEvent(){  
    console.log(this.props);  
  }  

  render () {
    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <Container maxWidth="xl" sx = {{
              height: "100%"
            }}>
            <Navbar/>
            <Box sx ={{
              backgroundColor: "secondary.main", 
              height: '100%',
              pb: "1em"
              }}>
              <Container maxWidth={false} sx={{
                maxWidth: "45em",
              }}>
                {/* Router */}
                <Routes>
                  <Route path="/portfolio" element={<PortfolioPage/>}/>
                  <Route path="/buy" element={<BuyPage/>}/>
                  <Route path="/ava" element={<AvailablePage/>}/>
                </Routes>
              </Container>
            </Box>
          </Container>
        </ThemeProvider>
      </React.Fragment>
    );
  }
  }
export default App;
