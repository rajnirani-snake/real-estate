import React from 'react'
import { PropertListHeader } from '../../component/PropertyListHeader/PropertListHeader'
import { Searchbar } from '../../component/Searchbar/Searchbar'
import { PropertyListing } from '../../component/PropertyListing/PropertyListing'
import ActionStart from '../../component/ActionStart/ActionStart'
import Footer from '../../component/Footer/Footer'

export const PropertyList = () => {
  return (
    <div>
        <PropertListHeader/>
        <Searchbar/>
        <PropertyListing/>
        <ActionStart/>
        <Footer/>
    </div>
  )
}
