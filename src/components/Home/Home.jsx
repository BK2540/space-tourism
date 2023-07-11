import React from 'react'

import './Home.css'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <Navbar/>

      <div className="home-container">
        {/* left side */}
          <div className="home-content">
            <p className='home-content-intro'>SO, YOU WANT TO TRAVEL TO</p>
            <h1 className='home-content-header'>SPACE</h1>
            <p className='home-content-desc'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
          </div>


        {/* right side */}
          <div className="home-explore">
            <Link to='/destination'  className='home-explore-btn'>
            <span>Explore</span>
            </Link>
            
          </div>
          </div>
      
    </div>
  )
}

export default Home