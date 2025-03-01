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
import PostConstructionCleaning from "../frontend/services/PostConstructionCleaning";
import PreSaleCleaning from "../frontend/services/PreSaleCleaning";
import ParkadeCleaning from "../frontend/services/ParkadeCleaning";
import ShowHomeCleaning from "../frontend/services/ShowHomeCleaning";
import JunkRemovalCleaning from "../frontend/services/JunkRemovalCleaning";
import PriorityCleaning from "../frontend/services/PriorityCleaning";
import LaundryServices from "../frontend/services/LaundryServices";
import CookingHelp from "../frontend/services/CookingHelp";
import Login from "../frontend/login";

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
      {
        path: "/services/post-construction-or-post-renovation-cleaning-service",
        element: <PostConstructionCleaning />,
      },
      {
        path: "/services/pre-sale-cleaning-service",
        element: <PreSaleCleaning />,
      },
      {
        path: "/services/parkade-cleaning-service",
        element: <ParkadeCleaning />,
      },
      {
        path: "/services/show-home-cleaning-service",
        element: <ShowHomeCleaning />,
      },
      {
        path: "/services/junk-removal-cleaning-service",
        element: <JunkRemovalCleaning />,
      },
      {
        path: "/services/priority-cleaning-service",
        element: <PriorityCleaning />,
      },
      {
        path: "/services/laundry-service",
        element: <LaundryServices />,
      },
      {
        path: "/services/cooking-help-service",
        element: <CookingHelp />,
      },

      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/adminlogin",
        element: <Login />,
        },
    ],
  },
]);

export default frontendRoutes;
