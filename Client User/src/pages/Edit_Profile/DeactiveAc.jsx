import React, { useState } from "react";
import { CustomAlert } from "../../components/user-components/Web/CustomAlert";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const DeactiveAc = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="md:h-screen pt-20 md:pt-0 justify-center flex-col flex">
      <div className="flex px-4 top-0 w-full justify-between fixed z-10 bg-white py-4 ">
        <div className="flex items-center">
          <Link to="/profile">
            <ChevronLeft />
          </Link>
          <h2 className="ms-3 text-xl">My Profile</h2>
        </div>
      </div>
      <div className="mx-4 mg:mx-0">
        <h1 className="text-[1rem] md:text-[1.5rem] font-medium ">
          Deactivate Your Account
        </h1>

        <button className="btn bg-red-700 text-white" onClick={handleClick}>
          Deactivate Account{" "}
        </button>
        {showAlert && <CustomAlert onClose={handleCloseAlert} />}
      </div>
    </div>
  );
};
