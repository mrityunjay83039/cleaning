import { Link } from "react-router-dom";
import serviceFeature from "../assets/img/icon/service-feature.png";

const ServiceCallToAction = () => {
  return (
 

     <div className="row">
     <div className="col-xl-4 col-md-6">
       <div className="tp-service-details-feature text-center bg-gray-light mb-40">
         <div className="tp-feature-three-icon mb-25">
           <img
             src={serviceFeature}
             className="img-fluid"
             alt="img not found"
           />
           <i className="flaticon-booking"></i>
         </div>
         <h4 className="tp-service-details-feature-title">
           <Link to="/about-us" target="_blank">
             About <br />
             Us
           </Link>
         </h4>
       </div>
     </div>
     <div className="col-xl-4 col-md-6">
       <div className="tp-service-details-feature text-center bg-gray-light mb-40">
         <div className="tp-feature-three-icon mb-25">
           <img
             src={serviceFeature}
             className="img-fluid"
             alt="img not found"
           />
           <i className="fab fa-whatsapp"></i>
         </div>
         <h4 className="tp-service-details-feature-title">
           <Link to="https://wa.me/+17788004455" target="_blank">
             Get Support On <br />
             Whatsapp
           </Link>
         </h4>
       </div>
     </div>
     <div className="col-xl-4 col-md-6">
       <div className="tp-service-details-feature text-center bg-gray-light mb-40">
         <div className="tp-feature-three-icon mb-25">
           <img
             src={serviceFeature}
             className="img-fluid"
             alt="img not found"
           />
           <i className="flaticon-boy"></i>
         </div>
         <h4 className="tp-service-details-feature-title">
           <Link to="/contact-us" target="_blank">
             Book an <br />
             Appointement
           </Link>
         </h4>
       </div>
     </div>
   </div>

  )
}

export default ServiceCallToAction
