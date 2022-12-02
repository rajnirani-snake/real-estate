import React from 'react'
import ContactHeader from '../../component/ContactHeader/ContactHeader';
import ContactUs from '../../component/ContactUs/ContactUs';
import Footer from '../../component/Footer/Footer';
import { Searchbar } from '../../component/Searchbar/Searchbar';

const Contact = () => {
  return (
    <div>
      <ContactHeader/>
      <Searchbar/>
    <ContactUs/>
    <Footer/>
    </div>
  )
}

export default Contact