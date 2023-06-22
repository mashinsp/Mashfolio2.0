<<<<<<< HEAD
=======
/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
>>>>>>> 636a77075ddbdf0d236ab4fc94a86c8d9063a83a
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
<<<<<<< HEAD
  const earth = useGLTF("./planet/scene.gltf");

=======
  const earth = useGLTF("./planet/scene.glb");
  
>>>>>>> 636a77075ddbdf0d236ab4fc94a86c8d9063a83a
  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

<<<<<<< HEAD
export default EarthCanvas;
=======
export default EarthCanvas;
>>>>>>> 636a77075ddbdf0d236ab4fc94a86c8d9063a83a
