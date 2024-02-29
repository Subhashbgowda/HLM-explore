import './App.css';
import { BrowserRouter as Router, Routes, Route }from 'react-router-dom';
import Home from './components/home';
import Header from './components/header';
import Footer from './components/footer';
import ServicesPage from './components/services';
import Contact from './components/contact';
function App() {
  return (
    <Router>
      <div>
        
        <Header/>
        <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/services" element={<ServicesPage/>} />
         <Route path="/contact" element={<Contact/>} />




        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
