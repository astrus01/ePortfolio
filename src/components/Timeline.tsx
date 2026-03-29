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
        <p className="roadmap-description" style={{textAlign: 'center', marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px auto'}}>
          My long-term goal is to lead systems integration for advanced autonomous robotics. My roadmap and timeline are built around mechatronics, where I get to do fun work blending mechanical structures, custom PCBs, and intelligent control software.
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
              Lead the design and deployment of autonomous systems, managing sensor integration or high-level pathfinding logic in aerospace or consumer robotics.
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
              Land internships focused on mechatronic hardware design. My plan to get there includes finishing advanced ECE thread coursework in Robotics and building out my portfolio with competitive BattleBots and more VIP work.
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
              Currently building my foundational skills by designing rigid-flex PCBs (stiffener/non stiffener) for wearable haptic devices in a ring form-factor. This role connects my CAD background directly to my electrical engineering coursework. (Also my first PCB design!)
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
              Gained early professional experience assembling Schlieren imaging optics and analyzing spray distribution hotspots. It gave me a real appreciation for hardware testing and data visualization.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
