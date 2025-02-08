import { createBrowserRouter } from "react-router-dom";
import HomePage from "../frontend/homepage";
import Layout from "./Layout";
import About from "../frontend/about";
import Services from "../frontend/services";
import ContactUs from "../frontend/contact";
import Blogs from "../frontend/blogs";

const frontendRoutes = createBrowserRouter([{
    path: '/',
    element: <Layout/>,
    children:[
        {
            path:"/",
            element: <HomePage/>,
            index: true
        },
       {
        path: "/about-us",
        element: <About/>
       },
       {
        path: "/services",
        element: <Services/>
       },
       {
        path: "/contact-us",
        element: <ContactUs/>
       },
       {
        path: "/blogs",
        element: <Blogs/>
       }
    ]
}])

export default frontendRoutes;