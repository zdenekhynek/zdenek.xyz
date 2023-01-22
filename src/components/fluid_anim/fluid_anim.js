import React, { useEffect } from "react";
// import { useReducedMotion } from "../../hooks/use_reduced_motion";
import styled from "styled-components";

import WebGLFluid from "./fluid";

export default function FluidAnim({
  brightness = 0.1,
  immediate = false,
  spawnInterval = 300,
}) {
  const prefersReducedMotion = false; // useReducedMotion();

  useEffect(() => {
    WebGLFluid(document.querySelector("canvas"), {
      // options
      BRIGHTNESS: brightness,
      IMMEDIATE: immediate,
      SPAWN_INTERVAL: spawnInterval,
    });
  }, [brightness, immediate, spawnInterval]);

  return <>{!prefersReducedMotion && <StyledCanvas />}</>;
}

const StyledCanvas = styled.canvas`
  width: 100%;
  height: 100%;
  background-color: #281046;
`;
