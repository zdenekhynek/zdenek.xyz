import * as THREE from "three";
import { extend } from "@react-three/fiber";
import glsl from "babel-plugin-glsl/macro";

function getPoint(v, size, data, offset) {
	v.set(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1);
	if (v.length() > 1) return getPoint(v, size, data, offset);
	return v.normalize().multiplyScalar(size).toArray(data, offset);
}

function getSphere(count, size, p = new THREE.Vector4()) {
	const data = new Float32Array(count * 4);
	for (let i = 0; i < count * 4; i += 4) getPoint(p, size, data, i);
	// for (let i = 0; i < count * 3; i += 3) getPoint(p, size, data, i);
	return data;
}

class SimulationMaterial extends THREE.ShaderMaterial {
	constructor() {
		//  get ~1mil points (512 * 512 * 4)
		const positionsTexture = new THREE.DataTexture(getSphere(512 * 512, 128), 512, 512, THREE.RGBAFormat, THREE.FloatType);
		positionsTexture.needsUpdate = true;

		console.log("positionsTexture", positionsTexture);

		super({
			vertexShader: `varying vec2 vUv;
      void main() {
        vUv = uv;

        //  projectionMatrix and modelViewMatrix are passed to
        //  the ShaderMaterial based on the camera settings
        //  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
			fragmentShader: glsl`uniform sampler2D positions;
      uniform float uTime;
      uniform float uCurlFreq;
      varying vec2 vUv;
      #pragma glslify: curl = require(glsl-curl-noise2)
      #pragma glslify: noise = require(glsl-noise/classic/3d.glsl)      
      void main() {
        float t = uTime * 0.015;
        vec3 pos = texture2D(positions, vUv).rgb; // basic simulation: displays the particles in place.
        //  gl_FragColor = vec4(pos, 1.0);

        vec3 curlPos = texture2D(positions, vUv).rgb;
        pos = curl(pos * uCurlFreq);
        // pos = curl(pos * uCurlFreq + t);
        // pos = pos;
        //  curlPos = curl(curlPos * uCurlFreq + t);
        curlPos = curl(curlPos * uCurlFreq);
        curlPos += curl(curlPos * uCurlFreq * 2.0) * 0.5;
        //curlPos += curl(curlPos * uCurlFreq * 4.0) * 0.25;
        //curlPos += curl(curlPos * uCurlFreq * 8.0) * 0.125;
        //curlPos += curl(pos * uCurlFreq * 16.0) * 0.0625;
        //gl_FragColor = vec4(mix(pos, curlPos, noise(pos + t)), 1.0);
        //gl_FragColor = vec4(mix(pos, curlPos, clamp(t, 0.0, 1.0)), 1.0);
        //gl_FragColor = vec4(mix(pos, curlPos, mod(t, 1.0)), 1.0);

        //  oscillate between two params
        gl_FragColor = vec4(mix(pos, curlPos, sin(t)), 1.0);
        
        //gl_FragColor = vec4(curlPos, 1.0);
        // gl_FragColor = vec4(mix(pos, curlPos, noise(pos)), 1.0);
        // gl_FragColor = vec4(pos, 1.0);
      }`,
			uniforms: {
				positions: { value: positionsTexture },
				uTime: { value: 0 },
				uCurlFreq: { value: 0.25 }
			}
		});
	}
}

extend({ SimulationMaterial });
