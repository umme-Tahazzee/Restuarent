import React from 'react'

export default function Banner({children, tittle, subTittle}) {
  return (
    
    <div className='banner'>
          <h1>{tittle}</h1>
          <div></div>
          <p>{subTittle}</p>
          {children}
          
    </div>
  )
}
