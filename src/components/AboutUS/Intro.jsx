import React from 'react'

const Intro = () => {
  return (
    <div className='px-6 sm:px-8 mx-auto max-w-6xl mb-16 md:mb-28'>
        <div className="flex justify-between items-center sm:flex-row flex-col">
        <div className=" flex flex-col gap-6">
            <p className='text-primary font-bold sm:text-xl text-lg tracking-wide'>About Us</p>
        <img className='lg:hidden w-[90vw] rounded-lg' src="/About.jpeg" alt="" />
            <h1 className='sm:text-3xl/8 text-xl  font-semibold text-gray-800 tracking-tighter'>Welcome to KnowledgeLink Pvt Ltd</h1>
            <p className='sm:mt-6 sm:text-lg/8 text-[1rem]/8 text-gray-600 max-w-xl'>your trusted partner in education and career guidance. At Knowledge Link, we understand that every student’s journey is unique, and we are dedicated to empowering individuals to achieve their academic and professional aspirations.</p>
          </div>
          <img className='hidden lg:block w-[30vw] max-w-96 rounded-lg max-h-72' src="/About.jpeg" alt="" />
        </div>
    </div>
  )
}

export default Intro