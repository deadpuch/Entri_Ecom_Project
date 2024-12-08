import React, { useState } from "react";
import { CustomAlert } from "../../components/user-components/CustomAlert";

export const DeactiveAc = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };


  return (
    <div className="mt-44">
      <h1 className="text-[1.5rem] font-medium">Deactivate Your Account</h1>

      <button className="btn bg-red-700 text-white" onClick={handleClick}>
        Deactivate Account{" "}
      </button>
      {showAlert && <CustomAlert onClose={handleCloseAlert} />}
    </div>
  );
};
