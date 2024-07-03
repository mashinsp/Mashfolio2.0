import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/me.glb");
  const meshRef = useRef();
  const scale = isMobile ? 2 : 2.5;
  const position = isMobile ? [0, -2, 0] : [0, -2, 0];

  useFrame((state, delta) => {
    if (meshRef.current && !isMobile) {
      meshRef.current.rotation.y += delta * 0.5; // Rotation only for non-mobile
    }
  });

  return (
    <mesh ref={meshRef}>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      
      <pointLight intensity={1} position={[-10, 10, -10]} />
      <pointLight intensity={0.8} position={[10, 10, 10]} />

      <primitive
        object={computer.scene}
        scale={scale}
        position={position}
        rotation={[0, Math.PI / 2, 0]} 
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div style={{ height: '100vh', overflow: 'auto', touchAction: 'auto' }}>
      <Canvas
        frameloop={isMobile ? "demand" : "always"}
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        style={{ position: 'sticky', top: 0 , pointerEvents: 'none'}}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            enableRotate={!isMobile}
          />
          <Computers isMobile={isMobile} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;