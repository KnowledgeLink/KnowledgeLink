import React from 'react'
import { IoMdCall } from 'react-icons/io'
import { TfiEmail } from 'react-icons/tfi'

const HelperContact = () => {
  return (
    <div className=" mx-auto sm:mt-0 mt-8 flex items-center justify-center flex-col mb-8 max-w-[90%]">
    <p className=" text-gray-800 sm:text-[1.2rem] text-sm tracking-tighter text-center mb-6">And Many more, For More information kindy Contact Us </p>
    <a href='tel:+916397865406' className=" text-gray-800 sm:text-[2rem] text-lg items-center tracking-tighter justify-center mb-3 mx-auto flex gap-2 hover:text-blue-700">
      <IoMdCall /> 
      6397865406
      </a>
    <a className=" hover:text-blue-700 text-gray-800 sm:text-[1.6rem] text-sm items-center tracking-tighter justify-center flex gap-2" href="mailto:support@knowledgelink.co.in" target='_blank'>
      <TfiEmail /> 
      support@knowledgelink.co.in
      </a>
  </div>
  )
}

export default HelperContact