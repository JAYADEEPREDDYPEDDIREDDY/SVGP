import './App.css'
import HomePage from './components/homePage';
import AboutPage from './components/aboutPage';
import CME from './components/cme';
import AdminLogin from './components/admin';
import {  Route,BrowserRouter,Routes } from "react-router-dom";
import CIVIL from './components/civil';
import MECH from './components/mech';
import EEE from './components/eee';
import ECE from './components/ece';
import PHARMACY from './components/pharmacy';
import CHEMICAL from './components/chem';
import BME from './components/bme';
import ScrollButton from './components/ScrollTop';
import Gallery from './components/gallery';



function App() {
 
  return (
    <body>
      
    <div className="App">

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path='/cme' element={<CME/>}/>
        <Route path='/civil' element={<CIVIL/>}/>
        <Route path='/mech' element={<MECH/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/pharmacy' element={<PHARMACY/>}/>
        <Route path='/eee' element={<EEE/>}/>
        <Route path='/ece' element={<ECE/>}/>
        <Route path='/bme' element={<BME/>}/>
        <Route path='/chem' element={<CHEMICAL/>}/>
        <Route path='/homePage' element={<HomePage/>}/>
        <Route path='/admin' element={<AdminLogin/>}>
         
        </Route>
      </Routes>
    </BrowserRouter>
    <ScrollButton/>
       </div>
      
    </body>
  );
}

export default App;
