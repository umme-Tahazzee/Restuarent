import React from 'react';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner'
import {Link} from 'react-router-dom'


const  Room = () => {
  return (
  <Hero hero="roomsHero">
       <Banner tittle='Our Rooms' >
          <Link to='/' className='btn-primary'>
            Return Home
          </Link>
       </Banner>
  </Hero>
  )
}

export default  Room