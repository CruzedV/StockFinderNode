import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme';
import { Container, Box } from '@mui/material';
import { Routes, Route } from "react-router-dom";
import { Navbar } from './Navbar/Navbar';
import { PortfolioPage } from './PortfolioPage/PortfolioPage'
import { BuyPage } from './BuyPage/BuyPage';
import { SettingsPage } from './SettingsPage/SettingsPage';
import { PositionPage } from './Position/PositionPage/PositionPage';
import { PositionSellPage } from './Position/PositionSellPage/PositionSellPage';
import { PositionBuyPage } from './Position/PositionBuyPage/PositionBuyPage';

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <Container maxWidth="xl" sx ={{
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
                  <Route path="/" element={<PortfolioPage/>}/>
                  <Route path="/buy" element={<BuyPage/>}/>
                  <Route path="/settings" element={<SettingsPage/>}/>
                  <Route path="position" element={<PositionPage/>}/>
                  <Route path="position/buy" element={<PositionBuyPage/>}/>
                  <Route path="position/sell" element={<PositionSellPage/>}/>
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
