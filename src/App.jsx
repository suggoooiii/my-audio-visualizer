/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import "./App.css";
import { OrbitControls } from "@react-three/drei";
// import AudioVisualizer from "./components/AudioVisualizer";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <Canvas
        gl={{
          outputColorSpace: "srgb-linear",
        }}
      >
        <color attach="background" args={["#000"]} />
        <OrbitControls />
        {/* <AudioVisualizer /> */}

        <Experience />
      </Canvas>
    </>
  );
}

export default App;
