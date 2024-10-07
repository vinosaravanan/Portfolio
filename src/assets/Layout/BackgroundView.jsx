import React from 'react';
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

function BackgroundView({ children }) {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <div id="particles-js" style={{ position: 'relative', minHeight: '100vh', overflow: 'visible' }}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fullScreen: {
                        enable: false, // Ensures particles don't take full screen
                        zIndex: -1 // Particles behind content
                    },
                    fpsLimit: 120,
                    interactivity: {
                        modes: {
                            push: {
                                quantity: 4
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: "#ec6e59",
                        },
                        links: {
                            color: "#ec6e59",
                            distance: 150,
                            enable: true,
                            opacity: 0.3,
                            width: 1
                        },
                        collisions: {
                            enable: true
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce"
                            },
                            random: true,
                            speed: 2,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800
                            },
                            value: 80
                        },
                        opacity: {
                            value: 0.5
                        },
                        shape: {
                            type: "circle"
                        },
                        size: {
                            value: { min: 1, max: 3 }
                        }
                    },
                    detectRetina: true
                }}
            />
            <div style={{
                position: 'fixed', // Fix background to make it stay while scrolling
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: '#000', // Black background
                zIndex: -2 // Ensure it's behind the particles
            }} />
            <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
                {children}
            </div>
        </div>
    );
}

export default BackgroundView;
