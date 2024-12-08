import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { axiosInstance } from "../../config/axiosInstance";

export const CustomAlert = ({ onClose }) => {
  const navigate = useNavigate();
  const alertRef = useRef(null);
  useEffect(() => {
    // Entry animation: Slide in from the top
    gsap.fromTo(
      alertRef.current,
      { opacity: 0, y: "-100%" },
      { opacity: 1, y: "50%", duration: 0.8, ease: "power2.out" }
    );

    return () => {
      // Exit animation: Slide back to the top
      gsap.to(alertRef.current, {
        opacity: 0,
        y: "-100%",
        duration: 0.8,
        ease: "power2.in",
        onComplete: onClose, // Close after animation
      });
    };
  }, [onClose]);

  const handleDeactive = async () => {
    try {
      const response = await axiosInstance({
        url: "/user/delete-account",
        method: "DELETE",
      });
      toast.success("Profile terminated. Thank you for being with us.");
      navigate("/signup");
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error);
    }
  };
  return (
    <div className="mt-5" ref={alertRef}>
      <div role="alert" className="alert">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-info h-6 w-6 shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>
          Deactivating your account will remove your access permanently.
        </span>
        <div>
          <button className="btn btn-sm" onClick={onClose}>
            Deny
          </button>
          <button className="btn btn-sm btn-primary" onClick={handleDeactive}>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};
