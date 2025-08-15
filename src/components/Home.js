import React, { useEffect } from "react";
import HomeNot from "./HomeNot";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
      if (location.state?.log) {
        toast.success("Logged In successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
        navigate(location.pathname, { replace: true });
      }
    }, [location.state, navigate, location.pathname]);

    useEffect(() => {
      if (location.state?.out) {
        toast.success("Logged Out successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
        navigate(location.pathname, { replace: true });
      }
    }, [location.state, navigate, location.pathname]);

  return (
    <>
      <div>
        <HomeNot/>
        <ToastContainer/>
      </div>
    </>
  );
};

export default Home;