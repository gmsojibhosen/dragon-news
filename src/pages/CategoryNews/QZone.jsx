import React from "react";
import swingImg from "../../assets/swimming.png";
import classImg from "../../assets/class.png";
import palyImg from "../../assets/playground.png";
const QZone = () => {
  return (
    <div className="bg-base-200 p-4">
      <h2 className="font-semibold text-xl mb-5">Q-Zone</h2>
      <div className="space-y-5">
        <img src={swingImg} alt="swing" />
        <img src={classImg} alt="Class" />
        <img src={palyImg} alt="Class" />
      </div>
    </div>
  );
};

export default QZone;
