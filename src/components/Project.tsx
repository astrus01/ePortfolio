import React from "react";
import AltiumImage from '../assets/images/Altium.png';
import RoverImage from '../assets/images/Rover.jpg';
import BattlebotImage from '../assets/images/Battlebot.jpg';
import FadeIn from './FadeIn'; // Animation import
import Button from '@mui/material/Button';
import LanguageIcon from '@mui/icons-material/Language';
import YouTubeIcon from '@mui/icons-material/YouTube';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Technical Portfolio</h1>
        <FadeIn transitionDuration={800} delay={200}>
            <div className="projects-grid">

                {/* DISCOVERY PROJECT FEATURE */}
                <div className="project" style={{ gridColumn: "1 / -1" }}>
                    <img src={AltiumImage} className="zoom" alt="Altium Rigid-Flex PCB Design" width="100%"/>
                    <h2>Discovery Project: Wearable Haptics (VIP: Mechatronics and Motivation)</h2>
                    <div style={{ textAlign: "left", padding: "15px" }}>
                    <p><strong>Overview:</strong> As an Undergraduate Researcher in the "Mechatronics and Motivation" Vertically Integrated Projects (VIP) group at the Georgia Institute of Technology, I am currently working on a complex initiative to condense advanced wearable haptic technology into an incredibly compact ring form factor. This endeavor serves as my primary ECE 1100 Discovery Project, representing a deep dive into the practical, real-world applications of electrical engineering combined with stringent mechanical constraints. It bridges the gap between theoretical circuit analysis and physical product design.</p>

                    <p><strong>The Challenge:</strong> Traditional haptic feedback devices are notoriously bulky, often relying on rigid printed circuit boards (PCBs) and large actuators that severely limit user mobility and comfort. The primary objective of our research is to miniaturize this technology so it can be worn unobtrusively on the finger. This requires a significant departure from standard FR4 boards, pushing us to utilize flexible electronics that can seamlessly curve around the human body. The core challenge lies in achieving this flexibility without compromising structural integrity, electrical connectivity, or signal fidelity during continuous physical movement.</p>

                    <p><strong>Technical Execution & PCB Design:</strong> My central contribution to the research group revolves around the architectural layout and routing of a rigid-flex PCB using Altium Designer. Designing a rigid-flex board introduces a myriad of layout challenges compared to standard two-layer static designs. Because the board must physically bend to form the ring geometry, component placement and trace routing must be flawlessly executed to prevent stress fractures in the copper layers during operation.</p>

                    <p>To ensure high reliability and manufacturability within our tightly constrained spatial footprint, I implemented strict, customized design rules. I utilized trace widths of precisely 0.15mm for standard signal routing and bumped the width to 0.2mm for power delivery lines, perfectly balancing impedance requirements with extreme physical space limitations. Furthermore, managing the layer transitions across the flex zones required meticulous via configurations. I standardized the via sizes across the board to 0.4mm with a 0.15mm hole size, deliberately coupled with a -0.4mm solder mask expansion. This exact specification prevents accidental solder bridging and ensures clean manufacturing tolerances during fabrication.</p>

                    <p>One of the more complex aspects of the layout involved rigorous footprint management. For instance, ensuring that the main processing unit—footprint U1A—was correctly positioned required careful spatial planning. It had to be placed entirely on the rigid section of the board, remaining completely clear of the flexible bending zones to prevent mechanical failure of the solder joints. Additionally, peripheral components like connector J1 required active management; I ensured it was routed efficiently and moved entirely out of the way to prevent any spatial collisions with the primary ICs.</p>

                    <p><strong>Impact & Significance:</strong> This project is a foundational stepping stone for my overarching career goals. While my background is in electrical engineering, my passion leans heavily away from traditional circuit tech and squarely into mechatronics and robotics, which I plan to pursue through my advanced thread options. By successfully prototyping a highly specialized rigid-flex design, our group aims to definitively demonstrate that high-fidelity haptic feedback can be seamlessly integrated into daily wear. For future employers, this project acts as a testament to my ability to operate at the complex intersection of electrical design and mechanical form, taking a theoretical concept from a schematic to a highly specialized, manufacturable physical prototype.</p>
</div>
                </div>

                {/* HACKATHON PROJECT */}
                <div className="project">
                    <img src={RoverImage} className="zoom" alt="Quakey Lunar Rover" width="100%"/>
                    <h2>"Quakey" Lunar Rover (GT IEEE RoboTech)</h2>
                    <p>Won 1st Place Overall and 1st in the Autonomous Track at the Jan 2026 RoboTech Hackathon. Over 36 hours, our team engineered a vision-based lunar rover. I led the design of the robotic arm and electrical systems, successfully integrating power distribution, sensor inputs, and complex motor control for mecanum wheel navigation.</p>

                    {/* Embedded YouTube Player */}
                    <div style={{ marginTop: '15px', marginBottom: '15px', position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                        <iframe
                            src="https://www.youtube.com/embed/CpWTebDheA0"
                            title="Quakey Robotech 2026"
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '8px', border: 'none' }}
                            allowFullScreen>
                        </iframe>
                    </div>

                    {/* Links */}
                    <div style={{ display: 'flex', gap: '10px', marginTop: '10px', flexWrap: 'wrap' }}>
                        <Button variant="outlined" startIcon={<LanguageIcon />} href="https://devpost.com/software/quakey" target="_blank">
                            Devpost
                        </Button>
                        <Button variant="outlined" startIcon={<YouTubeIcon />} href="https://www.youtube.com/watch?v=CpWTebDheA0" target="_blank" color="error">
                            YouTube
                        </Button>
                    </div>
                </div>

                {/* BATTLEBOTS PROJECT */}
                <div className="project">
                    <img src={BattlebotImage} className="zoom" alt="3lb Combat Robot" width="100%"/>
                    <h2>3lb Combat Robot (RoboJackets BattleBots)</h2>
                    <p>Designed a 3lb combat robot weapon system using Autodesk Inventor. Handled internal wiring, soldering, and optimized Electronic Speed Controller (ESC) settings for the weapon and drive motors. We successfully defended design specifications to senior engineering leads. I drove and competed against teams with our bot, "Kimchi", at the "Jacket Racket" event.</p>
                </div>

                {/* IROBOT CREATE 3 PROJECT */}
                <div className="project">
                    <h2>Autonomous Navigation (iRobot Create 3)</h2>
                    <p>Developed autonomous navigation algorithms in Python for an iRobot Create 3. Programmed logic for maze-solving using flood-fill algorithms, as well as self-parking and dynamic object-following behaviors, cementing my interest in the software side of autonomous systems.</p>
                </div>

            </div>
        </FadeIn>
    </div>
    );
}

export default Project;
