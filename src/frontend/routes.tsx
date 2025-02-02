import { createBrowserRouter } from "react-router-dom";
import HomePage from "./homepage";
import Layout from "./Layout";
import About from "./about";

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
       }
    ]
}])

export default frontendRoutes;