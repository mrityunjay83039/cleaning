import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Service = (props: any) => {
  const {
    serviceImg,
    serviceIcon,
    serviceTitle,
    serviceDesc,
    serviceBtnLink,
    serviceBtnText,
  } = props;
  return (
    <Box
      className="tp-service-three tp-service-four mb-30 wow fadeInUp"
      data-wow-delay=".6s"
      display="flex"
      flexDirection="column"
    >
      <div className="service_title">
        <h4 className="tp-service-three-title mb-20 heading-color-black-with-hover">
          <Link to={serviceBtnLink}>{serviceTitle}</Link>
        </h4>
      </div>
      <Box display="flex" flexDirection="row">
        <div className="tp-service-three-img">
          <img src={serviceImg} className="img-fluid" alt="img-not-found" />
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
          <p className="mb-30">{serviceDesc}</p>
          <div className="tp-service-three-text-btn">
            <Link to={serviceBtnLink} className="yellow-btn">
              <i className="flaticon-enter"></i> {serviceBtnText}
            </Link>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Service;
