import React, { useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";
import { logOut } from "../redux/reducer/auth";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logOut());
    navigate("/adminlogin");
  };
  useEffect(() => {
    handleLogout();
  }, []);
  return null;
};

export default Logout;
