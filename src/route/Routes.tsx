import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import HomeComp from "../pages/home/HomeComp";
import AboutLayout from "../layout/AboutLayout";
import AboutComp from "../pages/about/AboutComp";
import ContactLayout from "../layout/ContactLayout";
// import Contact from "../pages/contact/Contact";
import ContactComp from "../pages/contact/ContactComp";

export const element  = createBrowserRouter(
    [
        {
            path:"/",
            element: <HomeLayout/>,
            children: [{
                index: true,
                element: <HomeComp/>
            }]
        },
         {
            path:"/about",
            element: <AboutLayout/>,
            children: [{
                index: true,
                element: <AboutComp/>
            }]
        },
         {
            path:"/contact",
            element: <ContactLayout/>,
            children: [{
                index: true,
                element: <ContactComp/>
            }]
        },
    ]
)