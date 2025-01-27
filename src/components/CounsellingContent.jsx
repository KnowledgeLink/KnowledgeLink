import React, { useState } from "react";
import EnggCounContent from "./EnggCounContent";
import MediCounContent from "./MediCounContent";
import MangCounContent from "./MangCounContent";
import HelperContact from "./HelperContact";
import { MdEngineering } from "react-icons/md";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { MdManageAccounts } from "react-icons/md";

const content = [
  {
    icon : MdEngineering ,
    head: "Engineering Colleges",
    para: "Personalized guidance for navigating engineering college admissions with confidence.",
    name: "engineering",
  },
  {
    icon : FaHandHoldingMedical ,
    head: "Medical Colleges",
    para: "Your trusted partner for medical college counseling and career guidance.",
    name: "medical",
  },
  {
    icon : MdManageAccounts ,
    head: "Management Colleges",
    para: "Navigating the complexities of management college admissions, one step at a time",
    name: "management",
  },
];

const CounsellingContent = () => {
  const [selected, setSelected] = useState("engineering");

  const handleClick = (id) => {
    setSelected(id);
  };

  const renderingblock = () => {
    if(selected === "engineering"){ return <EnggCounContent />}else if(selected ===
        "medical"){return <MediCounContent />}else if(selected === "management")
        {return <MangCounContent />}
  }

  return (
    <div className="px-6 sm:px-8 mb-12 mt-32 ">
      <div className="flex  gap-2 mx-auto">
        {content.map((item, i) => (
          <div
            onClick={() => handleClick(item.name)}
            className={` rounded-xl  sm:p-4 p-1 py-8 sm:py-12 mx-auto w-[29vw] transition-all ease-in-out ${selected === item.name ? "shadow-xl bg-slate-100 border -translate-y-1 sm:-translate-y-3" : "hover:-translate-y-2 shadow-md"}`}
            key={i}
          >
            <p className="sm:text-3xl w-full sm:font-semibold text-primary font-medium mb-2 sm:mb-5"><item.icon className="mx-auto" /></p>
            <h1 className={`md:text-3xl sm:text-2xl text-[0.9rem]/5 sm:font-semibold text-gray-800 font-medium text-center sm:mb-5`}>
              {item.head}
            </h1>
            <p className={`hidden lg:block sm:text-[1rem] text-gray-700 mb-6 text-sm mx-auto text-center tracking-tighter max-w-[90%] `}>
              {item.para}
            </p>
          </div>
        ))}
      </div>
       <div className="rounded-3xl mx-auto w-full pt-10 mt-2 sm:mt-10">
        <h1 className="max-w-[98%] mx-auto  text-center text-gray-800 sm:text-5xl text-3xl tracking-tighter font-medium sm:mb-8 mb-3">Our Top Featured <span className="text-primary">{selected.toUpperCase()}</span> Colleges</h1>
       {renderingblock()}
      </div> 
      <p className="text-gray-600 text-center sm:max-w-4xl sm:mt-0  mt-6 mx-auto sm:text-lg text-[0.9rem] mb-10 sm:mb-14 tracking-wide">Navigating the complexities of college admissions can be daunting. That’s where we step in. Whether you're aspiring to secure a spot in top engineering, medical, or management institutions in India, our tailored counseling and guidance services ensure you make informed decisions. From course selection to college applications, we’re with you every step of the way.</p>
      <HelperContact />
    </div>
  );
};

export default CounsellingContent;
