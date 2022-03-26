import './App.css';
import {Route, HashRouter, Routes} from 'react-router-dom'
import Inventory from './components/Inventory';
import EditInventory from './components/EditInventory';
import Search from './components/Search';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <HashRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Search />} />
        <Route exact path="/Inventory" element={<Inventory />} />
        <Route exact path="/Edit" element={<EditInventory />} />
      </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
