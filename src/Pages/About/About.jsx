import React from 'react'
import ActionStart from '../../component/ActionStart/ActionStart'
import Footer from '../../component/Footer/Footer'
import { HeaderAbout } from '../../component/HeaderAbout/HeaderAbout'
import { PlaceToFind } from '../../component/PlaceToFind/PlaceToFind'
import { Searchbar } from '../../component/Searchbar/Searchbar'
import TeamStart from '../../component/TeamStart/TeamStart'

const About = () => {
  return (
   <div>
    <HeaderAbout/>
    <Searchbar/>
    <PlaceToFind/>
    <ActionStart/>
    <TeamStart/>
    <Footer/>
   </div>
  )
}

export default About