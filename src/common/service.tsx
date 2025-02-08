import React from 'react'
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {serviceImg, serviceIcon, serviceTitle, serviceDesc, serviceBtnLink, serviceBtnText} = props;
  return (
    <div className="tp-service-three tp-service-four mb-30 wow fadeInUp" data-wow-delay=".6s">
                            <div className="tp-service-three-img">
                                <img src={serviceImg} className="img-fluid" alt="img-not-found"/>
                                <div className="tp-service-three-img-icon">
                                    <i className={serviceIcon}></i>
                                </div>
                                <div className="tp-service-three-img-overlay">
                                    <div className="tp-service-three-img-overlay-icon">
                                        <i className={serviceIcon}></i>
                                    </div>
                                </div>
                            </div>
                            <div className="tp-service-three-text fix">
                                <h4 className="tp-service-three-title mb-20 heading-color-black-with-hover"><Link to={serviceBtnLink}>{serviceTitle}</Link></h4>
                                <p className="mb-30">{serviceDesc}</p>
                                <div className="tp-service-three-text-btn">
                                    <Link to={serviceBtnLink} className="yellow-btn"><i className="flaticon-enter"></i> {serviceBtnText}</Link>
                                </div>
                            </div>
                        </div>
  )
}

export default Service;
