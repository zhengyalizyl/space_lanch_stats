import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
   <h1>Spacex</h1>
   <img
        src={logo}
        alt="Spacex"
        style={{ width: 300, display: "block", margin: "auto" }}
      />
    </div>
  );
}

export default App;
