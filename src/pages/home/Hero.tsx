// import React from 'react'

import { NavLink } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter"
import hero from "../../assets/img/hero.jpg"

const Hero = () => {

const [text] = useTypewriter ({
    words:['Improve Productivity','Strengthen leadership', 'Build Effective teams'],
    loop: 0,
    typeSpeed:120,
    delaySpeed:150,
});

  return (
    <div className="w-full min-h-screen bg-blue-950 flex justify-center  bg-center bg-cover pt-40">
    <div className="w-[90%] ">
      <div className="md:flex gap-20">
        <div className=" w-160">
           <div className="text-white font-bold md:text-[60px] text-[25px] ">
            Helping Organization <br/> <span> {text} </span> <br/>
            
            <NavLink to="/contact">
               <button className="w-35 h-12 border-white border-2 text-white text-[20px] rounded-[7px] mt-7 md:mt:0 hover:bg-white hover:text-blue-800 " >
            Contact Us
        </button>
            </NavLink> 
        </div>
        

        </div> 

        <div>
          <img src={hero} alt="" className="md:w-100 w-80 md:h-90 h-70 my-10 md:my:0 rounded-[10px] "/>
        </div>

      </div>
       
       
           

    </div>
    </div>
  )
}

export default Hero