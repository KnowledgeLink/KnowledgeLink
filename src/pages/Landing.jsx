import React from 'react'
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Stats from '../components/Stats';
import Teams from '../components/Teams';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Home from '../components/Home';
import WhyChooseUs from '../components/AboutUS/WhyChooseUs';
import About from './About';
import HomeButton from '../components/HomeButton';
import WhatsApp from '../components/WhatsApp';
import TestimonialSection from '../components/TestimonialSection';

const Landing = () => {
    const smoothScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

  return (
    <div className='flex flex-col'>
    <Navbar smoothScroll={smoothScroll} />
    <HomeButton smoothScroll={smoothScroll} />
    <WhatsApp />
    <Home smoothScroll={smoothScroll}/>
    <Services />
    <WhyChooseUs />
    <Stats />
    <About />
    <Teams />
    <TestimonialSection />
    <Contact />
    <Footer />
  </div>
  )
}

export default Landing