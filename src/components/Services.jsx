import React from "react";
import { useNavigate } from "react-router-dom";

const servicesData = [
    {
        head : "Counselling Guidance",
        para : "At Knowledge Link Private Limited, we aim to simplify the college admissions journey",
        imgUrl : "/service1.jpg",
        id: "counselling"
    },
    {
        head : "OverSeas Admissions",
        para : "At Knowledge Link Private Limited, we aim to simplify the overseas admissions journey",
        imgUrl : "/service2.jpg",
        id : "overseas"
    },
    {
        head : "Online Crash Course",
        para : "We also provides the online crash course for entrance exams such as IIT and NEET",
        imgUrl : "/service3.jpg",
        id : "crashcourse"
    },
]

const Services = () => {
  const navigate = useNavigate();
  const handleNavigation = (id) => {
    navigate(`/${id}`)
  }

  return (
    <>
      <div id="services" className="py-11 sm:my-0 sm:pt-4 sm:pb-20 mx-auto px-6 lg:px-8">
        <h2 className="text-pretty text-4xl  text-center font-semibold tracking-tight text-gray-800 sm:text-5xl">
          Explore our <span className="text-primary">CAPABLE</span> Services
        </h2>
        <p className="mt-6 text-sm text-gray-600 text-center sm:text-lg/8 max-w-3xl text-pretty">
        Our suite of services is tailored to meet your unique needs, ensuring excellence and impactful results.
        </p>
      </div>

      <div className="px-6 lg:px-8 flex flex-col gap-11 mb-28 mx-auto">
        {servicesData.map((service,i) => (

 <div key={i} className="max-w-3xl flex hover:-translate-y-2 transition-all ease-in-out shadow-md hover:shadow-sm">
 <div
   className="w-40 h-auto flex-none bg-cover rounded-lg text-center overflow-hidden opacity-90"
   style={{
     backgroundImage: `url('${service.imgUrl}')`,
     backgroundSize: "cover", // Ensures the image covers the entire element
     backgroundRepeat: "no-repeat", // Prevents the image from repeating
     backgroundPosition: "center", // Centers the image
   }}
 ></div>
 <div className="rounded p-4 flex flex-col justify-between leading-normal">
   <div className="mb-8">
     <div className="text-gray-800 font-medium tracking-tighter text-2xl sm:text-3xl mb-2">
       {service.head}
     </div>
     <p className="text-gray-600 text-sm sm:text-base hidden sm:flex text-pretty">
       {service.para}
     </p>
   </div>
   <div className="flex items-center">
     <button onClick={() => handleNavigation(service.id)} className="btn-primary text-[0.92rem] tracking-tighter hover:bg-blue-600">
       Explore More <span aria-hidden="true">&rarr;</span>
     </button>
   </div>
 </div>
</div>
        ))}
      </div>
    </>
  );
};

export default Services;
