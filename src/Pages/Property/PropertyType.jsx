import React from 'react'
import Category from '../../component/Category/Category';
import {PropertyTypeHeader} from '../../component/PropertyTypeHeader/PropertyTypeHeader';
import { Searchbar } from '../../component/Searchbar/Searchbar';
import Footer from '../../component/Footer/Footer';

export const PropertyType = () => {
  return (
    <div>
        <PropertyTypeHeader/>
        <Searchbar/>
        <Category/>
        <Footer/>
    

    </div>
  )
}
