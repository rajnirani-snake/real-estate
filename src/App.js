import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import { Property } from './Pages/Property/Property';
import Contact from './Pages/Contact/Contact';
import { PropertyList } from './Pages/Property/PropertyList';
import { PropertyType } from './Pages/Property/PropertyType';
import { PropertyAgent } from './Pages/Property/PropertyAgent';
// import  Pages1  from './Pages/Pages1/Pages1';
import  Testimionial  from "./Pages/Pages1/Testimionial";
import { Error } from './Pages/Pages1/Error';


const App = () => {
  return (
    <div>
        <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Property" element={<Property/>}/>
      <Route path="/PropertyList" element={<PropertyList/>}/>
      <Route path="/PropertyType" element={<PropertyType/>}/>
      <Route path="/PropertyAgent" element={<PropertyAgent/>}/>
      {/* <Route path="/Pages1" element={ß<Pages1/>}/> */}
      <Route path='/Testimonial' element={<Testimionial/>} ></Route>
      <Route path="/Error" element={<Error/>}/>
      <Route path="/Contact" element={<Contact/>}/>
    </Routes>
    </div>
  )
}

export default App