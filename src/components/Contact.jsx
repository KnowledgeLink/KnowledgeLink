import React from 'react'
import { LiaFacebook } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { IoMdCall } from "react-icons/io";

const Contact = () => {
  return (
    <>
    <div id='Contact' className='sm:pt-28 pt-10 my-11 sm:my-0 mx-auto px-6 lg:px-8'>
        <h2 className="text-pretty text-4xl  text-center font-semibold tracking-tight text-gray-800 sm:text-5xl">
             We’d love to <span className='text-primary'>HEAR</span> from you!
            </h2>
            <p className="mt-6 text-sm text-gray-600 text-center sm:text-lg/8">
            Reach out to us for any inquiries or assistance. Our team is here to help and will respond as soon as possible.
            </p>
    </div>
    <div className="flex justify-center items-center flex-col sm:pt-16 pb-16 sm:pb-28">
    <div className="flex gap-4 text-4xl sm:text-6xl hover:text-blue-700 mb-6 text-gray-800 cursor-pointer">
         <IoMdCall />
         <a href="tel:+916397865406">6397865406</a>
        </div>

      <div className="flex gap-4 text-gray-800 mb-6">
      <a href="mailto:support@knowledgelink.co.in" target='_blank' className='text-2xl sm:text-4xl hover:text-primary hover:-translate-y-1 transition-all ease-in-out '><TfiEmail /></a>
      <a href="https://wa.me/916397865406?text=Hello!%20I%20would%20like%20to%20contact%20you." target='_blank' className='text-2xl sm:text-4xl hover:text-primary  hover:-translate-y-1 transition-all ease-in-out'><FaWhatsapp /></a>
      <a href="https://www.instagram.com/knowledgelink_pvtlmt/" target='_blank' className='text-2xl sm:text-4xl hover:text-primary  hover:-translate-y-1 transition-all ease-in-out'><FaInstagram /></a>
      <a href="https://www.facebook.com/profile.php?id=61572468903795&sk=grid" target='_blank' className='text-2xl sm:text-4xl hover:text-primary  hover:-translate-y-1 transition-all ease-in-out' ><LiaFacebook /></a>
      </div>
    </div>
    </>

  )
}

export default Contact