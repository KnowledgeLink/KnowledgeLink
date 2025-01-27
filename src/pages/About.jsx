import React from 'react'
import Intro from '../components/AboutUS/Intro'
import Mission from '../components/AboutUS/Mission'
import Purpose from '../components/AboutUS/Purpose'
const About = () => {
  return (
    <div id="about" className='sm:px-8 px-6'>
    <Intro />
    <Mission />
    <Purpose />
    </div>
  )
}

export default About