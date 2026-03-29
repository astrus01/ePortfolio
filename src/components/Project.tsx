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
                        <source src={process.env.PUBLIC_URL + '/ambilight_main.mov'} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <div className="project-description-detailed" style={{ textAlign: "left", padding: "0 20px", lineHeight: "1.8" }}>

                        <p><strong>Overview:</strong> To complete my ECE 1100 Discovery Project, I created a custom, open-source dynamic ambient backlight system, more commonly referred to as Ambilight. This system examines video played on the screen in real time and displays the same colors behind the screen, projected onto the wall by LED lights. The aim of the project is to expand the effective field of view, minimize eye fatigue during prolonged screen use in dark environments, and provide a more immersive experience for screen viewing such as films and games.</p>

                        <p><strong>The Engineering Challenge:</strong> The basic idea is simple, but building a low-latency Ambilight implementation can be more difficult than one might assume. The system requires processing dominant color information from special screen zones, as well as controlling 96 individual LEDs 60 times a second. Any latency beyond 20 milliseconds, and it just doesn't look right. I began by tackling power distribution, communication between a PC and microcontroller, and then optimizing color processing.</p>

                        <div className="hardware-gallery" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', margin: '25px 0' }}>
                            <img src={WiringDiagram} alt="Wiring Diagram" style={{ width: '100%', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }} />
                            <img src={SolderedComponents} alt="Soldered Components" style={{ width: '100%', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }} />
                            <img src={SolderedCorner} alt="Soldered LED Corner" style={{ width: '100%', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }} />
                            <img src={ArduinoCode} alt="Arduino FastLED Code" style={{ width: '100%', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }} />
                            <img src={HyperionSettings} alt="Hyperion Configuration" style={{ width: '100%', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }} />
                            <img src={LedOnBack} alt="LEDs Mounted on Monitor" style={{ width: '100%', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }} />
                        </div>

                        <p><strong>Hardware Architecture:</strong> I used WS2812B addressable 5V LED strip, which is controlled by an Arduino Nano. The Nano retrieves color information via USB serial communication. One of the harder hardware aspects to deal with is power management, especially if the LED strip is dense, requiring significant current at maximum brightness. I made a custom power supply rail at 5V, soldering the power distribution by opening random cables to separate the 5V and GND from the barrel jack. I included a smoothing capacitor rated at 1000uf across the power supply rails to eliminate electrical noise from the power supply and the LED strip, which keeps the Arduino's logic from acting erratically. The 90-degree corner connectors I purchased did not fit with the LED strip, so I had to disassemble those and hand solder them to the internal pads of the connector to make it functional. The components are currently located behind the monitor, with future plans to design a custom enclosure using 3D printing (current solution is taped behind my monitor).</p>

                        <p><strong>Software & Optimization:</strong> The Arduino code utilizes FastLED library code to rapidly update the WS2812B data line. This is achieved using the Arduino Integrated Development Environment. On the PC side, I utilized Hyperion to sample data from the screen and send it in an optimized serial packet. Interestingly enough, this application runs in the background using merely 2-4% of the GPU and 200MB RAM. To achieve smooth, cinematic transitions in color, I set up linear smoothing at 120Hz with a 100ms update window, and it looks fantastic. I also experimented with other smoothing configurations to arrive at this figure. If it’s too low, it’s distracting because it flashes too much. If it’s too high, like 200ms, then it’s not real-time anymore.</p>

                        <p><strong>Behind the Monitor View:</strong></p>
                        <video
                            width="100%"
                            controls
                            autoPlay
                            loop
                            muted
                            style={{ maxWidth: '700px', display: 'block', margin: '10px auto', borderRadius: '8px', backgroundColor: 'black' }}
                        >
                            <source src={process.env.PUBLIC_URL + '/ledbehindmonitorview.mov'} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        <p style={{ marginTop: '20px' }}><strong>Impact & Significance:</strong> This project has assisted me in learning about signal integrity on long data lines, voltage drop on high current traces, embedded firmware development (specifically, C++), high current dc power supplies, high speed digital serial communication, and that I can indeed design a hardware-software system from scratch and implement it as a functional prototype. In the future, I would like to improve the enclosure design, possibly replace the Arduino Nano with a different microcontroller, and see if I can achieve an even higher LED count with lower latency. Plus, my setup looks so much better now!</p>
                    </div>
                </div>

                {/* --- OTHER PROJECTS --- */}

                <div className="project">
                    <img src={AltiumImage} className="zoom" alt="Altium Rigid-Flex PCB" width="100%"/>
                    <h2>Wearable Haptics (VIP: Mechatronics & Motivation)</h2>
                    <p>I designed a rigid flex PCB in Altium Designer to fit complex wearable haptic technology into a compact ring form factor. I also implemented trace width constraints, where 0.15mm is the standard trace width and 0.2mm is the trace width for power, and optimized via placement to satisfy impedance and physical space constraints.</p>
                </div>

                <div className="project">
                    <img src={RoverImage} className="zoom" alt="Quakey Lunar Rover" width="100%"/>
                    <h2>"Quakey" Lunar Rover (GT IEEE RoboTech)</h2>
                    <p>Won 1st Place Overall and 1st in the Autonomous Track at the January 2026 RoboTech Hackathon. In more than 36 hours, we designed and developed a lunar rover using computer vision technology to enable autonomous off-road navigation, semantic classification of lunar hazards, and precise depth estimation. I was the team lead in integrating the hardware and designing the robotic arm.</p>

                    <div className="links-group" style={{ display: 'flex', gap: '10px', marginTop: '10px', flexWrap: 'wrap' }}>
                        <Button variant="outlined" startIcon={<LanguageIcon />} href="https://devpost.com/software/quakey" target="_blank">
                            Devpost
                        </Button>
                        <Button variant="outlined" startIcon={<YouTubeIcon />} href="https://www.youtube.com/watch?v=CpWTebDheA0" target="_blank" color="error">
                            YouTube
                        </Button>
                    </div>
                </div>

                {/* BATTLEBOTS */}
                <div className="project">
                    <video
                        className="zoom"
                        width="100%"
                        controls
                        autoPlay
                        loop
                        muted
                        style={{ borderRadius: '8px', marginBottom: '15px', backgroundColor: 'black' }}
                    >
                        <source src={process.env.PUBLIC_URL + '/battlebot.mov'} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h2>3lb Combat Robot (RoboJackets BattleBots)</h2>
                    <p>Member of the RoboJackets BattleBots team. I designed a high-kinetic-energy weapon system for a 3lb combat robot in Autodesk Inventor, engineered the internal layout, and hand-soldered the power distribution leads. Recently drove and competed at “Jacket Racket,” winning one and losing the other. We compete at UGA next, and we plan to absolutely crush it this time. Check out the livestream link for the full “Jacket Racket” competition!</p>

                    <div className="links-group" style={{ display: 'flex', gap: '10px', marginTop: '15px', flexWrap: 'wrap' }}>
                        <Button variant="outlined" startIcon={<YouTubeIcon />} href="https://www.youtube.com/watch?v=eUpgA2VQzzo" target="_blank" color="error">
                            Watch Live Stream
                        </Button>
                    </div>
                </div>

                {/* IROBOT CREATE 3 */}
                <div className="project Create3">
                    <video
                        className="zoom"
                        width="100%"
                        controls
                        autoPlay
                        loop
                        muted
                        style={{ borderRadius: '8px', marginBottom: '15px', backgroundColor: 'black' }}
                    >
                        <source src={process.env.PUBLIC_URL + '/irobotmaze.mov'} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h2>Autonomous Navigation (iRobot Create 3)</h2>
                    <p>Developed autonomous navigation algorithms using Python on an iRobot Create 3 as part of an Intro to Computing course using Python. The algorithms included maze-solving using flood fill algorithms and path planning, as well as dynamic object following.</p>
                </div>

            </div>
        </FadeIn>
    </div>
    );
}

export default Project;
