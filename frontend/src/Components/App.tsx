import logo from '../resources/logo.svg';
import './App.css';
import { GetPortfolio } from '../API/getPortfolio';
import { IInstrument } from '../Interfaces/IInstrument';

function App() {
  const data = GetPortfolio('/api/user');
  return (
    <div className="App">
      <header className="App-header">      
        <img src={logo} className="App-logo" alt="logo"/>
      </header>
        <ul>
          {data.map((i:IInstrument) => (
            <li key={i.figi}>{i.quanity}</li>
          ))}
        </ul>
    </div>
  );
  }
export default App;
