import { useEffect, useState } from "react";

function AudioVisualizer() {
  return (
    <mesh>
      <boxGeometry />
      <meshBasicMaterial />
    </mesh>
  );
}

export default AudioVisualizer;

const AudioAnalyzer = () => {
  const [audioData, setAudioData] = useState(null);

  useEffect(() => {
    const audioContext = new AudioContext();
    const analyser = audioContext.createAnalyser();
    // Load and play audio, connect it to the analyser
    // ...

    const getData = () => {
      const data = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteFrequencyData(data);
      setAudioData(data);
      requestAnimationFrame(getData);
    };

    getData();
  }, []);

  return <AudioVisualizer audioData={audioData} />;
};
