import React from 'react'

const Purpose = () => {
  return (
    <div className='px-6 sm:px-8 mx-auto max-w-6xl mb-16 md:mb-28'>
    <div className="flex justify-between items-center sm:flex-row flex-col">
    <div className=" flex flex-col gap-6">
        <p className='text-primary font-bold sm:text-xl text-lg tracking-wide'>Our Purpose</p>
    <img className='lg:hidden w-[90vw] rounded-lg' src="/purpose.jpg" alt="" />
        <h1 className='sm:text-3xl/8 text-xl  font-semibold text-gray-800 tracking-tighter'>Guiding students toward their dream</h1>
        <p className='sm:mt-6 sm:text-lg/8 text-[1rem]/8 text-gray-600 max-w-xl'>At KnowledgeLink, our purpose is to guide students and their families through one of the most crucial decisions of their lives—choosing the right path for higher education. We are dedicated to providing personalized guidance for admissions to engineering, medical, and management colleges.</p>
      </div>
      <img className='hidden lg:block w-[30vw] max-w-96 rounded-lg max-h-72'  src="/purpose.jpg" alt="" />
    </div>
</div>
  )
}

export default Purpose