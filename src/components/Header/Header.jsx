import React from "react";
import NavLogo from "../../assets/logo.png";
import { format } from "date-fns";
const Header = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <img className="" src={NavLogo} alt="Logo" />
      <p className="text-lg text-accent mt-5 leading-7.5">
        Journalism Without Fear or Favour
      </p>

      <p className="font-medium text-xl text-accent mt-2.5 leading-7.5">
        {format(new Date(), "EEEE, MMMM, dd, yyyy")}
      </p>
    </div>
  );
};

export default Header;
