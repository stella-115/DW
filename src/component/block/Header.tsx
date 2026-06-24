// import React from 'react'

import { NavLink } from "react-router-dom"
import logo from "../../assets/img/png post 2.png"
import { useState } from "react"
import { MdClose } from "react-icons/md"
import { CiMenuFries } from "react-icons/ci"

const Header = () => {
     const [show, setShow] = useState<boolean | null>(null)

  const dropdown = () => {
    setShow(!show)
  }
  return (
    <div className="w-full h-18 flex justify-center bg-white items-center fixed">
        <div className="w-[90%] md:W-[90%] flex md:gap-70 gap-15 items-center ">
            <img src={logo} alt="Logo"  className="w-40"/>
            <div className="md:flex gap-10  hidden  ">

                

                    <NavLink to="/">
                    <h1 className="text-blue-900 text-[20px] font-bold cursor-pointer">
                    Home 
                </h1>

                    </NavLink>

                <NavLink to="/about">
                 <h1 className="text-blue-900 text-[20px] font-bold cursor-pointer">
                    About 
                </h1>
                     
                </NavLink>

                <NavLink to="/contact">
                  <h1 className="text-blue-900 text-[20px] font-bold cursor-pointer">
                    Contact Us 
                </h1>

                </NavLink>   
            </div>
             <div className="lg:hidden">

          { show ? 
            (
              <div className="text-[21px]  flex justify-center items-center " onClick={dropdown}>
                Menu<MdClose />
              </div> 
            )
            :
            (
              <div className=" flex justify-center items-center gap-1" onClick={dropdown}>
                Menu<CiMenuFries />
              </div>
            )
          }

      
          {
            show ?
            (
              <div className="w-40 h-70 absolute left-0  top-17.5 bg-white  rounded flex flex-col gap-8 p-5">
                <NavLink to="/" className=" text-blue-900 text-[22px] font-bold mt-5  ">
                  Home
                </NavLink>

                <NavLink to="/about" className=" text-blue-900 text-[22px] font-bold">
                    About
                </NavLink>


                <NavLink to="/contact" className=" text-blue-900 text-[22px] font-bold ">
                   Contact
                </NavLink>
              </div>
            )
            :
            null
          }
          </div>


        </div>

    </div>
  )
}

export default Header