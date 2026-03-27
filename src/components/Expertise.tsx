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
    "Multimeters & Oscilloscopes"
];

const labelsSecond = [
    "Autodesk Inventor",
    "Onshape",
    "3D Printing",
    "Laser Cutting",
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
                    <p>Experience in designing compact, rigid-flex printed circuit boards for wearable technology, managing component footprints, and optimizing trace routing for space-constrained mechatronic applications.</p>
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
                    <p>Proficient in 3D modeling for combat robotics and autonomous rovers. Experienced in rapid prototyping using 3D printers and laser cutters to iterate on mechanical assemblies and weapon systems.</p>
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
                    <p>Developing logic for autonomous navigation, including flood-fill pathfinding and object-following behaviors. Strong foundation in Python for computing and algorithmic problem-solving.</p>
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
