/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile, rotationSpeed }) => {
  const computer = useGLTF("./desktop_pc/me.glb");

  return (
    <mesh>
      <hemisphereLight intensity={0.8} groundColor="black" position={[0, 10, 0]} />
      <spotLight
        position={[0, 10, 10]}  // Adjust the position for the spot light
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} position={[0, 0, 0]} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 1 : 4}
        position={isMobile ? [-2, -2, 0] : [-2, -2, 0]}
        rotation={[0, Math.PI / 2, 0]}
        onUpdate={(self) => {
          // Rotate around the model's own y-axis
          self.rotation.y += rotationSpeed;
        }}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [rotationSpeed, setRotationSpeed] = useState(0.005);
  const [rotationDirection, setRotationDirection] = useState(1);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addListener(handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    // Start the rotation animation
    const intervalId = setInterval(() => {
      setRotationSpeed(rotationDirection * 0.005);
      setRotationDirection((prevDirection) => -prevDirection);
    }, 3000); // Change rotation direction every 3 seconds

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [rotationDirection]);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} rotationSpeed={rotationSpeed} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
