import * as THREE from 'three';
import MathEx from 'js-util/MathEx';

import vs from './glsl/background.vs';
import fs from './glsl/background.fs';

export default class Background extends THREE.Mesh {
  constructor() {
    // Define Geometry
    const geometry = new THREE.SphereBufferGeometry(100, 12, 12);

    // Define Material
    const material = new THREE.RawShaderMaterial({
      uniforms: {
        time: {
          type: 'f',
          value: 0
        },
        hex: {
          type: 'f',
          value: 0
        },
      },
      vertexShader: vs,
      fragmentShader: fs,
      side: THREE.BackSide,
      depthTest: false,
    });

    // Create Object3D
    super(geometry, material);
    this.name = 'Background';
  }
  start() {
  }
  update(time, hex) {
    this.material.uniforms.time.value += time;
    this.material.uniforms.hex.value = hex;
  }

}
