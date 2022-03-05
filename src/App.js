import { withTheme } from "styled-components";
import "./styles.css";
import Waveform from "./Waveform";

export default function App() {
  return (
    <div
      className="App"
      style={{ background: "#f0f0f0", padding: "2rem 4rem" }}
    >
      <h1>Nice react audio player with Wavesurfer.js</h1>
      <div
        style={{
          width: 350,
          background: "white",
          borderRadius: "10px",
          padding: "0rem 1rem",
          margin: "0 auto"
        }}
      >
        <Waveform />
      </div>
    </div>
  );
}
