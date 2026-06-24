// import React from 'react'
import team from "../../assets/img/Team.jpg"
import bis from "../../assets/img/Business.jpg"
import the from "../../assets/img/the.webp"
import lead from "../../assets/img/lead.jpg"
import { NavLink } from "react-router-dom"

const Program = () => {
  return (
    <div className="w-full min-h-150 flex justify-center bg-[#03031B] ">
        <div className="w-[90%] pb-10">
            <h1 className="font-bold md:text-[50px] text-[25px]  flex justify-center text-red-600">
                Signature  Programmes 
            </h1>

            <div className="mt-5 md:flex justify-between">
                <div className="md:w-120  md:h-100 border border-red-500 rounded-2xl pt-4 bg-[#f4dfdf]">
                    <div className="flex justify-center ">
                        <img src={team} alt="" className="md:w-100  w-60 rounded-2xl" />
                    </div>
                    <h1 className="text-[20px] font-bold flex justify-center mt-2">
                        Team Optimization Training
                    </h1>
                    <h1 className="md:text-[13px] text-[10px] mt-2 flex justify-center">
                        A transformational programme designed to improve <br/> collaboration, communication, and team productivity.
                    </h1>
                </div>

             <div className="md:w-120 mt-5 md:mt-0  md:h-100 border border-blue-500 rounded-2xl pt-4 bg-[#a3caf3]">
                    <div className="flex justify-center ">
                        <img src={the} alt="" className="md:w-100  w-60 rounded-2xl" />
                    </div>
                    <h1 className="text-[20px] font-bold flex justify-center mt-2">
                       The High-Performance Workforce Programme
                    </h1>
                    <h1 className="md:text-[13px] text-[10px] mt-2 flex justify-center">
                        Designed to help organizations improve employee <br/> productivity, accountability, and workplace effectiveness.
                    </h1>
                </div>
            </div>

            
            <div className="mt-5 md:flex justify-between">

                 <div className="md:w-120  mt-5 md:mt-0 md:h-100 border border-blue-500 rounded-2xl pt-4 bg-[#a3caf3]">
                    <div className="flex justify-center ">
                        <img src={lead} alt="" className="md:w-100  w-60  rounded-2xl" />
                    </div>
                    <h1 className="text-[20px] font-bold flex justify-center mt-2">
                       Leadership Catalyst Programme
                    </h1>
                    <h1 className="md:text-[13px] text-[10px] mt-2 flex justify-center">
                       A practical leadership development programme for  <br/> supervisors, managers, executives, and emerging leaders.
                    </h1>
                </div>
                 <div className="md:w-120  mt-5 md:mt-0 md:h-100 border border-red-500 rounded-2xl pt-4 bg-[#f4dfdf]">
                    <div className="flex justify-center ">
                        <img src={bis} alt="" className="md:w-100  w-60  rounded-2xl" />
                    </div>
                    <h1 className="text-[20px] font-bold flex justify-center mt-2">
                        Business Conclave
                    </h1>
                    <h1 className="md:text-[13px] text-[10px] mt-2 flex justify-center">
                       A training intervention focused on raising student  <br/> entrepreneurs across higher institutions.
                    </h1>
                </div>
                

               
            </div>
            <NavLink to="/about">
                 <button className="my-7 w-55 h-12 bg-red-600 text-white font-bold text-[18px] rounded-[7px] hover:bg-red-500">
                Learn More About Us
            </button>

            </NavLink>
           


        </div>
         
    </div>
  )
}

export default Program