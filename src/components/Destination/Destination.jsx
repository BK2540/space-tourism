import React, { useRef, useState } from 'react'

import './Destination.css'
import data from '../../data'
import Navbar from '../Navbar/Navbar'
import moon from '../../assets/moon.png'

const Destination = () => {

  const [planetNumber, setPlanetNumber] = useState(0)
  const navigation = useRef()
  
  function tabChange(e) {
    setPlanetNumber(e.target.dataset.index)
    
    let children = navigation.current.children
    for (let index = 0; index < children.length; index++) {
      const child = children[index];
      child.classList.remove('active')
    }
    
    e.target.classList.add('active')
  }

  return (
    <div className='destinations'>
      <Navbar/>

      <div className="destination-container">

      <div className="destination-intro">
        <span>01</span>
        <span>Pick your destination</span>
      </div>

      {/* main */}
      <div className="destination-main">
        {/* left side */}
        <div className="destination-image">
          <img src={data.destinations[planetNumber].images} alt='moon'/>
        </div>

        {/* right side */}
        <div className="destination-contents">
          <div ref={navigation} className="destination-contents_menu">
            <span data-index={0} onClick={tabChange} className='d-menu active'>moon</span>
            <span data-index={1} onClick={tabChange} className='d-menu'>mars</span>
            <span data-index={2} onClick={tabChange} className='d-menu'>europa</span>
            <span data-index={3} onClick={tabChange} className='d-menu'>titan</span>
          </div>

          <div className="destination-contents_title">
            <span>{data.destinations[planetNumber].name}</span>
          </div>

          <div className="destination-contents_desc">
            <p>
            {data.destinations[planetNumber].description}
            </p>
          </div>

          <div className='line'/>

          <div className="destination-contents_details">
            <div className="destination-contents_distance">
              <span>AVG. DISTANCE</span>
              <span>{data.destinations[planetNumber].distance}</span>
            </div>
            <div className="destination-contents_time">
              <span>Est. travel time</span>
              <span>{data.destinations[planetNumber].travel}</span>
            </div>
          </div>
        </div>
      </div>
    </div>



</div>
  )
}

export default Destination