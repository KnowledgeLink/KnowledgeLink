import React from 'react'
import HeroVideo1 from '../assets/heroVideo.mp4'

const Home = ({smoothScroll}) => {
  return (
    <div id='Home' className="relative px-6 pt-14 lg:px-8 ">
      <video className="absolute top-20 left-0 right-0 h-[80%] w-full object-cover opacity-45 blur-sm" autoPlay muted loop >
    <source src={HeroVideo1} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
        
        <div className="relative mx-auto max-w-3xl z-10 py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="opacity-0 animate-slideIn text-balance text-5xl font-semibold tracking-tight drop-shadow-sm sm:drop-shadow-md text-gray-800 sm:text-6xl">
              Unlock Your Future with Knowledge<span className='text-primary'>Link</span>
            </h1>
            <p className="opacity-0 animate-slideIn mt-8 text-pretty text-lg font-medium drop-shadow-sm text-gray-700 sm:text-xl/8">
            Expert Guidance to Help You Secure Admission in Top Engineering, Medical, and Management Colleges.
            </p>

            <div className="opacity-0 animate-slideInUp mt-10 flex items-center justify-center gap-x-6">
              <div
              onClick={() => smoothScroll('services')}
                className="btn-primary transition-all cursor-pointer"
              >
                Start Your Journey
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Home