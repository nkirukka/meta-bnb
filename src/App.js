import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home, PlacesToStay, Nfts, Community } from './pages';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NoMatch from './pages/NoMatch';
import OverlayWallet from './components/OverlayWallet';


function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/places-to-stay' element={<PlacesToStay />} />
        <Route path='/nfts' element={<Nfts />} />
        <Route path='/community' element={<Community />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>

      <Footer />
      <OverlayWallet/>
    </div>
  );
}

export default App;
