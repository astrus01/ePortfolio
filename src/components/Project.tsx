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

                        <p><strong>Overview:</strong> For my ECE 1100 Discovery Project, I built a custom, open-source dynamic ambient backlighting system (known as Ambilight). The system analyzes on-screen video in real time and projects matching colors onto the wall behind the monitor using addressable LED strips. The goal was to extend the perceived field of view, reduce eye strain during long viewing sessions in dark environments, and create a more immersive experience for movies and gaming.</p>

                        <p><strong>The Engineering Challenge:</strong> The concept is straightforward, but building a low-latency Ambilight can be surprisingly difficult. The system has to process dominant color data across specialized screen zones and update 96 individual LEDs sixty times per second to stay in sync with the video. Any lag beyond about 20 milliseconds, and it just looks off. I started with managing power distribution, establishing reliable communication between a PC and a microcontroller, and then optimizing color-processing firmware.</p>

                        <div className="hardware-gallery" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', margin: '25px 0' }}>
                            <img src={WiringDiagram} alt="Wiring Diagram" style={{ width: '100%', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }} />
                            <img src={SolderedComponents} alt="Soldered Components" style={{ width: '100%', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }} />
                            <img src={SolderedCorner} alt="Soldered LED Corner" style={{ width: '100%', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }} />
                            <img src={ArduinoCode} alt="Arduino FastLED Code" style={{ width: '100%', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }} />
                            <img src={HyperionSettings} alt="Hyperion Configuration" style={{ width: '100%', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }} />
                            <img src={LedOnBack} alt="LEDs Mounted on Monitor" style={{ width: '100%', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }} />
                        </div>

                        <p><strong>Hardware Architecture:</strong> I utilized a WS2812B addressable 5V LED strip controlled by an Arduino Nano, which reads color data over USB serial. One of the trickier hardware challenges was power management, since a dense strip can pull significant current at full brightness. I built a dedicated 5V power supply rail and hand-soldered the power distribution, splitting open random cables I had to isolate the 5V and GND from a barrel jack connection. I also added a smoothing 1000uf capacitor across the power rails to filter out electrical noise from the supply and LED strip, which keeps the Arduino logic from behaving erratically. The 90-degree corner connectors I bought did not fit my LEDs, so I had to take those apart and carefully hand soldered to the internal pads of the connectors to get them to work. The control components are currently mounted behind the monitor, and I'm planning to design a custom 3D-printed enclosure down the road (current solution is just taped behind my monitor).</p>

                        <p><strong>Software & Optimization:</strong> The Arduino firmware uses the FastLED library for fast, low-level updates to the WS2812B data line (done through the Arduino IDE). On the PC side, I used Hyperion to sample screen data and put it into an optimized serial packet. Surprisingly, Hyperion runs in the background using only about 2 to 4 percent of GPU resources and around 200MB of RAM. To get smooth, cinematic color transitions, I configured linear smoothing at 120Hz with a 100ms update window, which looks great. I also experimented with different smoothing configurations before landing on these values. Too low and the colors flash distractingly. And if it was too high (200ms), the system loses the real-time feel entirely.</p>

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

                        <p style={{ marginTop: '20px' }}><strong>Impact & Significance:</strong> This project helped to teach me about signal integrity on long data lines and voltage drop over high-current traces. It gave me practical experience in embedded firmware development (C++), high-current DC power regulation, and high-speed digital serial communication, and proved I could take a hardware-software system from concept to a functional prototype. Going forward, I want to iterate on the enclosure design and explore replacing the Arduino Nano with a more capable microcontroller to support higher LED counts and even lower latency. Plus, my setup looks so much better now!</p>
                    </div>
                </div>

                {/* --- OTHER PROJECTS --- */}

                <div className="project">
                    <img src={AltiumImage} className="zoom" alt="Altium Rigid-Flex PCB" width="100%"/>
                    <h2>Wearable Haptics (VIP: Mechatronics & Motivation)</h2>
                    <p>Designed a rigid-flex PCB in Altium Designer to fit complex wearable haptic technology into a compact ring form factor. I applied strict trace width constraints (0.15mm standard, 0.2mm power) and carefully optimized via placement to balance impedance requirements with tight physical space limitations.</p>
                </div>

                <div className="project">
                    <img src={RoverImage} className="zoom" alt="Quakey Lunar Rover" width="100%"/>
                    <h2>"Quakey" Lunar Rover (GT IEEE RoboTech)</h2>
                    <p>Won 1st Place Overall and 1st in the Autonomous Track at the January 2026 RoboTech Hackathon. Over 36 hours, my team built a vision-based lunar rover capable of autonomous off-road navigation, semantic classification of lunar hazards, and precise depth estimation. I led hardware integration and robotic arm design.</p>

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
                    <p>Developed autonomous navigation algorithms in Python for an iRobot Create 3 for Intro to Computing (Python). I programmed maze-solving logic using flood-fill algorithms, path planning, and reactive behaviors like dynamic object following.</p>
                </div>

            </div>
        </FadeIn>
    </div>
    );
}

export default Project;
