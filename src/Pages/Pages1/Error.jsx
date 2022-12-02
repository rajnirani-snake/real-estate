import React from 'react'
import { Error404 } from '../../component/Error404/Error404'
import ErrorHeader from '../../component/ErrorHeader/ErrorHeader'
import { Searchbar } from '../../component/Searchbar/Searchbar'
import Footer from '../../component/Footer/Footer'

export const Error = () => {
  return (
    <div>
        <ErrorHeader/>
        <Searchbar/>
        <Error404/>
        <Footer/>
    </div>
  )
}
