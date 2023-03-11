import Lottie from "lottie-react";
import introAnimation from "../assets/introanimation.json";

function intro() {
  return (
    <div className="intro">
      <div className="intro-right">
        <h1 className="intro-text">Hi, My Name is</h1>
        <h1 className="intro-text my-name">Abhikanksh Chand</h1>
      </div>
      <div className="intro-left">
      <Lottie animationData={introAnimation} loop={true} />
      </div>
    </div>
  )
}
export default intro;
