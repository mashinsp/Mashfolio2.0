import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile, rotationSpeed }) => {
  const computer = useGLTF("./desktop_pc/me.glb");

  // Adjust scale based on device type
  const scale = isMobile ? 2 : 4;
  const position = isMobile ? [-2, -2, 0] : [-2, -2, 0];

  return (
    <mesh>
      <hemisphereLight intensity={0.8} groundColor="black" position={[0, 10, 0]} />
      <spotLight
        position={[0, 10, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} position={[0, 0, 0]} />
      <primitive
        object={computer.scene}
        scale={scale}
        position={position}
        rotation={[0, Math.PI / 2, 0]}
        onUpdate={(self) => {
          // Rotate around the model's own y-axis only if it's not a mobile device
          if (!isMobile) {
            self.rotation.y += rotationSpeed;
          }
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
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addListener(handleMediaQueryChange);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
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
          enableRotate={!isMobile} // Enable rotation only if it's not a mobile device
        />
        <Computers isMobile={isMobile} rotationSpeed={rotationSpeed} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
