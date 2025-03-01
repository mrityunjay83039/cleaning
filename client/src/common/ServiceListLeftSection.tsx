import React from "react";
import { serviceList_servicePage } from "../config/constants";

const ServiceListLeftSection = () => {
  return (
    <div className="tp-faqs-left-sidebar tp-services-sidebar mb-30">
      <h4 className="tp-faqs-left-sidebar-title">Category...</h4>
      <ul>
        {serviceList_servicePage.map((ele) => {
          return (
            <li key={ele.id}>
              <a href={ele.btnLink}>
                {ele.title}
                <i className="fas fa-arrow-circle-right"></i>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ServiceListLeftSection;
