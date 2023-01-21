import logo from '../resources/logo.svg';
import './App.css';
import { GetPortfolio } from '../API/getPortfolio';

function App() {
  const data = GetPortfolio('/api/user');
  return (
    <div className="App">
      <header className="App-header">      
        <img src={logo} className="App-logo" alt="logo"/>
      </header>
        <ul>
          {data.map((i:any) => (
            <li key={i.figi}>{i.instrumnetType}</li>
          ))}
        </ul>
    </div>
  );
  }
export default App;
