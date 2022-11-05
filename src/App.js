import logo from './logo.svg';
import './App.css';

import Section from "./Zuri001/Section.js";
import Footer from "./Zuri001/Footer.js";
import SectionIcon from './Zuri001/SectionIcon';
import  { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Contact from './Zuri001/Pages/Contact';
import {Link} from 'react-router-dom'
import Section_comp from './Zuri001/Section_comp';

// import profile from "./Image/profile.jpeg"

function App() {
  return (
    <div className="">
      <Router>

      

       
      <Routes>
        
      {/* <Route path="/Contact" element={<Contact/>}/> */}
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/" element={ <Section_comp/>}/>

      


      </Routes>
        
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
