import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faMicrochip, faRobot } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Altium Designer",
    "Rigid-Flex PCBs",
    "Soldering",
    "Circuit Analysis",
];

const labelsSecond = [
    "Autodesk Inventor",
    "Onshape",
    "3D Printing",
    "Hardware Assembly",
    "Schlieren Imaging Optics"
];

const labelsThird = [
    "Python",
    "MATLAB",
    "Raspberry Pi",
    "Motor Control (ESC)",
    "Pathfinding Algorithms",
    "Sensor Integration"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Technical Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faMicrochip} size="3x"/>
                    <h3>Hardware & PCB Design</h3>
                    <p>I have experience designing compact, rigid-flex printed circuit boards (PCB) for wearable technology, specifically for a ring, in Altium Designer. I have had to manage component footprints and optimize trace routing for really small constraints for mechatronic applications.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Core Skills:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faRobot} size="3x"/>
                    <h3>CAD & Prototyping</h3>
                    <p>I am comfortable with 3D modeling in the context of combat robotics and other applications, and I have utilized 3D printers to rapidly iterate designs, even in mechanical assemblies and weapon systems.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Core Skills:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Programming & Autonomy</h3>
                    <p>I develop logic for autonomous navigation, including flood-fill pathfinding and object-following behaviors. Most of my programming work is in Python, applied to computing and algorithmic problem-solving.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Core Skills:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
