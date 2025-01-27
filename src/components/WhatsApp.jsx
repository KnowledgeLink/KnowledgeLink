import React from 'react'
import { MdOutlineWhatsapp } from "react-icons/md";

const WhatsApp = () => {
 return (
     <a href="https://wa.me/916397865406?text=Hello!%20I%20would%20like%20to%20contact%20you." className={`text-4xl bg-green-500 rounded-xl p-2 fixed bottom-6 right-6 text-white z-50`}>
        <a ><MdOutlineWhatsapp /></a>
     </a>
   )
}

export default WhatsApp