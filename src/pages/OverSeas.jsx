import React from 'react'
import Header from '../components/Header'
import CountryList from '../components/CountryList'
import Footer from '../components/Footer'
import HelperContact from '../components/helperContact'

const Overseas = () => {
  return (
    <div className=''>
    <Header />
    <div className=' sm:mt-28  pt-11 mb-6 mt-16 mx-auto px-6 lg:px-8'>
        <h2 className="text-pretty text-4xl  text-center font-semibold tracking-tight text-gray-800 sm:text-5xl max-w-4xl mx-auto">
        Start Your <span className='text-primary'>Medical Journey</span>  with Us – Globally! 
            </h2>
            <p className="mt-6 max-w-4xl mx-auto text-sm text-gray-600 text-center sm:text-lg/8">
            "Start your medical career globally with our trusted guidance and support for international admissions."
            </p>
            <p className="mt-12 max-w-4xl mx-auto text-sm text-gray-800 font-medium italic text-center sm:text-lg/8">
            *We offer professional overseas admission services for <span className='underline text-gray-900'>medical</span> colleges and universities in the following countries:
            </p>
    </div>
    <CountryList />
    <p className="text-gray-600 max-w-[88%] sm:max-w-4xl sm:mt-0  mt-6 mx-auto sm:text-lg text-sm mb-10 sm:mb-14 tracking-wide">For students dreaming of pursuing medical education abroad, Knowledge Link provides comprehensive support for overseas admissions. We partner with reputed international medical institutions to offer you seamless entry into world-class programs. Our services include guidance on application processes, visa assistance, and pre-departure orientation, making your transition to studying abroad as smooth as possible.</p>
    <HelperContact />
    <Footer />
    </div>
  )
}

export default Overseas