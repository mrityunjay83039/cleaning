import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useLoginMutation } from "../../redux/services/auth";

const Login = () => {
 
  const [login, { data, error, isLoading }] = useLoginMutation();

  const loginApiCall = async () => {
    try {
      const payload = {
        email: "mishrakumar.abhay1@gmail.com",
        password: "test",
      };
      const res = await login(payload);
      if (res) {
        const token = res.data.token;
        localStorage.setItem("authToken", token); // Store token in local storage
        console.log(res);
      }
      
    } catch (error) {
      console.log(error);
    }
  };


 useEffect(()=>{
  loginApiCall()
 },[])

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="45vw"
      margin="auto"
      className="tp-contact-area pt-85 pb-85"
    >
      <Box
        border="1px solid #333"
        padding="40px"
        borderRadius="5px"
        className="container"
      >
        <div className="row">
          <div className="col-lg-10">
            <div
              className="section-title-wrapper-two mb-50 wow fadeInUp"
              data-wow-delay=".2s"
            >
              {/* <h5 className="tp-section-subtitle common-yellow-shape mb-20 heading-color-black">
                Admin Panel Login
              </h5> */}
              <h4 className="heading-color-black text-center">
                Admin Panel Login
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-contact-form">
              <div className="row custom-mar-20">
                <div className="col-md-12 custom-pad-20">
                  <div className="tp-contact-form-field mb-20">
                    <input type="text" placeholder="user name" />
                  </div>
                </div>
                <div className="col-md-12 custom-pad-20">
                  <div className="tp-contact-form-field mb-20">
                    <input type="password" placeholder="password" />
                  </div>
                </div>

                <div className="col-md-12 custom-pad-20">
                  <div className="tp-contact-form-field">
                    <button type="submit" className="theme-btn">
                      <i className="flaticon-enter"></i> Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Login;
