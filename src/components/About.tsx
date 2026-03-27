import React from "react";
import FadeIn from "./FadeIn";

function About() {
  return (
    <div className="container" id="about" style={{ padding: '50px 0' }}>
      <FadeIn transitionDuration={800} delay={200}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ marginBottom: '30px' }}>About Me</h1>
          <div className="about-text" style={{ fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'left' }}>
            <p>
              Welcome to my ePortfolio! I am an Electrical Engineering student at the Georgia Institute of Technology (Class of 2029)
              with a driving passion for mechatronics, autonomous systems, and hardware-software integration. Originally from Corning, NY,
              my journey into engineering started with FIRST Tech Challenge robotics and has since evolved into designing combat robots,
              lunar rover prototypes, and wearable haptic devices.
            </p>
            <p style={{ marginTop: '20px' }}>
              My focus lies in bridging the gap between mechanical design and intelligent control systems. I am constantly seeking to
              challenge myself, whether that means optimizing the ESC settings on a 3lb BattleBot or mapping autonomous navigation
              algorithms in Python. This site serves as a living roadmap of my academic and professional journey as I build a career
              in advanced robotics.
            </p>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

export default About;
