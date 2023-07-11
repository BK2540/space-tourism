import React, { useRef, useState } from 'react'
import data from '../../data'

import './Technology.css'
import Navbar from '../Navbar/Navbar'

const Technology = () => {
  const [techNumber, setTechNumber] = useState(0)
  const navigation = useRef()

  function tabChange(e){
      setTechNumber(e.target.dataset.index)

      let children = navigation.current.children
    for (let index = 0; index < children.length; index++) {
      const child = children[index];
      child.classList.remove('active')
    }
    
    e.target.classList.add('active')
  }

  return (
    <div className="technology">
      <Navbar/>

      <div className="technology-intro">
        <span>03</span>
        <span>SPACE LAUNCH 101</span>
      </div>

      <div className="technology-container">
        {/* left side */}
        <div className="technology-container_l">

          <div ref={navigation} className="tech-nav">
            <span data-index={0} onClick={tabChange} className='tech-nav_dot active'>1</span>
            <span data-index={1} onClick={tabChange} className='tech-nav_dot'>2</span>
            <span data-index={2} onClick={tabChange} className='tech-nav_dot'>3</span>
          </div>

          <div className="tech-contents">
            <span>The technology...</span>
            <span className='tech-contents_title'>{data.technology[techNumber].name}</span>
            <span className='tech-contents_desc'>{data.technology[techNumber].description}</span>
          </div>
        </div>

        {/* right side */}
        <div className="technology-container_r">
          <img src={data.technology[techNumber].images} />
        </div>
      </div>
    </div>
  )
}

export default Technology