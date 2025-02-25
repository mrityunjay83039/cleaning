import { createBrowserRouter } from "react-router-dom";
import HomePage from "../frontend/homepage";
import Layout from "./Layout";
import About from "../frontend/about";
import Services from "../frontend/services";
import ContactUs from "../frontend/contact";
import Blogs from "../frontend/blogs";
import ServiceDetails from "./ServiceDetails";
import RegularCleaning from "../frontend/services/RegularCleaning";

const frontendRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        index: true,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/regular-cleaning-service",
        element: <RegularCleaning />,
      },
      {
        path: "/services/commercial-cleaning-service",
        element: <ServiceDetails />,
      },
      {
        path: "/services/strata-cleaning-service",
        element: <ServiceDetails />,
      },
      {
        path: "/services/deep-cleaning-service",
        element: <ServiceDetails />,
      },
      {
        path: "/services/move-in-move-out-cleaning-service",
        element: <ServiceDetails />,
      },
      {
        path: "/services/post-construction-post-or-post-renovation-cleaning-service",
        element: <ServiceDetails />,
      },
      {
        path: "/services/pre-sale-cleaning-service",
        element: <ServiceDetails />,
      },
      {
        path: "/services/parkade-cleaning-service",
        element: <ServiceDetails />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);

export default frontendRoutes;
