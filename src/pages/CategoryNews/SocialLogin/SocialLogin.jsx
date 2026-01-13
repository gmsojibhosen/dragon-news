import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold text-xl"> Login With</h2>
      <div className="mt-5 space-y-4">
        <button className="btn w-full bg-white border-blue-600">
          <FcGoogle size={20} /> Login With Google
        </button>
        <button className="btn w-full bg-white border-primary">
          <FaGithub size={20} /> Login With Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
