import './App.css';
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Inventory from './components/Inventory';
import EditInventory from './components/EditInventory';
import Search from './components/Search';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Search />} />
        <Route exact path="/Inventory" element={<Inventory />} />
        <Route exact path="/Edit" element={<EditInventory />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
