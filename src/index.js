import * as THREE from "three";
import { render, events, extend } from "@react-three/fiber";
import App from "./App";

import "./styles.css";
import "./section.css";

extend(THREE);

window.addEventListener("resize", () =>
  render(<App />, document.querySelector("canvas"), {
    events,
    linear: true,
    camera: { fov: 25, position: [0, 0, 6] },
    gl: new THREE.WebGLRenderer({
      canvas: document.querySelector("canvas"),
      antialias: true,
      alpha: true,
    }),
  })
);

window.dispatchEvent(new Event("resize"));
