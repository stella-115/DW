// import React from 'react'

import cor from "../../assets/cor.jpg"


const Vission = () => {
  return (
    <div>
         <div className="w-full min-h-screen flex justify-center">
            <div className="w-[90%] md:flex justify-between items-center">
              <div className="">
                <h1 className="text-blue-800 md:text-[40px] text-[30px]  font-bold mt-5 md:mt-0">
                  Our Vision
                </h1>
                <h1 className="text-blue-800 md:text-[17px] text-[15px] font-medium ">
                  To become Africa's leading corporate training and workforce  <br/> development partner, recognized for transforming people, <br/>teams, and organizations.
                </h1>

                <h1 className="text-blue-800 md:text-[40px] text-[30px] font-bold mt-5">
                  Our Mission
                </h1>
                <h1 className="text-blue-800 md:text-[17px] text-[15px] font-medium">
                 To empower organizations and professionals with practical <br/>knowledge, transformational training, and performance-<br/>driven solutions that improve results and create lasting impact.
                </h1>
              </div>

              <div>
                <img src={cor} alt="" className="w-100 h-80 rounded-2xl mt-10 md:mt-0 "/>
              </div>

            </div>

          </div>
         
    </div>
  )
}

export default Vission