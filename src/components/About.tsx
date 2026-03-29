import React from "react";
import FadeIn from "./FadeIn";
import '../assets/styles/About.scss'

function About() {
  return (
    <div className="about-container" id="about">
      <FadeIn transitionDuration={800} delay={200}>
        <div className="about-content">
          <h1 style={{ marginBottom: '30px' }}>Intro & About Me</h1>

          <div className="about-text" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            <p>
              Welcome to my ePortfolio, built with React, TypeScript, JavaScript, and SCSS! I'm an Electrical Engineering student at Georgia Tech (Class of 2029) with a passion for mechatronics, autonomous systems, and hardware-software integration. I grew up in Corning, NY, and my path into engineering started with FIRST Tech Challenge robotics. Since then, I have had a lot of fun designing combat robots, lunar rover prototypes, and wearable haptic devices.
            </p>
            <p style={{ marginTop: '20px' }}>
              I'm always looking for the next challenge. This ePortfolio is a reflection of what I have done so far, and I can't wait to add more projects as I continue to grow my skills in PCB design, CAD modeling, and embedded programming. Thanks for visiting!
            </p>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

export default About;
