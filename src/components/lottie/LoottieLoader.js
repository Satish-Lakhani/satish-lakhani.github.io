import React from "react";
import Lottie from "lottie-react";
import animationData from "./programming.json";

export default function LottieLoader() {
  return (
    <div>
      <Lottie animationData={animationData} loop={true} autoPlay={true} />
    </div>
  );
}
