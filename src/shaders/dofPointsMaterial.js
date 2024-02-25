import * as THREE from "three";
import { extend } from "@react-three/fiber";

class DofPointsMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      vertexShader: `
      uniform sampler2D positions;
      // uniform float uTime;
      uniform float uFocus;
      uniform float uFov;
      uniform float uBlur;
      varying float vDistance;
      varying vec2 vUv;

      void main() { 
        vec3 pos = texture2D(positions, position.xy).xyz;
        
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        vDistance = abs(uFocus - -mvPosition.z);
        
        gl_PointSize = (step(1.0 - (1.0 / uFov), position.x)) * vDistance * uBlur;
      }`,
      fragmentShader: `
      uniform float uOpacity;
      varying float vDistance;
      uniform float uTime;
      uniform float uTheme;
      uniform float screenWidth;

      void main() {
        float normalizedX = gl_FragCoord.x / screenWidth;
        float t = uTime * 0.015;
        vec2 cxy = 2.0 * gl_PointCoord - 1.0;
        if (dot(cxy, cxy) > 1.0) discard;
        
        //gl_FragColor = vec4(vec3(1.0), (1.04 - clamp(vDistance * 1.5, 0.0, 1.0)));
        //gl_FragColor = vec4(vec3(1.00), (1.04 - clamp(vDistance * 1.5, 0.0, 1.0)));
        
        // vec3 baseColorA = vec3(0.63, 0.333, 0.73);
        // vec3 baseColorB = vec3(0.0, 0.0, 0.0);
        // vec3 baseColor = mix(baseColorA, baseColorB, sin(t));
        
        //vec3 baseColor = vec3(221, 0, 224) / 255.0;
        //vec3 baseColor = vec3(255, 255, 255) / 255.0;
        vec3 baseColor = vec3(0.0, 0.0, 0.0) / 255.0;
        
        //  #4B07DB, rgb(0,116,225)

        //vec3 lightColor = vec3(255.0, 255.0, 255.0) / 255.0;
        vec3 lightColor = vec3(254, 111, 29) / 255.0; // orange
        
        // vec3 darkColor = vec3(0.0, 0.0, 0.0) / 255.0;
        //  vec3 darkColor = vec3(40, 233, 140) / 255.0;
        
        vec3 darkColor = vec3(20, 197, 253) / 255.0; //  aquamarine
        //vec3 darkColor = vec3(19, 56, 243) / 255.0; // dark blue
        //vec3 darkColor = vec3(243, 19, 19) / 255.0; // red
        vec3 pinkColor = vec3(255, 153, 204) / 255.0; //  pink
        //vec3 darkColor = vec3(40, 233, 140) / 255.0; //  green
        //vec3 darkColor = vec3(254, 111, 29) / 255.0; //  orange
        
        // vec3 themeColor = mix(darkColor, lightColor, uTheme);
        vec3 themeColor = mix(darkColor, pinkColor, normalizedX/1.5);
        
        gl_FragColor = vec4(themeColor, (1.04 - clamp(vDistance * 1.5, 0.0, 1.0)));
      
      }`,
      uniforms: {
        positions: { value: null },
        uTime: { value: 0 },
        uFocus: { value: 5.1 },
        uTheme: { value: 0.0 },
        uFov: { value: 50 },
        uBlur: { value: 30 },
        screenWidth: { value: 1200 },
      },
      transparent: true,
      blending: THREE.NormalBlending,
      depthWrite: false,
    });
  }
}

//(161,85,185)

extend({ DofPointsMaterial });
