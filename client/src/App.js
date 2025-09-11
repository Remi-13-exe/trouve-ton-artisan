import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ArtisanList from './pages/ArtisanList';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
    
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artisans" element={<ArtisanList />} />
      </Routes>
          
    <Footer />
    </Router>
  );
}

export default App;

