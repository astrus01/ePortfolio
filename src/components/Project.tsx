import React from "react";
import FadeIn from './FadeIn';
import Button from '@mui/material/Button';
import LanguageIcon from '@mui/icons-material/Language';
import YouTubeIcon from '@mui/icons-material/YouTube';

// *** MEDIA IMPORTS ***
import WiringDiagram from '../assets/images/wiringdiagram.jpg';
import SolderedComponents from '../assets/images/solderedcomponents.jpg';
import SolderedCorner from '../assets/images/solderedledcorner.jpg';
import ArduinoCode from '../assets/images/arduinofastled.png';
import HyperionSettings from '../assets/images/hyperionsettings.png';
import LedOnBack from '../assets/images/ledputonthebackofmonitor.jpg';

import AltiumImage from '../assets/images/Altium.png';
import RoverImage from '../assets/images/rover.jpg';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Technical Portfolio</h1>
        <FadeIn transitionDuration={800} delay={200}>
            <div className="projects-grid">

                {/* --- DISCOVERY PROJECT FEATURE --- */}
                <div className="project discovery-feature" style={{ gridColumn: "1 / -1", paddingBottom: "20px" }}>

                    <h2 style={{ marginBottom: '20px', paddingTop: '10px' }}>Discovery Project: Adaptive Screen Backlighting (Ambilight)</h2>

                    <video
                        className="zoom"
                        controls
                        autoPlay
                        loop
                        muted
                        style={{ width: '100%', maxWidth: '700px', display: 'block', margin: '0 auto 20px auto', borderRadius: '8px', backgroundColor: 'black' }}
                    >
                        <source src={process.env.PUBLIC_URL + '/finalworkingledmonitortest.mov'} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <div className="project-description-detailed" style={{ textAlign: "left", padding: "0 20px", lineHeight: "1.8" }}>

                        <p><strong>Overview:</strong> For my ECE 1100 Discovery Project, I engineered a custom, open-source dynamic ambient backlighting system (commonly known as Ambilight). The system analyzes on-screen video data in real time and projects matching colors onto the wall behind the monitor using addressable LED strips. The goal was to extend the perceived field of view, decrease eyestrain during prolonged viewing in dark environments, and create a deeper sense of immersion in cinematic or gaming content.</p>

                        <p><strong>The Engineering Challenge:</strong> While conceptually straightforward, implementing a low-latency Ambilight requires solving substantial hardware and software integration challenges. The system cannot simply display colors; it must process dominant color data across specialized "zones" of the screen and update up to 100+ individual LEDs sixty times per second to maintain perceptual synchronization with the video. Any lag beyond approximately 20 milliseconds breaks the immersion and becomes distracting. My project required a full-stack engineering approach: managing high-current power distribution, establishing reliable serial communication between a PC and a microcontroller, and optimizing color-processing firmware.</p>

                        <div className="hardware-gallery" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', margin: '25px 0' }}>
                            <img src={WiringDiagram} alt="Wiring Diagram" style={{ width: '100%', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }} />
                            <img src={SolderedComponents} alt="Soldered Components" style={{ width: '100%', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }} />
                            <img src={SolderedCorner} alt="Soldered LED Corner" style={{ width: '100%', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }} />
                            <img src={ArduinoCode} alt="Arduino FastLED Code" style={{ width: '100%', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }} />
                            <img src={HyperionSettings} alt="Hyperion Configuration" style={{ width: '100%', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }} />
                            <img src={LedOnBack} alt="LEDs Mounted on Monitor" style={{ width: '100%', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }} />
                        </div>

                        <p><strong>Hardware Architecture:</strong> The backbone of the system is a high-density strip of WS2812B individually addressable 5V LEDs. The strip is controlled by an Arduino micro-controller which interprets color data received via USB serial. One of the key hardware challenges was power; a dense strip can draw significant current at full brightness. I engineered a dedicated 5V power supply rail and hand-soldered the power distribution. To ensure system stability, I integrated a smoothing capacitor across the power rails. While not strictly mandatory, this capacitor acts as a crucial signal filter against electrical disturbances originating from the power supply and the LED strip, preventing anomalous and erratic behaviors in the Arduino logic. Currently, the soldered control components are securely mounted directly behind the monitor, with a planned future upgrade to design and integrate a custom 3D-printed electronics enclosure.</p>

                        <p><strong>Software & Optimization:</strong> The Arduino firmware relies on the FastLED library, allowing for rapid-fire, low-level protocol updates to the WS2812B data line. On the PC side, I utilized Hyperion screen capture software to sample the screen data and pack it into an optimized serial data packet. A major focus was system optimization; the Hyperion software runs incredibly efficiently in the background, consuming only about 2 to 4 percent of my GPU resources and roughly 200MB of RAM. To achieve fluid, cinematic color transitions without jarring flashes, I configured the software to utilize linear smoothing at 120Hz with a 100ms update window, finding the perfect balance between real-time color responsiveness and viewing comfort.</p>

                        <p><strong>Behind the Monitor View:</strong></p>
                        <video
                            width="100%"
                            controls
                            style={{ maxWidth: '700px', display: 'block', margin: '10px auto', borderRadius: '8px', backgroundColor: 'black' }}
                        >
                            <source src={process.env.PUBLIC_URL + '/ledbehindmonitorview.mov'} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        <p style={{ marginTop: '20px' }}><strong>Impact & Significance:</strong> Completing this project demonstrated mastery over several core ECE thread concepts: embedded firmware development (C++), high-current DC power regulation, and high-speed digital serial communication. It forced me to move beyond theoretical Arduino examples and confront real-world engineering constraints such as signal integrity on long data lines and voltage drop management over high-current traces. This project stands as a testament to my ability to synthesize hardware design requirements with optimized software control systems to deliver a polished, functional consumer electronics prototype.</p>
                    </div>
                </div>

                {/* --- OTHER PROJECTS --- */}

                <div className="project">
                    <img src={AltiumImage} className="zoom" alt="Altium Rigid-Flex PCB" width="100%"/>
                    <h2>Wearable Haptics (VIP: Mechatronics & Motivation)</h2>
                    <p>Designed a rigid-flex printed circuit board (PCB) using Altium Designer to condense complex wearable haptic technology into a compact ring form factor. Implemented strict trace width constraints (0.15mm standard, 0.2mm power) and optimized via placements to balance impedance requirements with extreme physical space limitations.</p>
                </div>

                <div className="project">
                    <img src={RoverImage} className="zoom" alt="Quakey Lunar Rover" width="100%"/>
                    <h2>"Quakey" Lunar Rover (GT IEEE RoboTech)</h2>
                    <p>Won 1st Place Overall and 1st in the Autonomous Track at the Jan 2026 RoboTech Hackathon. Over 36 hours, our team engineered a vision-based lunar rover capable of autonomous off-road navigation, semantic classification of lunar hazards, and precise depth estimation. I led the hardware integration and robotic arm design.</p>

                    <div className="links-group" style={{ display: 'flex', gap: '10px', marginTop: '10px', flexWrap: 'wrap' }}>
                        <Button variant="outlined" startIcon={<LanguageIcon />} href="https://devpost.com/software/quakey" target="_blank">
                            Devpost
                        </Button>
                        <Button variant="outlined" startIcon={<YouTubeIcon />} href="https://www.youtube.com/watch?v=CpWTebDheA0" target="_blank" color="error">
                            YouTube
                        </Button>
                    </div>
                </div>

                {/* BATTLEBOTS SECTION UPDATED */}
                <div className="project">
                    <video
                        className="zoom"
                        width="100%"
                        controls
                        style={{ borderRadius: '8px', marginBottom: '15px', backgroundColor: 'black' }}
                    >
                        <source src={process.env.PUBLIC_URL + '/battlebot.mov'} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h2>3lb Combat Robot (RoboJackets BattleBots)</h2>
                    <p>Member of RoboJackets BattleBots team. Designed a high-kinetic-energy weapon system for a 3lb combat robot using Autodesk Inventor. Engineered the internal layout, hand-soldered power distribution leads, and optimized Electronic Speed Controller (ESC) configurations to balance acceleration with drive reliability.</p>

                    {/* NEW LIVE STREAM BUTTON */}
                    <div className="links-group" style={{ display: 'flex', gap: '10px', marginTop: '15px', flexWrap: 'wrap' }}>
                        <Button variant="outlined" startIcon={<YouTubeIcon />} href="https://www.youtube.com/watch?v=eUpgA2VQzzo" target="_blank" color="error">
                            Watch Live Stream
                        </Button>
                    </div>
                </div>

                <div className="project Create3">
                    <video
                        className="zoom"
                        width="100%"
                        controls
                        style={{ borderRadius: '8px', marginBottom: '15px', backgroundColor: 'black' }}
                    >
                        <source src={process.env.PUBLIC_URL + '/irobotmaze.mov'} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h2>Autonomous Navigation (iRobot Create 3)</h2>
                    <p>Developed autonomous navigation algorithms in Python for an iRobot Create 3. Programmed maze-solving logic using flood-fill algorithms, path planning via A* node search, and advanced reactive behaviors including dynamic object following.</p>
                </div>

            </div>
        </FadeIn>
    </div>
    );
}

export default Project;
