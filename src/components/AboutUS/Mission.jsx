import React from 'react'

const Mission = () => {
    return (
        <div className='px-6 sm:px-8 mx-auto max-w-6xl mb-10 md:mb-28'>
            <div className="flex justify-between items-center sm:flex-row flex-col">
              <img className='hidden lg:block w-[30vw] max-w-96 rounded-lg max-h-72' src="/Mission.jpeg" alt="" />
            <div className=" flex flex-col gap-6">
                <p className='text-primary font-bold sm:text-xl text-lg tracking-wide'>Our Mission</p>
            <img className='lg:hidden w-[90vw] rounded-lg' src="/Mission.jpeg" alt="" />
                <h1 className='sm:text-3xl/10 text-xl  font-semibold text-gray-800 tracking-tighter'>Building Bridges to Academic Excellence</h1>
                <p className='sm:mt-6 sm:text-lg/8 text-[1rem]/8 text-gray-600 max-w-xl'>At Knowledge Link, our mission is to empower students with the resources, guidance, and confidence they need to achieve their academic dreams. We believe that education is not just a pathway to success but a transformative journey, and we are committed to making that journey as impactful and fulfilling as possible.</p>
              </div>
            </div>
        </div>
      )
}

export default Mission