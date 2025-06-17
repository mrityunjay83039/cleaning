import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logOut } from "../redux/reducer/auth";
import { useNavigate } from "react-router-dom";
import { useUserLogoutMutation } from "../redux/services/auth";
import { toast } from "react-toastify";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [logoutUser] = useUserLogoutMutation();
  const refreshToken = useAppSelector((state) => state.auth.refreshToken);

  useEffect(() => {
    const handleLogout = async () => {
      try {
        const res = await logoutUser({ refreshToken });
        if (res?.data?.success) {
          toast.success(res?.data?.msg, {
            position: "top-center",
          });
          dispatch(logOut());
          navigate("/adminlogin");
        }
      } catch (error) {
        console.log("error in logout: ", error);
        toast.error("Logout failed. Please try again.", {
          position: "top-center",
        });
      }
    };

    handleLogout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <p>Logging out...</p>;
};

export default Logout;
