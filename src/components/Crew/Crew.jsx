import React, { useState, useRef } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import data from '../../data';

import './Crew.css'

const Crew = () => {

  const [crewNumber, setCrewNumber] = useState(0)
  const navigation = useRef()

  function tabChange(e) {
    setCrewNumber(e.target.dataset.index)

    let children = navigation.current.children
    for (let index = 0; index < children.length; index++) {
      const child = children[index];
      child.classList.remove('active')
    }
    
    e.target.classList.add('active')
  }

  return (
    <div className="crew">
      <Navbar/>

<div className="crew-container">

      {/* left side */}
      <div className="crew-container_left">
      <div className="crew-intro">
        <span>02</span>
        <span>Meet your crew</span>
      </div>

      <div className="crew-contents">
        <div className="crew-contents_job">
          {data.crew[crewNumber].role}
        </div>
        <div className="crew-contents_name">
          {data.crew[crewNumber].name}
        </div>
        <div className="crew-contents_desc">
          {data.crew[crewNumber].bio}
        </div>

      </div>

      <div ref={navigation} className="crew-nav">
        <div data-index={0} onClick={tabChange} className='dot active'/>
        <div data-index={1} onClick={tabChange}className='dot'/>
        <div data-index={2} onClick={tabChange} className='dot'/>
        <div data-index={3} onClick={tabChange} className='dot'/>
      </div>
      </div>
      

      {/* right side */}

      <div className="crew-image">
        <img src={data.crew[crewNumber].images}/>
      </div>


      </div>
    </div>
    
  )
}

export default Crew