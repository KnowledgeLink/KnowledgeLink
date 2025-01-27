import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const CrashCourse = () => {
  return (
    <>    
    <Header />
    <div>
    <h1 className='sm:text-6xl sm:h-[92vh] h-[70vh] mx-auto text-4xl text-slate-800 font-semibold flex items-center justify-center tracking-tighter max-w-3xl'>Launching Soon..!</h1>
    </div>
    <p className="text-gray-600 max-w-[88%] sm:max-w-4xl sm:mt-0  mt-6 mx-auto sm:text-lg text-sm mb-10 sm:mb-14 tracking-wide">Success in competitive exams like IIT-JEE and NEET requires more than hard work—it demands the right strategy. Our meticulously designed online crash courses equip students with the knowledge, skills, and confidence to excel. With expert faculty, comprehensive study materials, and interactive sessions, we ensure our students are fully prepared to tackle these critical exams.</p>
    <Footer />
    </>   
  )
}
export default CrashCourse