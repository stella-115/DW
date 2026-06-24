// import React from 'react'
import ld from "../../assets/img/LD.jpg"
import we from "../../assets/img/W.jpg"
import tb from "../../assets/img/TB.jpg"
import cs from "../../assets/img/CS.jpg"
import cse from "../../assets/img/CSE.jpg"
import sd from "../../assets/img/SD.jpg"
import ec from "../../assets/img/EBC.jpg"
import sr from "../../assets/img/SRC.jpg"
import { NavLink } from "react-router-dom"

const Cards = () => {
  return (
    <div className="w-full md:h-230 h-750 bg-[#04040E] flex justify-center">
      <div className="md:w-[90%] w-[75%]">
        <h1 className="font-bold md:text-[50px] text-[35px]  flex justify-center text-white">
        Our Training Services

        </h1>
        <div>
          <div className=" md:flex justify-between mt-10">
             <div className="w-60 h-80 rounded-2xl">
            <img src={ld} alt="" className="w-60 rounded-2xl"/>
            <h1 className="mt-2 font-bold text-[20px]">
              Leadership Development
            </h1>
            <NavLink to="/contact">
              <button className="w-30 h-10 border-2 border-gray-700  rounded-[7px] text-gray-700 font-bold text-[17px] my-3 hover:bg-gray-700 hover:text-white">
              Get in touch 
            </button>
            </NavLink>
            
          </div>
          <div className="w-60 h-70 rounded-2xl mt-5 md:mt-0">
            <img src={we} alt="" className="w-60 rounded-2xl"/>
            <h1 className="mt-2 font-bold text-[20px]">
             Workplace Effectiveness
            </h1>
              <NavLink to="/contact">
              <button className="w-30 h-10 border-2 border-gray-700  rounded-[7px] text-gray-700 font-bold text-[17px] my-3 hover:bg-gray-700 hover:text-white">
              Get in touch 
            </button>
            </NavLink>
          </div>
          <div className="w-60 h-70 rounded-2xl mt-15 md:mt-0">
            <img src={tb} alt="" className="w-60 rounded-2xl"/>
            <h1 className="mt-2 font-bold text-[20px]">
              Team Building
            </h1>
              <NavLink to="/contact">
              <button className="w-30 h-10 border-2 border-gray-700  rounded-[7px] text-gray-700 font-bold text-[17px] my-3 hover:bg-gray-700 hover:text-white">
              Get in touch 
            </button>
            </NavLink>
          </div>
          <div className="w-60 h-70 rounded-2xl mt-15 md:mt-0">
            <img src={cs} alt="" className="w-60 rounded-2xl"/>
            <h1 className="mt-2 font-bold text-[20px]">
             Communication Skills
            </h1>
              <NavLink to="/contact">
              <button className="w-30 h-10 border-2 border-gray-700  rounded-[7px] text-gray-700 font-bold text-[17px] my-3 hover:bg-gray-700 hover:text-white">
              Get in touch 
            </button>
            </NavLink>
          </div>

          </div>

          <div className=" md:flex justify-between mt-15">
             <div className="w-60 h-70 rounded-2xl">
            <img src={cse} alt="" className="w-60 h-60 rounded-2xl"/>
            <h1 className="mt-2 font-bold text-[20px]">
              Customer Service Excellence
            </h1>  <NavLink to="/contact">
              <button className="w-30 h-10 border-2 border-gray-700  rounded-[7px] text-gray-700 font-bold text-[17px] my-3 hover:bg-gray-700 hover:text-white">
              Get in touch 
            </button>
            </NavLink>
          </div>
          <div className="w-60 h-70 rounded-2xl mt-25 md:mt-0">
            <img src={sd} alt="" className="w-60 h-60 rounded-2xl"/>
            <h1 className="mt-2 font-bold text-[20px]">
             Startup Development
            </h1>
              <NavLink to="/contact">
              <button className="w-30 h-10 border-2 border-gray-700  rounded-[7px] text-gray-700 font-bold text-[17px] md:mt-11 mt-3 hover:bg-gray-700 hover:text-white">
              Get in touch 
            </button>
            </NavLink>
          </div>
          <div className="w-60 h-70 rounded-2xl mt-18 md:mt-0">
            <img src={ec} alt="" className="w-60 h-60 rounded-2xl"/>
            <h1 className="mt-2 font-bold text-[20px]">
              Entrepreneur Capacity Building
            </h1>
              <NavLink to="/contact">
              <button className="w-30 h-10 border-2 border-gray-700  rounded-[7px] text-gray-700 font-bold text-[17px] my-3 hover:bg-gray-700 hover:text-white">
              Get in touch 
            </button>
            </NavLink>
          </div>
          <div className="w-60 h-70 rounded-2xl mt-25 md:mt-0">
            <img src={sr} alt="" className="w-60 h-60 rounded-2xl"/>
            <h1 className="mt-2 font-bold text-[20px]">
             Staff Retreats and Conferences
            </h1>
              <NavLink to="/contact">
              <button className="w-30 h-10 border-2 border-gray-700  rounded-[7px] text-gray-700 font-bold text-[17px] my-3 hover:bg-gray-700 hover:text-white">
              Get in touch 
            </button>
            </NavLink>
          </div>

          </div>
         

           
        </div>
      </div>

    </div>
  )
}

export default Cards