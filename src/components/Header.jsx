import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { IoMdCall } from "react-icons/io";
import { Link } from 'react-router-dom';
import { BsArrowLeftCircle } from "react-icons/bs";


const navigationIcon = [
    {icon : <IoMdCall />, href : "tel:+916397865406"},
    {icon : <FaWhatsapp />, href : "https://wa.me/916397865406?text=Hello!%20I%20would%20like%20to%20contact%20you."},
    {icon : <TfiEmail />, href : "mailto:support@knowledgelink.co.in"},
]

const Header = () => {
  return (
    <>
    <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between px-6 py-4 lg:px-8 shadow-md">
          <div className="flex lg:flex-1  lg:items-center">
            <div  className="sm:ml-1.5 ml-0">
              <Link to={"/"} ><BsArrowLeftCircle className='text-2xl sm:text-3xl font-extrabold text-gray-800'/> </Link>
            </div>
          </div>

          <div className="flex sm:gap-x-6 gap-x-3 justify-center items-center">
            {navigationIcon.map((item) => (
              <a key={item.icon} target='_blank' href={item.href} className="text-2xl sm:text-3xl hover:text-primary  hover:-translate-y-1 transition-all ease-in-out">
                {item.icon}
              </a>
            ))}
          </div>
          </nav>
         </header>
          </>
  )
}

export default Header