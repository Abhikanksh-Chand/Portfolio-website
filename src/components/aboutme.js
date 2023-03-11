import Lottie from "lottie-react";
import AboutAnimation from "../assets/about.json"

function aboutMe() {
    return (
      <div className="about-me" id="about-me">
        <h1 className="about-me-heading">ABOUT ME</h1>
        <div className="about-me-container">
          <div className="about-me-content">
           <p> Hello! My Name Is Abhikanksh Chand, I Am From Hyderabad, Currently In
            My Third Year Of B.tech CSE with specialization in AIML, I Enjoy Learning
            New Technologies And Implementing Them. Currently I Am Focused On Web
            Development And Exploring New Things Like Blockchain. I Am Also Very
            Interested In The Fields Like Electronics and Machine Learning.</p>
          </div>
          <div className="about-me-img">
          <Lottie animationData={AboutAnimation} loop={true} />
          </div>
        </div>
      </div>
    );
  }
  
  export default aboutMe;