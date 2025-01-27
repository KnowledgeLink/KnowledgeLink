import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { IoMdCall } from "react-icons/io";

const footerItems = [
    { name: IoMdCall , href: 'tel:+916397865406'},
    { name: TfiEmail, href: "mailto:support@knowledgelink.co.in" },
    { name: FaWhatsapp, href: "https://wa.me/916397865406?text=Hello!%20I%20would%20like%20to%20contact%20you." },
  ]  

const Footer = () => {
  return (
<footer className="bg-gray-100 rounded-lg shadow p-4 px-6 lg:px-8">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <div className="self-center text-3xl text-gray-800 font-semibold whitespace-nowrap">Knowledge<span className='text-primary'>Link</span></div>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm md:text-[1rem] font-medium text-gray-800 sm:mb-0">
                {footerItems.map((item,i) => (
                    <li key={i}>
                    <a href={item.href} target='_blank' className="hover:text-primary px-8 me-4 md:me-6"><item.name className='size-6' /></a>
                    </li>
                ))}
            </ul>
        </div>
        <hr className="my-6 border-gray-400 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center">© 2025 <a href="#" className="hover:underline">KnowledgeLink Pvt. Ltd</a>. All Rights Reserved.</span>
    </div>
</footer>


  )
}

export default Footer