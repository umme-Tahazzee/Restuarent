import React from 'react';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import { Link } from 'react-router-dom';
 import Services from '../Components/Services';

export default function Home() {
  return (
    <>
    <Hero  hero="defaultHero" >
        <Banner tittle="Luxurious Room" subTittle='Dulex room Starting at $255'>
              <Link to="/room" className='btn-primary'>Our Room
              </Link>
        </Banner>
     
      </Hero>
      <Services/>
      </>
  )
    
}
