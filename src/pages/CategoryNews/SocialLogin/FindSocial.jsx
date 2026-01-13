import React from "react";
import { FaFacebookF, FaInstagram, FaTwitch, FaTwitter } from "react-icons/fa";

const FindSocial = () => {
  return (
    <div className="p-4">
      <h2 className="font-semibold text-xl mb-5">Find Us On</h2>
      <div className="join join-vertical w-full text-primary">
        <button className="btn join-item bg-white py-6">
          {" "}
          <FaFacebookF size={20} color="blue"></FaFacebookF> Facebook
        </button>
        <button className="btn join-item bg-white py-6">
          <FaTwitter size={20} color="#58A7DE"></FaTwitter> Twitter
        </button>
        <button className="btn join-item bg-white py-6">
          {" "}
          <FaInstagram size={20} color="red"></FaInstagram> Button
        </button>
      </div>
    </div>
  );
};

export default FindSocial;
