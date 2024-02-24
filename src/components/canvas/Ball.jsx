import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props) => {
  if (!props || !props.imgUrl) {
    // If props or props.imgUrl is undefined, you can handle it accordingly
    return null; // or return some default content
  }
  const [decal] = useTexture([props.imgUrl]);
  return <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0, 0, 0,0.05]}/>
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1,1]}/>
        <meshStandardMaterial 
          color={"#fff8eb"}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
          map={decal}
        />
        <Decal 
          position={[0, 0, 1]}
          rotation={[2*Math.PI, 0, 6.25]}
          map={decal}
        />
      </mesh>
    </Float>;
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameLoop="demand"
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
