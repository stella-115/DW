// import React from 'react'

import dan from "../../assets/img/IMG_1391.JPG (1).jpeg"

const Meet = () => {
  return (
    <div className="w-full min-h-screen flex justify-center bg-[#04040D] pb-10">
        <div className="w-[90%] ">
            <h1 className="md:text-[50px] text-[25px] text-white mt-5 md:mt-0 font-bold">
                Meet <span className="text-red-600">
                    the Executive
                    </span> Lead
            </h1>

            <div className="md:flex gap-10">
                <div>
                    <img src={dan} alt="" className="md:w-130 md:h-160 mt-7"/>
                </div>

                <div className=" mt-10 w-[90%] md:w-[50%]">
                    <h1 className="font-bold md:text-[25px] text-[30px] text-white">
                        Dan Olu-Williams
                    </h1>

                    <h1 className="font-medium md:text-[18px] text-[15px] text-red-600">
                        Consultant, Designer, and Public Speaker in Nigeria
                    </h1>
                   
                    <h1 className="md:text-[15px] text-gray-400 text-[13px]">
                    Dan Olu-Williams is an Entrepreneur, Business Trainer, Leadership Development Facilitator, and Social Impact Advocate. He is the Founder and Executive Director of Danwilliams Global, a capacity-building and enterprise development firm dedicated to inspiring possibilities, strengthening organizational performance, and empowering individuals to achieve sustainable success.<br/>

                    With an academic background in Accountancy from the Federal Polytechnic, Ado-Ekiti, and professional training in Social Entrepreneurship, Human Resource Management, Project Management, Customer Experience, and Public Speaking, Dan Olu-Williams has built a reputation for helping individuals, entrepreneurs, institutions, and organizations translate ideas into measurable outcomes.<br/>

                    His work spans business development, entrepreneurship education, leadership training, corporate facilitation, youth empowerment, and enterprise support services. Through strategic training programs, and ecosystem-building initiatives, he has equipped aspiring entrepreneurs, students, professionals, and emerging leaders with practical tools for personal effectiveness, business growth, and societal impact.<br/>

                    Dan Olu-Williams is the Convener of The Unveiling Summit, a transformational platform focused on leadership, purpose discovery, and youth development. He is also actively involved in initiatives that promote entrepreneurship, financial inclusion, workforce readiness, and youth participation in economic development.<br/>

                    Driven by a passion for human capacity development and nation-building, his mission is to raise purpose-driven leaders, productive citizens, and resilient entrepreneurs who create value, solve problems, and contribute meaningfully to society. His work is guided by the belief that every individual possesses untapped potential and that with the right mindset, knowledge, and opportunities, extraordinary possibilities can become reality.
                    </h1>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Meet