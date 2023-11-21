import { useRef, useEffect } from "react";

import {
  PerspectiveCamera,
  OrbitControls,
  Html,
  CameraShake,
  useCamera,
} from "@react-three/drei";

import { useThree } from "@react-three/fiber";
// import { useControls } from "leva";
import { Particles } from "./Particles";
import UI from "./ui";
import { injectDarkModeScripts } from "./fns";
import useExternalScripts from "./hooks/use_external_script";
// import Footer from "./footer";

export function calculateRotationFactor(scrollY) {
  return 1;
}

export default function App() {
  useExternalScripts({ scriptString: injectDarkModeScripts });

  const orbitRef = useRef();
  const cameraRef = useRef();

  // const props = useControls({
  //   focus: { value: 5.1, min: 3, max: 7, step: 0.01 },
  //   speed: { value: 20, min: 0.1, max: 100, step: 0.1 },
  //   aperture: { value: 1.8, min: 1, max: 5.6, step: 0.1 },
  //   fov: { value: 50, min: 0, max: 200 },
  //   curl: { value: 0.25, min: 0.01, max: 0.5, step: 0.01 },
  // });

  let props = {
    focus: { value: 5.1, min: 3, max: 7, step: 0.01 },
    speed: { value: 20, min: 0.1, max: 100, step: 0.1 },
    aperture: { value: 1.8, min: 1, max: 5.6, step: 0.1 },
    fov: { value: 50, min: 0, max: 200 },
    curl: { value: 0.25, min: 0.01, max: 0.5, step: 0.01 },
  };
  props = Object.keys(props).reduce((acc, key) => {
    acc[key] = props[key].value;
    return acc;
  }, {});

  // useThree(({camera}) => {
  //   camera.rotation.set(deg2rad(30), 0, 0);
  // });

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     console.log(
  //       "handle scroll",
  //       scrollY,
  //       "orbitRef.current.object.zoom",
  //       orbitRef.current.object
  //     );
  //     if (orbitRef.current) {
  //       const rotationFactor = calculateRotationFactor(scrollY);
  //       orbitRef.current.setPolarAngle(rotationFactor);

  //       cameraRef.current.zoom = scrollY * 1000;
  //       cameraRef.current.updateProjectionMatrix();
  //       orbitRef.current.update();

  //       // console.log(
  //       //   "orbitRef.current.object.zoom",
  //       //   orbitRef.current.object.zoom
  //       // );
  //       // orbitRef.current.object.zoom = scrollY * 1000;
  //       // orbitRef.current.updateProjectionMatrix();

  //       console.log(orbitRef.current);
  //       orbitRef.current.update();
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      <PerspectiveCamera ref={cameraRef} />
      <OrbitControls
        ref={orbitRef}
        makeDefault
        autoRotate
        autoRotateSpeed={0.5}
        zoomSpeed={0.1}
      />
      {/* <CameraShake yawFrequency={1} maxYaw={0.05} pitchFrequency={1} maxPitch={0.05} rollFrequency={0.5} maxRoll={0.5} intensity={0.2} /> */}
      <Particles {...props} />
      <Html fullscreen /*style={{ "pointer-events": "none" }} */>
        <>
          <UI />
          {/* <Footer /> */}
        </>
      </Html>
    </>
  );
}
