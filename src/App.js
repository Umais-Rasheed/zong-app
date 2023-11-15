import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Section from './components/Section';
import CardSlides from './components/CardSlides';
import Artical from './components/Artical';
import Footer from './components/Footer';
import Business from './components/Business';
import Prepaid from './components/Prepaid';
import Postpaid from './components/Postpaid';
import Device from './components/Device';
import Interzong from './components/Interzong';
import Onlinebook from './components/Onlinebook';

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar is displayed on all pages */}
      <Routes>
        <Route path="/home" element={<>
          <Slider />
          <Section />
          <CardSlides />
          <Artical />
          <Footer />
        </>} />
        <Route path="/Prepaid" element={<>
          <Prepaid />
          <Footer />
        </>} />
        <Route path="/Postpad" element={<>
          <Postpaid />
          <Footer />
        </>} />
        <Route path="/Business" element={<>
          <Business />
          <Footer />
        </>} />
        <Route path="/Devices" element={<>
          <Device />
          <Footer />
        </>} />
        <Route path="/interzong" element={<>
          <Interzong />
          <Footer />
        </>} />
        <Route path="/Onlineform" element={<>
          <Onlinebook />
          <Footer />
        </>} />
      </Routes>
    </Router>
  );
}

export default App;
