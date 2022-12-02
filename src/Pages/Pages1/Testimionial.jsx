import React from 'react'
import { Searchbar } from '../../component/Searchbar/Searchbar';
import TestimonialHeader from "../../component/TestimionialHeader/TestimionialHeader"
import TestimonialStart from '../../component/TestimonialStart/TestimonialStart';
import Footer from '../../component/Footer/Footer';

const Testimionial = () => {
  return (
    <div>
      <TestimonialHeader/>
      <Searchbar/>
      <TestimonialStart/>
      <Footer/>
     
    </div>
  )
}
export default Testimionial;
