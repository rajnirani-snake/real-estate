import React from 'react'
import Category from '../../component/Category/Category';
import Header from '../../component/Navbar/Header/Header';
import { PlaceToFind } from '../../component/PlaceToFind/PlaceToFind';
import { Searchbar } from '../../component/Searchbar/Searchbar';
import {PropertyListing} from '../../component/PropertyListing/PropertyListing';
import ActionStart from '../../component/ActionStart/ActionStart';
import TeamStart from '../../component/TeamStart/TeamStart';
import TestimonialStart from '../../component/TestimonialStart/TestimonialStart';
import Footer from '../../component/Footer/Footer';



export const Home = () => {
  return (
    <div>
    <Header/>
    <Searchbar/>
    <Category/>
    <PlaceToFind/>
    <PropertyListing/>
    <ActionStart/>
    <TeamStart/>
    <TestimonialStart/>
    <Footer/>
  

    </div>
  )
}

export default Home;
