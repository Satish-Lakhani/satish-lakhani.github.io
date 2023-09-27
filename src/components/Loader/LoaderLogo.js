import React from "react";
import "./LoaderLogo.css";
import LottieLoader from "../lottie/LoottieLoader";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return <LottieLoader />;
  }
}

export default LogoLoader;
