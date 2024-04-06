
#version 300 es
#ifdef GL_ES
precision highp float;
#endif

attribute vec3 position;


uniform mat4 projectionMatrix;

varying vec3 vNormal;
varying vec3 vFragPos;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

}
