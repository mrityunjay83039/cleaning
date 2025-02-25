import { createBrowserRouter } from "react-router-dom";
import HomePage from "../frontend/homepage";
import Layout from "./Layout";
import About from "../frontend/about";
import Services from "../frontend/services";
import ContactUs from "../frontend/contact";
import Blogs from "../frontend/blogs";
import ServiceDetails from "./ServiceDetails";
import RegularCleaning from "../frontend/services/RegularCleaning";
import CommercialCleaning from "../frontend/services/CommercialCleaning";
import StrataCleaning from "../frontend/services/StrataCleaning";
import DeepCleaning from "../frontend/services/DeepCleaning";
import MoveInOutCleaning from "../frontend/services/MoveInOutCleaning";

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
        element: <CommercialCleaning />,
      },
      {
        path: "/services/strata-cleaning-service",
        element: <StrataCleaning />,
      },
      {
        path: "/services/deep-cleaning-service",
        element: <DeepCleaning />,
      },
      {
        path: "/services/move-in-move-out-cleaning-service",
        element: <MoveInOutCleaning />,
      },
      // {
      //   path: "/services/post-construction-post-or-post-renovation-cleaning-service",
      //   element: <ServiceDetails />,
      // },
      // {
      //   path: "/services/pre-sale-cleaning-service",
      //   element: <ServiceDetails />,
      // },
      // {
      //   path: "/services/parkade-cleaning-service",
      //   element: <ServiceDetails />,
      // },
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
