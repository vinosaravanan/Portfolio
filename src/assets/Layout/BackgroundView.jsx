// import React from 'react';
// import Particles from "@tsparticles/react";
// import { loadFull } from "tsparticles";

// function BackgroundView({ children }) {
//     const particlesInit = async (main) => {
//         await loadFull(main);
//     };

//     const particlesLoaded = (container) => {
//         console.log(container);
//     };

//     return (
//         <div id="particles-js" style={{ position: 'relative', minHeight: '100vh', overflow: 'visible' }}>
//             <Particles
//                 id="tsparticles"
//                 init={particlesInit}
//                 loaded={particlesLoaded}
//                 options={{
//                     fullScreen: {
//                         enable: false, // Ensures particles don't take full screen
//                         zIndex: -1 // Particles behind content
//                     },
//                     fpsLimit: 120,
//                     interactivity: {
//                         modes: {
//                             push: {
//                                 quantity: 4
//                             },
//                             repulse: {
//                                 distance: 200,
//                                 duration: 0.4
//                             }
//                         }
//                     },
//                     particles: {
//                         color: {
//                             value: "#ec6e59",
//                         },
//                         links: {
//                             color: "#ec6e59",
//                             distance: 150,
//                             enable: true,
//                             opacity: 0.3,
//                             width: 1
//                         },
//                         collisions: {
//                             enable: true
//                         },
//                         move: {
//                             direction: "none",
//                             enable: true,
//                             outModes: {
//                                 default: "bounce"
//                             },
//                             random: true,
//                             speed: 2,
//                             straight: false
//                         },
//                         number: {
//                             density: {
//                                 enable: true,
//                                 area: 800
//                             },
//                             value: 80
//                         },
//                         opacity: {
//                             value: 0.5
//                         },
//                         shape: {
//                             type: "circle"
//                         },
//                         size: {
//                             value: { min: 1, max: 3 }
//                         }
//                     },
//                     detectRetina: true
//                 }}
//             />
//             <div style={{
//                 position: 'fixed', // Fix background to make it stay while scrolling
//                 top: 0,
//                 left: 0,
//                 width: '100%',
//                 height: '100%',
//                 backgroundColor: '#000', // Black background
//                 zIndex: -2 // Ensure it's behind the particles
//             }} />
//             <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
//                 {children}
//             </div>
//         </div>
//     );
// }

// export default BackgroundView;





import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim"; // Loading slim tsparticles

const BackgroundView = ({ id, children }) => {
  console.log(id);
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#0d0c0c",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: 'grab',
          },
        },
        modes: {
          push: {
            distance: 200,//200
            duration: 15,
          },
          grab: {
            distance: 150,// 150
          },
        },
      },
      particles: {
        color: {
          value: "#ec6e59",//
        },
        links: {
          color: "#f22d0c",//#FFFFFF
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Particles id={id} init={particlesLoaded} options={options} />
      {/* Render children */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        {children}
      </div>
    </div>
  );
};

export default BackgroundView;