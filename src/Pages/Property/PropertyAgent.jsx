import React from 'react'
import ActionStart from '../../component/ActionStart/ActionStart'
import { PropertyAgentHeader } from '../../component/PropertyAgentHeader/PropertyAgentHeader'
import { Searchbar } from '../../component/Searchbar/Searchbar'
import TeamStart from '../../component/TeamStart/TeamStart'
import Footer from '../../component/Footer/Footer'

export const PropertyAgent = () => {
  return (
    <div>
        <PropertyAgentHeader/>
        <Searchbar/>
        <TeamStart/>
        <ActionStart/>
        <Footer/>
       
    </div>
  )
}

