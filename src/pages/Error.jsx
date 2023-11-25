import React from "react";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import {Link} from 'react-router-dom'

const Error = () => {
  return( 
  <Hero>
              <Banner tittle="404" subTittle="Page not found">
                <Link to="/" className="btn-primary">Return Home
                </Link>
              </Banner>
  </Hero>
  );
};

export default Error;
