import logo from './logo.png';
import './App.css';
import Launches from './components/Launches';
import { BrowserRouter,Route,Routes} from "react-router-dom";
import Launch from "./components/Launch";

function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <img
        src={logo}
        alt="Spacex"
        style={{ width: 300, display: "block", margin: "auto" }}
      />  
      <Routes>
      <Route path="/" element={<Launches />} />
      <Route  path='/launch/:flight_number' element={<Launch/>}></Route>
      </Routes>

    </div>
      </BrowserRouter>
  );
}

export default App;
