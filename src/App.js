import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import BeerList from './components/BeerList';
import BeerDetailsRandom from './components/BeerDetailsRandom'
import BeerDetails from './components/BeerDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beerlist" element={<BeerList />} />
        <Route path="/randombeer/" element={<BeerDetailsRandom />} />
        <Route path="/:details" element={<BeerDetails />} />
      </Routes>
    </div>
  );
}

export default App;
