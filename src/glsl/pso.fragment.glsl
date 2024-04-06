#version 300 es

#ifdef GL_ES
precision highp float;
#endif


uniform vec3 lightPosition;
uniform vec3 viewPosition;
uniform vec3 ambientColor;
uniform vec3 diffuseColor;
uniform vec3 specularColor;
uniform float shininess;

varying vec3 vNormal;
varying vec3 vFragPos;

void main() {
  vec3 normal = normalize(vNormal);
  vec3 lightDir = normalize(lightPosition - vFragPos);
  vec3 viewDir = normalize(viewPosition - vFragPos);
  vec3 reflectDir = reflect(-lightDir, normal);

  vec3 ambient = ambientColor;
  vec3 diffuse = max(dot(normal, lightDir), 0.0) * diffuseColor;
  vec3 specular = pow(max(dot(viewDir, reflectDir), 0.0), shininess) * specularColor;

  gl_FragColor = vec4(ambient + diffuse + specular, 1.0);
}