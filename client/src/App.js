import logo from './logo.png';
import './App.css';
import Launches from './components/Launches';

function App() {
  return (
    <div className="App">
   <img
        src={logo}
        alt="Spacex"
        style={{ width: 300, display: "block", margin: "auto" }}
      />   
      <Launches/>
    </div>
  );
}

export default App;
