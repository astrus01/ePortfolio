import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Button from '@mui/material/Button';

// Import your assets here!
import myHeadshot from '../assets/images/Myheadshot.jpg';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container" id="home">
      <div className="about-section">
        <div className="image-wrapper">
          {/* Using your uploaded headshot */}
          <img src={myHeadshot} alt="Tristan Lint" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/astrus01" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/tristanlint" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Tristan Lint</h1>
          <p>Electrical Engineering Student | Robotics & Autonomous Systems</p>

          {/* ECE Rubric Requirement: Easy to view/download Resume */}
          <div className="resume-button" style={{ marginTop: '20px' }}>
            <Button
              variant="outlined"
              startIcon={<PictureAsPdfIcon />}
              href={process.env.PUBLIC_URL + '/LintTristanResume.pdf'}
              download="Tristan_Lint_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              sx={{ color: '#5000ca', borderColor: '#5000ca', '&:hover': { borderColor: '#3b0099', backgroundColor: 'rgba(80, 0, 202, 0.04)' } }}
            >
              Download Resume
            </Button>
          </div>

          <div className="mobile_social_icons">
            <a href="https://github.com/astrus01" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/tristanlint" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
