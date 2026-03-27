import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faRocket } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="goals">
      <div className="items-container">
        <h1>Career Goals & ECE Roadmap</h1>
        <p style={{color: 'white', textAlign: 'center', marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px auto'}}>
          My long-term career aspiration is to lead systems integration for advanced autonomous robotics.
          Rather than focusing strictly on traditional circuit design, my roadmap is heavily tailored toward
          mechatronics—blending mechanical structures, custom PCBs, and intelligent control software.
        </p>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Long-Term Goal (Post-Graduation)"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faRocket} />}
          >
            <h3 className="vertical-timeline-element-title">Robotics Systems Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Industry Focus</h4>
            <p>
              Lead the design and deployment of autonomous systems, managing the full mechatronic lifecycle from sensor integration to high-level pathfinding logic in aerospace or consumer robotics.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Short-Term Goal (2027 - 2028)"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Mechatronics / Autonomy Internship</h3>
            <h4 className="vertical-timeline-element-subtitle">Industry Experience</h4>
            <p>
              Secure internships focused on autonomous navigation or mechatronic hardware design. Steps to achieve this include completing advanced ECE thread coursework in Robotics and building out my portfolio with competitive BattleBots iterations.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan. 2026 - Present"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Undergraduate Researcher</h3>
            <h4 className="vertical-timeline-element-subtitle">VIP: Mechatronics and Motivation</h4>
            <p>
              Currently expanding my foundational skills by designing rigid-flex PCBs for wearable haptic devices. This role bridges the gap between my CAD experience and electrical engineering coursework.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="July 2024 - Aug. 2024"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Engineering Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Corning Incorporated</h4>
            <p>
              Built early professional engineering foundations by assembling Schlieren imaging optics and analyzing spray distribution hotspots, giving me a deep appreciation for hardware testing and data visualization.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
